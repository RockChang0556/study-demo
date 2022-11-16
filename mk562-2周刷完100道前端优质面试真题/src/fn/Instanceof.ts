/*
 * @Author: Rock Chang
 * @Date: 2022-11-16 22:18:52
 * @LastEditTime: 2022-11-16 22:49:43
 * @Description: 手写 instanceof
 instanceof 原理
 判断	左边的隐式原型 是否属于 右边的显式原型
 */

function myInstanceof(instance: any, origin: any) {
	// null or undefined
	if (instance == null) return false;

	const type = typeof instance;
	// 简单类型 instanceof 一直为 false, 如 12 instanceof Number
	if (type !== 'object' && type !== 'function') return false;

	let tempInstance = instance; // 为了防止 instance 被修改
	while (tempInstance) {
		// 左边的隐式原型 是否等于 右边的显式原型
		if (tempInstance.__proto__ === origin.prototype) return true;
		// 没匹配上顺着原型链向上找
		tempInstance = tempInstance.__proto__;
	}

	return false;
}

/* 功能测试 */
// null or undefined
console.log('[  ]-31', myInstanceof(null, Object)); // false
// 值类型
console.log('[  ]-33', myInstanceof('1', String)); // false
// 引用类型
console.log('[  ]-35', myInstanceof([], Array)); // true
console.log('[  ]-35', myInstanceof({}, Array)); // false
console.log('[  ]-35', myInstanceof([], Object)); // true
console.log('[  ]-35', myInstanceof({}, Object)); // true
// 函数
function fn() {}
console.log('[  ]-41', myInstanceof(fn, Function)); // true
// 类
class MyFn {}
const myfn = new MyFn();
console.log('[  ]-45', myInstanceof(myfn, MyFn)); // true
console.log('[  ]-45', myInstanceof(myfn, Object)); // true

export {};
