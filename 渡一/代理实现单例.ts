class Vedio {
	constructor() {
		console.log('[ rock-vedio ]');
	}
}

// const a = new Vedio();
// const b = new Vedio();
// console.log(a === b); // false

const SinVedio = singleLeton(Vedio);
const a = new SinVedio();
const b = new SinVedio();
const c = new SinVedio.constructor();
console.log(a === b); // true
console.log(a === c); // true
console.log('[ rock- ]', c);

/** 代理实现单例模式 */
function singleLeton(className) {
	let ins: object | null = null;
	const proxy = new Proxy(className, {
		// @ts-ignore
		construct(target, args) {
			if (!ins) {
				ins = Reflect.construct(target, args);
			}
			return ins;
		},
	});
	className.prototype.constructor = proxy;
	return proxy;
}
