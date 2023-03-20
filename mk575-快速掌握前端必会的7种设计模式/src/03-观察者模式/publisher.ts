/*
 * @Author: Rock Chang
 * @Date: 2023-03-20 20:32:22
 * @LastEditTime: 2023-03-20 22:11:11
 * @Description: 发布订阅模式
 */

// // 观察监听点击事件
// document.addEventListener('click', function (e) {
// 	// 按钮点击
// });

// // 订阅 event-key1 事件
// event?.on('event-key1', (name) => {
// 	// 事件
// });
// // 发布 event-key1 事件
// event.emit('event-key', name);
// export {};

import mitt from 'mitt';

type Events = {
	key1: string;
	key2: { name: string; age: number };
};
export const mitter = mitt<Events>();

mitter.on('key1', (name) => {
	console.log('[  ]', name);
});
mitter.emit('key1', 'rock');

mitter.on('key2', (obj) => {
	console.log('[  ]', obj);
});
mitter.emit('key2', { name: 'rock', age: 2 });
