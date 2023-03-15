/*
 * @Author: Rock Chang
 * @Date: 2023-03-08 19:24:43
 * @LastEditTime: 2023-03-14 20:00:42
 * @Description: 工厂模式
 */

/* 简易版 */
/* class Product {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	fn1() {
		alert(`fn1 ${this.name}`);
	}
}

// 工厂
class Creator {
	create(name: string) {
		return new Product(name);
	}
}

// test
const creator = new Creator();
const p1 = creator.create('p1');
const p2 = creator.create('p2'); */

/* 标准版 */
interface IProduct {
	name: string;
	fn1: () => void;
}
class Product1 implements IProduct {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	fn1() {
		alert(`fn1 ${this.name}`);
	}
}
class Product2 implements IProduct {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	fn1() {
		alert(`fn2 ${this.name}`);
	}
}
// 工厂
class Creator {
	// 返回 IProduct 接口类型, 依赖倒置原则: 依赖于接口不是依赖具体实例
	create(type: string, name: string): IProduct {
		// new 时候的逻辑
		if (type === 'p1') return new Product1(name);
		if (type === 'p2') return new Product2(name);
		throw new Error('Invalided fail');
	}
}
// test
const creator = new Creator();
const p1 = creator.create('p1', 'p1');
const p2 = creator.create('p2', 'p2');

console.log('[  ]', p1);

export {};
