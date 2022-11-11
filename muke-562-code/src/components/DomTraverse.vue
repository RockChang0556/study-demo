<template>
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
	stack.unshift(dom);

	while (stack.length) {
		const top = stack.shift();
		if (top === undefined) break;
		logNode(top);

		const child = top.childNodes;
		if (child.length) {
			child.forEach((d) => {
				stack.unshift(d);
			});
		}
	}
}

/** 广度优先遍历 dom --- 队列 */
function breadthFirstTraverse(dom: Node) {
	const queue: Node[] = [];
	queue.push(dom); // 入队

	while (queue.length) {
		const top = queue.shift(); // 出队
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
	dom && breadthFirstTraverse(dom);
});
</script>

<style lang="less"></style>
