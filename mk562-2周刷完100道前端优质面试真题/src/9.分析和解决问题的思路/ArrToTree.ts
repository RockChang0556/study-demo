/*
 * @Author: Rock Chang
 * @Date: 2022-12-05 23:59:32
 * @LastEditTime: 2022-12-07 14:15:56
 * @Description: 数组转树 & 树转数组
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
	{ id: 1, name: 'A', pid: 0 },
	{ id: 2, name: 'B', pid: 1 },
	{ id: 3, name: 'C', pid: 1 },
	{ id: 4, name: 'D', pid: 2 },
	{ id: 5, name: 'E', pid: 2 },
	{ id: 6, name: 'F', pid: 3 },
];

const tree = {
	name: 'A',
	id: 1,
	children: [
		{
			name: 'B',
			id: 2,
			children: [
				{
					name: 'D',
					id: 4,
				},
				{
					name: 'E',
					id: 5,
				},
			],
		},
		{
			name: 'C',
			id: 3,
			children: [
				{
					name: 'F',
					id: 6,
				},
			],
		},
	],
};

// 适用于多个根节点, 数组顺序无要求
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

// 只有一个根节点，数组顺序无要求
// function arrToTree2(arr: IArrNode[]): ITreeNode | null {
// 	if (!arr.length) return null;
// 	let result: ITreeNode | null = null;
// 	const map = new Map<number, ITreeNode>();
// 	arr.forEach((item) => {
// 		map.set(item.id, Object.assign(item, map.get(item.id) || {}));
// 		if (item.pid !== 0) {
// 			let parent: ITreeNode = map.get(item.pid) || {};
// 			parent.children = parent.children || [];
// 			parent.children.push(item);
// 			map.set(item.pid, parent);
// 		} else {
// 			result = map.get(item.id) || null;
// 		}
// 	});
// 	return result;
// }

//只有一个根节点，数组顺序有要求， 根节点在前
function arrToTree3(arr: IArrNode[]): ITreeNode | null {
	if (!arr.length) return null;
	const map = new Map<number, ITreeNode>();
	let root: ITreeNode | null = null;
	arr.forEach(({ id, name, pid }) => {
		// 定义 treeNode 并加入 map
		const cNode: ITreeNode = { name, id };
		map.set(id, cNode);

		// 找到 parentNode 并加入到它的 children
		const pNode = map.get(pid);
		if (pNode) {
			pNode.children = pNode.children || [];
			pNode.children.push(cNode);
		}

		if (pid === 0) root = cNode;
	});

	return root;
}

// 树转数组
function treeToArr(tree: ITreeNode): IArrNode[] | null {
	// 子节点 -> 父节点
	const nodeToParent = new Map<ITreeNode, ITreeNode>();
	// 最终的结果数组
	const result: IArrNode[] = [];
	// 任务队列
	const queue: ITreeNode[] = [];
	queue.push(tree);

	while (queue.length) {
		const cNode = queue.shift();
		if (!cNode) break;

		const { id, name, children = [] } = cNode;

		// 构建 arr item
		const pNode = nodeToParent.get(cNode);
		const pid = pNode?.id || 0;
		const arrItem = { id, name, pid };
		result.push(arrItem);

		children.forEach((v) => {
			// 映射 nodeToParent
			nodeToParent.set(v, cNode);
			// 子节点入队
			queue.push(v);
		});
	}

	return result;
}

console.log('[  ]-49', treeToArr(tree));

export {};
