<!--
 * @Author: Rock Chang
 * @Date: 2022-11-14 22:46:06
 * @LastEditTime: 2022-11-14 23:16:32
 * @Description:  
  需求：实现 LazyMan 类
    const zhangsan = new LazyMan('zhangsan');
    zhangsan.eat(1).eat(2).sleep(5).eat(3);
    要求打印如下：
      log 1
      log 2
      await 5s
      log 3
-->
<template>
	<div class="defaults">实现 LazyMan 类</div>
</template>

<script lang="ts" setup name="defaults">
/* 
  关键字： 
    任务队列；
    触发 next ；
    sleep 异步触发 next；
    初始化调用 next 的时机
*/
class LazyMan {
	private name: string;
	private tasks: Function[] = [];
	constructor(name: string) {
		this.name = name;
		// 初始化  在异步中等任务队列都注册完了再执行
		setTimeout(() => {
			this.next();
		});
	}

	// 执行
	next() {
		const task = this.tasks.shift(); // 取出链式队列中的第一个函数
		task && task();
	}

	eat(thing: number) {
		const task = () => {
			console.log(`${this.name} eat ${thing}`);
			this.next(); // 执行下一个函数
		};
		this.tasks.push(task);
		return this; // 链式调用
	}

	sleep(time: number) {
		const task = () => {
			console.log(`${this.name} sleep start`);
			setTimeout(() => {
				console.log(`${this.name} sleep end ${time}s`);
				this.next(); // xxx s后执行下一个函数
			}, time * 1000);
		};
		this.tasks.push(task);
		return this; // 链式调用
	}
}

const zhangsan = new LazyMan('zhangsan');
zhangsan.eat(1).eat(2).sleep(5).eat(3);
</script>

<style lang="less"></style>
