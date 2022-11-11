/**
 * 封装 axios
 */
import axios from 'axios';
import { useUserStore } from '@/store';
import { BASE_API } from '@/constants';
import Config from '@/constants/config';
import ErrorCode from '@/constants/error-code';
import { getLocStorage, saveTokens } from '@/utils/token';
export interface CustomData<T> {
	code: number;
	msg?: string;
	message?: string;
	data?: T;
	[keys: string]: any;
}
const config = {
	baseURL: BASE_API || '',
	timeout: 5 * 1000, // 请求超时时间设置
	crossDomain: true,
	// withCredentials: true, // Check cross-site Access-Control
	// 定义可获得的http响应状态码
	// return true、设置为null或者undefined，promise将resolved,否则将rejected
	validateStatus(status: number) {
		return status >= 200 && status < 510;
	},
};

/**
 * 错误码是否是refresh相关
 * @param { number } code 错误码
 */
function refreshTokenException(code: number) {
	const codes = [4001, 4002, 4004, 4005, 4006, 4020, 4021];
	return codes.includes(code);
}

function accessTokenException(code: number) {
	const codes = [4010, 4011];
	return codes.includes(code);
}

// 创建请求实例
const _axios = axios.create(config);

_axios.interceptors.request.use(
	(originConfig) => {
		const reqConfig: any = { ...originConfig };

		// step1: 容错处理
		if (!reqConfig.url) {
			console.error('request need url');
		}

		reqConfig.method = reqConfig.method.toLowerCase(); // 大小写容错

		// 参数容错
		if (reqConfig.method === 'get') {
			if (!reqConfig.params) {
				reqConfig.params = reqConfig.data || {};
			}
		} else if (reqConfig.method === 'post') {
			if (!reqConfig.data) {
				reqConfig.data = reqConfig.params || {};
			}

			// 检测是否包含文件类型, 若包含则进行 formData 封装
			let hasFile = false;
			Object.keys(reqConfig.data).forEach((key) => {
				if (typeof reqConfig.data[key] === 'object') {
					const item = reqConfig.data[key];
					if (
						item instanceof FileList ||
						item instanceof File ||
						item instanceof Blob
					) {
						hasFile = true;
					}
				}
			});

			// 检测到存在文件使用 FormData 提交数据
			if (hasFile) {
				const formData = new FormData();
				Object.keys(reqConfig.data).forEach((key) => {
					formData.append(key, reqConfig.data[key]);
				});
				reqConfig.data = formData;
			}
		}

		// step2: permission 处理
		if (reqConfig.url === '/user/refresh') {
			const refreshToken = getLocStorage('refresh_token');
			if (refreshToken) {
				reqConfig.headers.Authorization = refreshToken;
			}
		} else {
			const accessToken = getLocStorage('access_token');
			if (accessToken) {
				reqConfig.headers.Authorization = accessToken;
			}
		}

		return reqConfig;
	},
	(error) => Promise.reject(error)
);

// Add a response interceptor
_axios.interceptors.response.use(
	async (res) => {
		// if (res.status.toString().charAt(0) === '2') {
		// 	return res.data;
		// }

		const { code, message } = res.data;

		return new Promise(async (resolve, reject) => {
			let tipMessage: any = '网络异常';
			const { url, handleError, showBackend } = res.config as any;
			if (code === 0) {
				return resolve(res);
			}

			// refresh_token 异常，直接登出
			if (refreshTokenException(code)) {
				setTimeout(() => {
					const userStore = useUserStore();
					userStore.logout();
					const { origin } = window.location;
					window.location.href = origin;
				}, 1500);
				return resolve(res);
			}
			// assess_token相关，刷新令牌
			if (accessTokenException(code)) {
				const cache: any = {};
				if (cache.url !== url) {
					cache.url = url;
					const {
						data: {
							data: { access_token, refresh_token },
						},
					} = await _axios('/user/refresh');
					saveTokens(access_token, refresh_token);
					// 将上次失败请求重发
					const result = await _axios(res.config);
					return resolve(result);
				}
			}

			// 弹出信息提示的第一种情况：直接提示后端返回的异常信息（框架默认为此配置）；
			// 特殊情况：如果本次请求添加了 handleError: true，用户自行通过 try catch 处理，框架不做额外处理
			if (handleError) {
				return reject(res);
			}

			// 弹出信息提示的第二种情况：采用前端自己定义的一套异常提示信息（需自行在配置项开启）；
			// 特殊情况：如果本次请求添加了 showBackend: true, 弹出后端返回错误信息。
			if (Config.useFrontEndErrorMsg && !showBackend) {
				// 弹出前端自定义错误信息
				const errorArr = Object.entries(ErrorCode).filter(
					(v) => v[0] === code.toString()
				);
				// 匹配到前端自定义的错误码
				if (errorArr.length > 0 && errorArr[0][1] !== '') {
					[[, tipMessage]] = errorArr;
				} else {
					tipMessage = ErrorCode['777'];
				}
			}

			if (typeof message === 'string') {
				tipMessage = message;
			}
			if (Object.prototype.toString.call(message) === '[object Object]') {
				[tipMessage] = Object.values(message).flat();
			}
			if (Object.prototype.toString.call(message) === '[object Array]') {
				[tipMessage] = message;
			}
			window.$message.error(tipMessage);
			reject(res);
		});
	},
	(error) => {
		// 判断请求超时
		if (
			error.code === 'ECONNABORTED' &&
			error.message.indexOf('timeout') !== -1
		) {
			window.$message.error('请求超时');
			return Promise.reject(error);
		}
		if (!error.response) {
			window.$message.error('请检查 API 是否异常');
			return Promise.reject(error);
		}
		window.$message.error('网络异常');
		return Promise.reject(error);
	}
);

// 导出常用函数
/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url: string, data = {}, params = {}) {
	return _axios({
		method: 'post',
		url,
		data,
		params,
	});
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url: string, params = {}) {
	return _axios({
		method: 'get',
		url,
		params,
	});
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url: string, data = {}, params = {}) {
	return _axios({
		method: 'put',
		url,
		params,
		data,
	});
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url: string, params = {}) {
	return _axios({
		method: 'delete',
		url,
		params,
	});
}

export default _axios;
