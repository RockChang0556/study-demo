/* 
  typeof
  只能识别基本数据类型和引用类型, 如 arr 和 obj 都会返回 'object'
*/
// 三种特殊情况
// console.log('[  ]', typeof null); // object
// console.log('[  ]', typeof NaN); // number
// console.log('[  ]', typeof document.all); // undefined
/* 
  为什么 typeof null === 'object'
    历史遗留问题，第一版的 JavaScript 中，只有 5 种数据类型，其中 000 表示 object，
    但是 null比较特殊，他的标记位也是 000，所以 typeof null === 'object'
  为什么不修复这个问题
    兼容性问题，历史遗留问题太多，修复的话可能会影响现在版本
*/

/* 
  constuctor
  原理: constuctor 指向创建实例对象的构造函数
  注意事项: 
    null 和 undefined 没有构造函数
    constuctor 可以被改写
  故 只可作为辅助判断  https://github.com/reduxjs/redux/blob/fbfe51458ca2addf97f426d505bf2c27503a5ff1/src/utils/kindOf.ts#L21
*/
// constuctor 被改写
// String.prototype.constuctor = function a() {
// 	return {};
// };
// console.log('[  ]', ''.constuctor);
// 正常使用
// console.log('[  ]', ''.constructor.name); // String
// console.log('[  ]', true.constructor.name); // Boolean

/* 
  instanceof
  原理：就是原型链上查找，查到即是其实例 
  注意事项：
    右操作数必须是函数或者class, 只有这两才能被 new
    在多全局对象(如多 window之间)的判断是不准的
*/
// console.log('[ instanceof ]', [] instanceof Object);

/* 
  isPrototypeOf
  测试一个对象是否存在于另一个对象的原型链上。 
  能正常返回值的情况下， 基本等同于 instanceof
*/
// console.log('[ isPrototypeOf ]', Object.prototype.isPrototypeOf([]));

/* 
  Object.prototype.toString()
  原理：通过函数的动态this特性，返回其数据类型， '[object Date]' 
  思考题：
    自定义对象如何获得 [object MyArray] 类型
    Object.prototype.toString.call(Boolean.prototype) = ？
*/

/* 
  鸭子类型检测
  原理：检查自身属性的类型或者执行结果的类型  会嘎嘎叫的就是鸭子
  例子：kindof 与 p-is-promise  https://github.com/sindresorhus/p-is-promise/blob/main/index.js
  候选方法
*/

/* 
  Symbol.toStringTag
  由 Object.prototype.toString() 方法内部访问
  适用场景：需自定义类型 
  注意事项：兼容性, es6 后才出现
*/
// 自定义类型 demo  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag#%E4%BD%BF%E7%94%A8_tostringtag_%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE
// class ValidatorClass {
// 	get [Symbol.toStringTag]() {
// 		return 'Validator';
// 	}
// }
// Object.prototype.toString.call(new ValidatorClass()); // "[object Validator]"

/* 
  等比较
  原理: 与某个固定值进行比较 
  适用场景: undefined, window, document, null等
*/
// function isUndefined(obj) {
// 	return obj === void 0;
// }
// console.log('[ isUndefined ]', isUndefined(undefined));
export {};
