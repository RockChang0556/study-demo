/*
 * @Author: Rock Chang
 * @Date: 2022-12-05 23:59:32
 * @LastEditTime: 2022-12-06 12:03:31
 * @Description: 数组转树
 */

interface ITreeNode {
	id: number;
	name: string;
	children?: ITreeNode[];
}
interface IArrNode {
	id: number;
	name: string;
	pid: number;
}

const arr = [
	{ id: 3, name: 'C', pid: 1 },
	{ id: 1, name: 'A', pid: 0 },
	{ id: 2, name: 'B', pid: 1 },
	{ id: 4, name: 'D', pid: 2 },
	{ id: 5, name: 'E', pid: 2 },
	{ id: 6, name: 'F', pid: 3 },
];

// 适用于多个根节点
// function arrToTree(arr: IArrNode[]): ITreeNode[] | null {
// 	let result = [];
// 	let obj = {};
// 	arr.forEach((item) => {
// 		obj[item.id] = Object.assign(item, obj[item.id] || {});
// 		if (item.pid) {
// 			let parent = obj[item.pid] || {};
// 			parent.child = parent.child || [];
// 			parent.child.push(item);
// 			obj[item.pid] = parent;
// 		} else {
// 			result.push(obj[item.id]);
// 		}
// 	});
// 	return result;
// }

// 只有一个根节点
function arrToTree2(arr: IArrNode[]): ITreeNode | null {
	if (!arr.length) return null;
	let result: ITreeNode | null = null;
	const map = new Map<number, ITreeNode>();
	arr.forEach((item) => {
		map.set(item.id, Object.assign(item, map.get(item.id) || {}));
		if (item.pid !== 0) {
			let parent: ITreeNode = map.get(item.pid) || {};
			parent.children = parent.children || [];
			parent.children.push(item);
			map.set(item.pid, parent);
		} else {
			result = map.get(item.id) || null;
		}
	});
	return result;
}
console.log('[  ]-49', arrToTree2(arr));

export {};
