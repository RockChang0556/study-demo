/*
 * @Author: Rock Chang
 * @Date: 2022-12-04 12:39:33
 * @LastEditTime: 2022-12-04 15:32:27
 * @Description: 手写 EventBus，实现 once,on,emit,off 功能

效果如下：
  const e = new EventBus();
  e.on('key1', fn1);
  e.on('key1', fn2);
  e.once('key1', fn3);

  e.emit('key1', 1, 2); // 触发  fn1 fn2 fn3

  e.off('key1', fn1)

  e.emit('key1'); // 触发 fn2
 */

function fn1(x: number, y: number) {
	console.log('fn1', x, y);
}
function fn2(x: number, y: number) {
	console.log('fn2', x, y);
}
function fn3(x: number, y: number) {
	console.log('fn3', x, y);
}

/* 
  分析
  on、once 注册函数，存储起来
  emit 找到对应函数并执行
  off 找到对应函数并删除
*/
class EventBus {
	private tasks = new Map<string, { once: boolean; fn: Function }[]>();
	constructor() {}
	on(key: string, fn: Function, once = false) {
		const val = this.tasks.get(key);
		if (val) {
			val.push({ once, fn });
		} else {
			this.tasks.set(key, [{ once, fn }]);
		}
	}
	once(key: string, fn: Function) {
		this.on(key, fn, true);
	}

	emit(key: string, ...args: any[]) {
		const val = this.tasks.get(key);
		if (!val) return;
		// 执行函数的同时，过滤掉 once 的函数
		this.tasks.set(
			key,
			val.filter(({ once, fn }) => {
				fn(...args);
				return !once;
			})
		);
	}

	off(key: string, fn?: Function) {
		const val = this.tasks.get(key);
		if (!val) return;
		if (!fn) {
			// 解绑所有 key 的函数
			this.tasks.set(key, []);
		} else {
			this.tasks.set(
				key,
				val.filter((v) => v.fn !== fn)
			);
		}
	}
}
const e = new EventBus();
e.on('key1', fn1);
e.on('key1', fn2);
e.once('key1', fn3);

e.emit('key1', 1, 2); // 触发  fn1 fn2 fn3

e.off('key1', fn1);

e.emit('key1', 2, 3); // 触发 fn2

export {};
