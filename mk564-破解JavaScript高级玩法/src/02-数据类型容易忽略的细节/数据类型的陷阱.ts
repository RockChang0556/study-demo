/*
  判断是不是对象
 */
function isObj(obj: unknown) {
	return typeof obj === 'object';
}
// console.log('[  ]-8', isObj(undefined));
/* 
  1、上面的方法有什么问题
    undefined null function等 都会返回 object
  2、为什么 typeof null === 'object'
    历史遗留问题，第一版的 JavaScript 中，只有 5 种数据类型，其中 000 表示 object，
    但是 null比较特殊，他的标记位也是 000，所以 typeof null === 'object'
  3、为什么不修复这个问题
    兼容性问题，历史遗留问题太多，修复的话可能会影响现在版本
*/

/* 
  一元运算符+转数字
*/
function toNumber(num: any) {
	return +num;
}
// 转 ES5 的传统数据类型没有问题
// console.log('[  ]-25', toNumber('120-')); // NaN
// console.log('[  ]-25', toNumber(true)); // 1
// console.log('[  ]-25', toNumber({})); // NaN
// console.log('[  ]-25', toNumber(null)); // 0
// console.log('[  ]-25', toNumber(undefined)); // NaN

// 转 ES6 的 bigInt和 Symbol 有问题
// console.log('[  ]-32', toNumber(10n)); // Err: Cannot convert a BigInt value to a number
// console.log('[  ]-32', toNumber(Symbol.for('a'))); // Err: Cannot convert a BigInt value to a number

// 32 位有符号位移 >>
function toNumber2(num: any) {
	return num >> 0;
}
// 32 位无符号位移 >>>  只能处理 32 位以内的数，即 4294967295以内
function toNumber3(num: any) {
	return num >>> 0;
}
// console.log('string', toNumber2('120-'), toNumber3('120-')); //  0 0
// console.log('boolean', toNumber2(true), toNumber3(true)); // 1 1
// console.log('object', toNumber2({}), toNumber3({})); // 0 0
// console.log('null', toNumber2(null), toNumber3(null)); // 0 0
// console.log('undefined', toNumber2(undefined), toNumber3(undefined)); // 0 0
// console.log(
// 	'bigint',
// 	toNumber2(Number.MAX_SAFE_INTEGER),
// 	toNumber3(Number.MAX_SAFE_INTEGER)
// ); // -1 4294967295

/* 
  字符串批量转为整数
*/
// console.log('[ res ]-58', ['1', '2', '3'].map(parseInt)); // [1, NaN, NaN]
// 过程如下: parseInt 的第二个参数是 2-36 之间的整数
// ['1', '2', '3'].map((v, i) => parseInt(v, i));
// parseInt('1', 0); // 1 任何数的零进制都是 1
// parseInt('2', 1); // NaN 一进制不可能出现 2
// parseInt('3', 2); // NaN 二进制不可能出现 3

export {};
