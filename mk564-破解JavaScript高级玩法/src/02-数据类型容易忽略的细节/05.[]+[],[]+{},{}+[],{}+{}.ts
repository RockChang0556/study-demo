/* 
  []+[],[]+{},{}+[],{}+{} 
  本质是二元操作符+的规则
  https://tc39.es/ecma262/multipage/ecmascript-language-expressions.html#sec-applystringornumericbinaryoperator

  1. 如果操作数是对象，则对象会转换为原始值
  2. 如果其中一个操作数是字符串的话，另一个操作数也会转换成字符串，进行字符串连接 
  3. 否则，调用 ToNumeric 两个操作数都将转换成数字或NaN，进行加法操作 
  4. 如果步骤 3 的两个转换后的操作数类型不一样, throw new TypeError

  ToNumeric 
  如果参数值是 BigInt，则返回原值。否则调用 ToNumber

  ToNumber
  **Argument Type	  **Results
  undefined	        NaN
  null | false	    +0𝔽
  true	            1𝔽
  String	          StringToNumber (argument)
  Number	          argument
  Symbol | BigInt	  throw a TypeError exception
*/

// console.log('[ 10n+10 ]', 10n + 10);
// 规则 4 TypeError: Cannot mix BigInt and other types,

// console.log('[ Symbol.for("a") + 10 ]', Symbol.for('a') + 10);
// 规则 3 TypeError: Cannot convert a Symbol value to a number

/* 
  对象转为原始数据类型
  主要调用以下三个方法（1先调用, 2,3看情况调用，直到返回原始类型）
  1. Symbol.toPrimitive
  2. Object.prototype.valueOf()
  3. Object.prototype.toString()
*/
/* []转为原始类型 */
// console.log('[ [][Symbol.toPrimitive] ]', typeof [][Symbol.toPrimitive]); // undefined
// console.log('[ [].valueOf() ]', [].valueOf()); // []
// console.log('[ [].toString() ]', [].toString()); // ''

/* {}转为原始类型 */
// console.log('[ {}[Symbol.toPrimitive] ]', typeof {}[Symbol.toPrimitive]); // undefined
// console.log('[ {}.valueOf() ]', {}.valueOf()); // {}
// console.log('[ {}.toString() ]', {}.toString()); // '[object Object]'

console.log('[ [] + [] ]', [] + []);
// [].toString() + [].toString()
// '' + ''
// ''

console.log('[ [] + {} ]', [] + {});
// [].toString() + {}.toString()
// '' + '[object Object]'
// '[object Object]'

console.log('[ {} + [] ]', {} + []);
// {}; + []
// + [].toString()
// + ''
// 0 // 直接在浏览器控制台输入 {} + [] 是这个结果

console.log('[ {} + {} ]', {} + {});
// ({} + {})
// {}.toString() + {}.toString()
// '[object Object]' + '[object Object]'
// '[object Object][object Object]'

export {};
