/*
 * @Author: Rock Chang
 * @Date: 2022-12-08 15:52:30
 * @LastEditTime: 2022-12-11 16:57:54
 * @Description: 如何实现一个前端统计 SDK
 */
const PV_URL_SET = new Set<string>();

class MyStatistic {
	/** 业务线（产品） id */
	private productId: string;
	constructor(productId: string) {
		this.productId = productId;

		this.initPerformance();
		this.initErroe();
	}

	/** 发送统计数据 */
	private send(url: string, params: Record<string, any> = {}) {
		const paramsArr: string[] = [];
		for (let key in params) {
			paramsArr.push(`${key}=${params[key]}`);
		}
		const finallyUrl = decodeURIComponent(`${url}?${paramsArr.join('&')}`);
		// 用<img>发送， 1：可跨域 2：兼容性好
		const img = document.createElement('img');
		img.src = finallyUrl; // 相当于 get 请求
	}

	/** 初始化性能统计 */
	private initPerformance() {
		const url = 'performance_url';
		// 注意：要给最原始的数据，不要多做处理
		this.send(url, performance.timing);
	}

	/** 初始化错误监控 */
	private initErroe() {
		window.addEventListener('error', (event) => {
			const { error, lineno, colno } = event;
			this.error(error, { lineno, colno });
		});
		// promise 未 catch 住的错误
		window.addEventListener('unhandledrejection', (event) => {
			this.error(new Error(event.reason), event);
		});
	}

	/** pv 统计 */
	pv() {
		const href = location.href;
		if (PV_URL_SET.has(href)) return; // 不重复发送 PV
		PV_URL_SET.add(href);

		this.event('pv');
	}

	/** 自定义事件统计 */
	event(key: string, val?: unknown) {
		const url = 'event_url'; // 自定义事件统计 service url
		this.send(url, { key, val });
	}

	/** 错误统计 */
	error(error: Error, errInfo = {}) {
		const url = 'error_url'; // 错误统计 service url
		this.send(url, { ...error, ...errInfo });
	}
}

const log = new MyStatistic('productId1');
log.pv();
log.event('view_ad', { user: 'aaa' });
try {
	// do something
} catch (error) {
	log.error(error, {});
}

export {};
