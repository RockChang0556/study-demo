<!--
 * @Author: Rock Chang
 * @Date: 2022-11-12 17:57:20
 * @LastEditTime: 2022-11-14 23:17:38
 * @Description: 遍历 DOM 树，广度优先 & 深度优先
-->

<template>
	遍历 DOM 树，广度优先 & 深度优先
	<div id="DomTraverse">
		<p>
			p
			<span>span</span>
		</p>
		main
		<!-- 注释 -->
		<ul>
			<li>li1</li>
			<li>li2</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

function logNode(dom: Node) {
	if (dom instanceof Comment) {
		console.log('Comment ---', dom.textContent);
	}
	if (dom instanceof Text) {
		const text = dom.textContent?.trim();
		if (text) console.log('Text ---', text);
	}
	if (dom instanceof HTMLElement) {
		console.log('HTMLElement ---', dom.tagName.toLowerCase());
	}
}

/** 深度优先遍历 dom --- 递归 */
function depthFirstTraverse(dom: Node) {
	logNode(dom);

	const child = dom.childNodes;
	if (child.length) {
		child.forEach((d) => {
			depthFirstTraverse(d);
		});
	}
}

/** 深度优先遍历 dom --- 栈 */
function depthFirstTraverse2(dom: Node) {
	const stack: Node[] = [];
	stack.push(dom); // 入栈

	while (stack.length) {
		const top = stack.pop();
		if (top === undefined) break;
		logNode(top);

		const child = top.childNodes;
		if (child.length) {
			// 注意！！ 反向压栈
			Array.from(child)
				.reverse()
				.forEach((d) => {
					stack.push(d);
				});
		}
	}
}

/** 广度优先遍历 dom --- 队列 */
function breadthFirstTraverse(dom: Node) {
	const queue: Node[] = [];
	queue.push(dom); // 从尾入队

	while (queue.length) {
		const top = queue.shift(); // 从头出队
		if (top === undefined) break;
		logNode(top);

		const child = top.childNodes;
		if (child.length) {
			child.forEach((d) => {
				queue.push(d); // 入队
			});
		}
	}
}

onMounted(() => {
	const dom = document.querySelector('#DomTraverse');
	dom && depthFirstTraverse2(dom);
});
</script>

<style lang="less"></style>
