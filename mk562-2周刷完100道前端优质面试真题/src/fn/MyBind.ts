/*
 * @Author: Rock Chang
 * @Date: 2022-11-16 23:20:48
 * @LastEditTime: 2022-11-16 23:56:32
 * @Description: 手写 bind 函数
 bind
  返回一个新函数,但不执行
  绑定 this 和部分参数
  如果是箭头函数, 无法改变 this, 只能改变参数
 */

/**
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

/* 功能测试 */
function fn(this: any, a: any, b: any, c: any) {
	console.log('[ this ]-25', this, a, b, c);
}
//@ts-ignore
const fn1 = fn.mybind({ x: 100 }, 1, 2);
fn1(3);

export {};
