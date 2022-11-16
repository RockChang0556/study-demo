/*
 * @Author: Rock Chang
 * @Date: 2022-11-16 00:07:50
 * @LastEditTime: 2022-11-16 23:08:56
 * @Description: 手写 curry 函数，实现函数柯里化

如下要求，实现 curry 函数
  function add(a: number, b: number, c: number) {
    return a + b + c;
  }
  // add(10, 20, 30); // log 60
  // 柯里化
  const curryAdd = curry(add);
  const res = curryAdd(10)(20)(30); // log 60
 */
function add(a: number, b: number, c: number) {
	return a + b + c;
}
// add(10, 20, 30); // log 60

// 柯里化
function curry(fn: Function) {
	const argLen = fn.length;
	let args: any[] = [];
	// ts中,独立的函数,this 需要声明类型,且需要在第一位, 它只是个声明不是参数, 编译后没有这个 this
	function calc(this: any, ...newArgs: any[]) {
		// 积累参数
		args = [...args, ...newArgs];
		if (args.length < argLen) {
			// 参数不够，返回函数
			return calc;
		} else {
			// 参数够了，返回结果
			return fn.apply(this, args.slice(0, argLen));
		}
	}
	return calc;
}

const curryAdd = curry(add);
const res = curryAdd(10)(20)(30);
console.log('[ curryAdd ]-41', res);

export {};
