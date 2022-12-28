/* 
  NaN 和 Number.NaN
*/

// console.log('[ typeof NaN ]', typeof NaN); // number
// console.log('[ typeof Number.NaN ]', typeof Number.NaN); // number

// console.log('[ NaN === NaN ]', NaN === NaN); // false
// console.log('[ Number.NaN === Number.NaN ]', Number.NaN === Number.NaN); // false

// console.log('[  ]', Object.getOwnPropertyDescriptor(globalThis, 'NaN'));

/* 
  特点 1: typeof 返回值都是 number
  特点 2: 都不等于自身
  特点 3: 不能被删除
*/

/* 
  综合判断 isNaN
*/
// function isNaN1(n: unknown) {
// 	return Object.is(n, NaN);
// }
// function isNaN2(n: unknown) {
// 	return n !== n;
// }
// function isNaN3(n: unknown) {
// 	return typeof n === 'number' && isNaN(n);
// }

/* 
  透过陷阱看本质
  includes 调用内部的 Number::sameValueZero // https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types-number-sameValueZero
  indexOf 调用内部的 Number::equal  // https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-numeric-types-number-equal
*/
const arr = [NaN];
console.log('[ indexOf ]', arr.indexOf(NaN)); // -1
console.log('[ includes ]', arr.includes(NaN)); // true

export {};
