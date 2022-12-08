/*
 * @Author: Rock Chang
 * @Date: 2022-12-07 15:32:41
 * @LastEditTime: 2022-12-07 15:51:11
 * @Description: 构造函数和原型的重名属性
 */

/* 
  不要去读代码，而是要模拟 js 去执行代码
*/
// 1. 声明一个 Foo 函数
function Foo() {
	Foo.a = function () {
		console.log(1);
	};
	this.a = function () {
		console.log(2);
	};
}
// 2. Foo 原型上声明方法 a
Foo.prototype.a = function () {
	console.log(3);
};
// 3. Foo 原型上声明方法 b
Foo.prototype.b = function () {
	console.log(4);
};
// 4. Foo 上声明方法 a
Foo.a = function () {
	console.log(5);
};

// 5. 执行 Foo 上的方法 a，即 step4， => 5
Foo.a();
// 6. 实例化 Foo，做了两件事，[ Foo 上的方法 a 覆盖为 fn => 1， Foo 实例上添加方法 a ]
const obj = new Foo(); // {a: fn => 2}
// 7. 执行Foo实例上的方法 a ，  => 2
obj.a();
// 8. 执行Foo实例上的方法 b，没找到，去原型上找， step3，  => 4
obj.b();
// 9. 执行 Foo 上的方法 a，step6， => 1
Foo.a();

export {};
