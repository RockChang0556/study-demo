/*
 * @Author: Rock Chang
 * @Date: 2022-12-04 15:58:47
 * @LastEditTime: 2022-12-05 23:36:29
 * @Description: 用 js 实现一个 LRU 缓存 （Least Recently Used 最近使用）
  get 和 set 都会将其移动到栈顶
 */

class LRUcache {
	private len: number;
	private map = new Map<string, unknown>(); // 哈希表， get,set 时间复杂度都是 O(1)
	constructor(len: number) {
		this.len = len;
	}

	set(k: string, val: unknown) {
		if (this.map.has(k)) this.map.delete(k);
		this.map.set(k, val);
		if (this.map.size > this.len) {
			const firstKey = this.map.keys().next().value;
			this.map.delete(firstKey);
		}
	}

	get(k: string) {
		if (!this.map.has(k)) return null;
		const val = this.map.get(k);
		// 将这次的数据放到栈顶
		this.map.delete(k);
		this.map.set(k, val);
		return val;
	}
}

const cache = new LRUcache(2);
cache.set('key1', 1); // [1]
cache.set('key2', 2); // [1,2]
console.log('[ key1 ]', cache.get('key1')); // 1
cache.set('key3', 3); // [1,3]
console.log('[ key4 ]', cache.get('key4')); // null

export {};
