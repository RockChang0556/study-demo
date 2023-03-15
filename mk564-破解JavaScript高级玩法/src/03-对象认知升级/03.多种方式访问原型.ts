/* 
  prototype 
    prototype是一个对象
    原型会形成原型链，原型链上查找属性比较耗时，访问不存在的属性会访问整个原型链
*/

// class Person {
// 	#pass = 123; // 私有属性
// 	static age = 12; // 静态属性
// 	name; // 实例属性
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// 原型属性
// 	sayName() {
// 		return this.name;
// 	}
// }
// https://babel.docschina.org/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKAJDQGIAHSGAXmgEYAmAZgG5oB6J6QQc9BIc0D0dQcgM8IALmAEBLYNDABzeNAo1GLaIE10wIAGvPGjABbeAtaA87UDR8utzB0gxAFdgAlIgAUmnQEoseXAIAWIiADonMhQB9HgAvniKgPnKgNHqJhBgAJ4Actrw9q44uLiI8AKWiBhePv6pIbjhoUA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.20.13&externalPlugins=

/* 
  __proto__ 
  构造函数的原型，null以外的对象均有 __proto__ 属性
  function，class的实例既有 prototype 也有 __proto__ 属性
  普通函数的祖上三代必为 null,普通对象的祖上两代必为 null
*/
// function a() {}
// console.log('[  ]', a.__proto__.__proto__.__proto__); // null
// const obj = {};
// console.log('[  ]', obj.__proto__.__proto__); // null

/* 
  instanceof
    检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上 
    手写 instanceof 
    Object instanceof Function | Function instanceof Object
*/
// function myInstanceof(instance: any, origin: any) {
// 	// null or undefined
// 	if (instance == null) return false;

// 	const type = typeof instance;
// 	// 简单类型 instanceof 一直为 false, 如 12 instanceof Number
// 	if (type !== 'object' && type !== 'function') return false;

// 	let tempInstance = instance; // 为了防止 instance 被修改
// 	while (tempInstance) {
// 		// 左边的隐式原型 是否等于 右边的显式原型
// 		if (tempInstance.__proto__ === origin.prototype) return true;
// 		// 没匹配上顺着原型链向上找
// 		tempInstance = tempInstance.__proto__;
// 	}

// 	return false;
// }
// class Parent {}
// class Child extends Parent {}
// const child = new Child();

// console.log('[  ]', myInstanceof(child, Child));
// console.log('[  ]', myInstanceof(child, Parent));
// console.log('[  ]', myInstanceof(child, Object));
// console.log('[  ]', myInstanceof(child, Boolean));
// console.log('[  ]', Function instanceof Object, Object instanceof Function);

/* 
getPrototypeOf
  返回对象的原型 
  Object.getPrototypeOf, Reflect.getPrototypeOf 
  内部先 toObject() 转换,注意null和undefined
*/
// null 和 undefined 报错: Cannot convert undefined or null to object at Function.getPrototypeOf
// console.log(Object.getPrototypeOf(null), Object.getPrototypeOf(undefined));
// console.log(Object.getPrototypeOf(10n), Object.getPrototypeOf(Symbol.for('a')));

/* 
Object.setPrototypeOf();
  指定对象的原型;
  Object.setPrototypeOf, Reflect.setPrototypeOf;
  null 可以作为第二个参数, 原型的尽头就是 null
*/
// const obj = { a: 1 };
// Object.setPrototypeOf(obj, null);

/* 
  Object.isPrototypeOf()

  一个对象是否存在于另一个对象的原型链上 
  与 instanceof 不同的是, 此方法期望左边是个原型, 不是的话则返回 false,而 instanceof 会有一个取原型再判断的操作
  Object.isPrototypeOf, Object.prototype.isPrototypeOf, Reflect.isPrototypeOf, Function.isPrototypeOf
*/
console.log('[  ]', Object.isPrototypeOf({})); // false
console.log('[  ]', Object.prototype.isPrototypeOf({}));
console.log('[  ]', Reflect.isPrototypeOf({}));
console.log('[  ]', Function.isPrototypeOf({}));

/* 
  Object.create();

  使用现有的对象来提供新创建对象的__proto__;
*/
if (typeof Object.create !== 'function') {
	Object.create = function (proto, propertiesObject) {
		if (typeof proto !== 'object' && typeof proto !== 'function') {
			throw new TypeError('Object prototype may only be an Object: ' + proto);
		} else if (proto === null) {
			// throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
		}

		if (typeof propertiesObject !== 'undefined')
			throw new Error(
				"This browser's implementation of Object.create is a shim and doesn't support a second argument."
			);

		function F() {}
		F.prototype = proto;

		return new F();
	};
}

export {};
