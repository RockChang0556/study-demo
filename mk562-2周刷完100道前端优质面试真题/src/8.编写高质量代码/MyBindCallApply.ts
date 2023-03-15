/*
 * @Author: Rock Chang
 * @Date: 2022-11-16 23:20:48
 * @LastEditTime: 2022-11-22 23:48:03
 * @Description: 手写 bind/call/apply 函数
 */

/**
 * bind
		返回一个新函数,但不执行
		绑定 this 和部分参数
		如果是箭头函数, 无法改变 this, 只能改变参数
 * @param {any} context bind 传入的 this
 * @param {array} bindArgs bind 传入的 各个参数
 * @return {*}
 */
//@ts-ignore
Function.prototype.mybind = function (context: any, ...bindArgs: any[]) {
	const self = this; // 当前函数本身

	return function (...args: any[]) {
		// 合并参数
		const arg = [...bindArgs, ...args];
		return self.apply(context, arg);
	};
};

/**
 * call
		立即执行函数
		绑定 this
		传入执行参数 a,b,c,d...
 * @param {any} context 传入的 this
 * @param {array} bindArgs 传入的 各个参数
 * @return {*} 函数执行结果
 */
//@ts-ignore
Function.prototype.mycall = function (context: any, ...bindArgs: any[]) {
	if (context == null) return globalThis; // globalThis 在浏览器环境是 window，在 node 环境是 global
	// 传入的 this 是值类型，返回对应的引用类型，如传入 100，返回 new Number(100)
	if (typeof context !== 'object') return new Object(context);

	const fnKey = Symbol(); // 唯一对象 key，避免重复
	context[fnKey] = this; // 绑定函数到 this 上

	const res = context[fnKey](...bindArgs); // 执行函数

	delete context[fnKey]; // 清理掉 fn，防止污染
	return res;
};
/**
 * apply
		立即执行函数
		绑定 this
		传入执行参数 [a,b,c,d...]
 * @param {any} context 传入的 this
 * @param {array} bindArgs 传入的参数
 * @return {*} 函数执行结果
 */
//@ts-ignore
Function.prototype.myapply = function (context: any, bindArgs: any[] = []) {
	if (context == null) return globalThis; // globalThis 在浏览器环境是 window，在 node 环境是 global
	// 传入的 this 是值类型，返回对应的引用类型，如传入 100，返回 new Number(100)
	if (typeof context !== 'object') return new Object(context);

	const fnKey = Symbol(); // 唯一对象 key，避免重复
	context[fnKey] = this; // 绑定函数到 this 上

	const res = context[fnKey](...bindArgs); // 执行函数

	delete context[fnKey]; // 清理掉 fn，防止污染
	return res;
};

/* 功能测试 */
function fn(this: any, a: any, b: any, c: any) {
	console.log('[ this ]-25', this, a, b, c);
}
//@ts-ignore
const fn1 = fn.mybind({ x: 100 }, 1, 2);
fn1(3);
//@ts-ignore
const res2 = fn.mycall({ x: 100 }, 1, 2, 3);
//@ts-ignore
const res3 = fn.myapply({ x: 100 }, [1, 2, 3]);
console.log('[ res2 ]-47', res2, res3);
export {};
