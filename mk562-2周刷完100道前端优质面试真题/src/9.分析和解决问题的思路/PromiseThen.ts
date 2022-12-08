/*
 * @Author: Rock Chang
 * @Date: 2022-12-07 15:54:41
 * @LastEditTime: 2022-12-07 23:26:18
 * @Description: Promise.then 的经典难题
 */

/* 
  then 交替执行
  - 如果有多个 fulfilled promise 实例，同时执行 then 链式调用 
  - then 会交替执行 
  - 这是编译器的优化，防止一个 promsie 占据太久时问
*/
/* 
  Promise.resolve().then(() => { console.log(1) })
    .then(() => { console.log(2) })
    .then(() => { console.log(3) });
  Promise.resolve().then(() => { console.log(10) })
    .then(() => { console.log(20) })
    .then(() => { console.log(30) });
  Promise.resolve().then(() => { console.log(100) })
    .then(() => { console.log(200) })
    .then(() => { console.log(300) });

  res => 1, 10, 100, 2, 20, 200, 3, 30, 300
*/

/* 
  then 中返回 priomise 实例
  - 相当于多出一个 promise 实例 
  - 也会遵守“交替执行” （但和直接声明一个 promise 实例，结果有些差异）
  - 但是会出现“慢两拍”效果
    - 第一拍, promise 需要由 pending 变为 fulfilled 
    - 第二拍, then 函数挂载到 MicroTaskQueue（参考 Event Loop)
*/
/* 
  Promise.resolve().then(() => { console.log(1); return Promise.resolve(2) })
    .then((res) => { console.log(res) })
    .then(() => { console.log(3) })
    .then(() => { console.log(4) });
  Promise.resolve().then(() => { console.log(10) })
    .then(() => { console.log(20) })
    .then(() => { console.log(30) })
    .then(() => { console.log(40) });

  res => 1, 10, 20, 30, 2, 40, 3, 4
*/

Promise.resolve()
	.then(() => {
		console.log(0);
		return Promise.resolve(4);
	})
	.then((res) => {
		console.log(res);
	});

Promise.resolve()
	.then(() => {
		console.log(1);
	})
	.then(() => {
		console.log(2);
	})
	.then(() => {
		console.log(3);
	})
	.then(() => {
		console.log(5);
	})
	.then(() => {
		console.log(6);
	});

/* 
  Promise A+ 规范 : https://zhuanlan.zhihu.com/p/353489929
  - promise的状态流转是这样的
    pending -> resolve(value) -> fulfilled
    pending -> reject(reason) -> rejected
  - then ⽅法必须返回⼀个 promise 对象
  - Promise的解决过程 resolvePromise: resolvePromise(promise2, x, resolve, reject)
    - 如果 x 是另一个 promise（即x是一个promise），那么沿用它的 state 和 result 状态
      如果x是pending态，那么promise必须要在pending，直到x变成fulfilled或者rejected
      如果x是fulfilled态，用相同的value执行promise
      如果x是rejected态，用相同的reason拒绝promise

*/

/* 
  执行位置     执行队列：               微任务队列 micro:
  line 49     +pr1: f - fulfilled
  line 50     +p0: p - pending       0
  line 54     +pres: p               0
  line 58     +pr1: f                0; 1
  line 59     +p1: p                 0; 1
  line 62     +p2: p                 0; 1
  line 65     +p3: p                 0; 1
  line 68     +p5: p                 0; 1
  line 71     +p6: p                 0; 1
  同步任务执行完成， 开始执行 micro
              操作项                执行后micro                         输出
  line -      执行微任务             1; p4.then(() => 完成p0:p->f)      => 0
  line -      执行微任务;p1: p->f    p4.then(() => 完成p0:p->f); 2      => 1
  line -      执行微任务;            2; () => 完成p0:p->f
  line -      执行微任务;p2: p->f    () => 完成p0:p->f; 3               => 2
  line -      执行微任务;p0: p->f    3; 4                              
  line -      执行微任务;p3: p->f    4; 5                              => 3                     
  line -      执行微任务;pres: p->f  5                                 => 5                   
  line -      执行微任务;p5: p->f    6                                 => 6                   
*/

export {};
