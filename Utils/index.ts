/*
 * @Author: Rock Chang
 * @Date: 2022-11-11 15:34:14
 * @LastEditTime: 2022-11-11 17:02:54
 * @Description: 
 */

/**
 * 根据 key 获取 url 中的值
 * @param {string} key
 * @param {string} url?
 * @return {string}
 */
export function getQueryString  (key: string, url = location.search): string {
	const urlSP = new URLSearchParams(url);
	return urlSP.get(key) || '';
};

/** 
 * 获取min-max之间的一个随机数
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export function randomNum (min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/**	
 * 获取数据的类型
 * @param {unknown} x 
 * @return {string}
 */
export function getType(x: unknown): string {
	return Object.prototype.toString.call(x).slice(8, -1);
}
