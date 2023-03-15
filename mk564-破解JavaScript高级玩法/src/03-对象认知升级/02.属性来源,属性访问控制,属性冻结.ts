/* 
  属性来源
  静态属性 Object.assign();
  原型属性 Object.prototype.toString();
  实例属性 function Person() { this.name = 'zhansan'; }
*/

// function Person(this: any) {
// 	this.name = 'zhansan'; // 实例属性
// 	this.getName = function () { return this.name; }; // 实例属性
// }
// Person.prototype.getAge = function(){} // 原型属性

// class Person {
// 	name = 'zhansan'; // 实例属性
// 	getName() {} // 原型属性
// 	getAge = () => {}; // 实例属性
// }

/* 
  属性描述符
*/
// let obj = {};
// Object.defineProperty(obj, 'name', { value: 'zhansan' });
// console.log('[ ]', Object.getOwnPropertyDescriptor(obj, 'name'));

// 描述符默认值
// const obj = {};
// Object.defineProperty(obj, 'name', {});
// obj.name = 'zhan';
// console.log('[  ]', obj);

// Configurable 的特殊性
// let obj = {};
// Object.defineProperty(obj, 'name', {
// 	writable: false,
// 	configurable: false,
// });
// Object.defineProperty(obj, 'name', {
// 	writable: true,
// });
// console.log('[  ]', Object.getOwnPropertyDescriptor(obj, 'name'));
// 如果是 false,尝试去删除属性,改变属性,改变访问器信息都会失败(除了修改他的值或者他的 writable 从 true 为 false)

/* 
  属性冻结

  对象的可扩展
  Object.preventExtensions() 对象变得不可扩展,但可以修改和删除
  Object.isExtensible() 判断一个对象是否可扩展

  对象的封闭
  Object.seal() // 阻止添加新属性, 属性标记为不可配置
  Object.isSealed() // 判断对象是否被封闭

  对象的冻结
  Object.freeze() // 不能加新属性, 不可配置, 不能修改值
  Object.isFrozen() // 判断对象是否被冻结
*/

// const obj = { name: 'rock' };
// Object.preventExtensions(obj); // 此时 obj 不可再添加新的属性了
// // Object.isExtensible(obj);
// console.log('[ Object.isExtensible(obj) ]', Object.isExtensible(obj));

// const obj = { name: 'rock' };
// Object.seal(obj);
// // delete obj.name; // 不可以删除
// console.log('[ obj ]', Object.isSealed(obj));

// const obj = { name: 'rock' };
// Object.freeze(obj); // 不能加新属性, 不可配置, 不能修改值
// // Object.isFrozen(obj); // 判断对象是否被冻结
// console.log('[ Object.isFrozen(obj) ]', Object.isFrozen(obj));

export {};
