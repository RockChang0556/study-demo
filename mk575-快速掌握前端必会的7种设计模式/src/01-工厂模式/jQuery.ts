/*
 * @Author: Rock Chang
 * @Date: 2023-03-14 20:01:44
 * @LastEditTime: 2023-03-15 20:41:26
 * @Description: 工厂模式 - 场景 1
 */

/* jQuery $('div') */

// 扩展 window.$  需放在 d.ts 文件中
declare interface Window {
	$: (selector: string) => JQuery;
}

class JQuery {
	selector: string;
	length: number;
	constructor(selector: string) {
		const domList = Array.prototype.slice.call(
			document.querySelectorAll(selector)
		);
		const length = domList.length;
		for (let i = 0; i < length; i++) {
			this[i] = domList[0];
		}
		this.selector = selector;
		this.length = length;
	}
	append(elem: HTMLElement): JQuery {
		// ...
		return this;
	}
	addClass(key: string, value: string): JQuery {
		// ...
		return this;
	}
	html(htmlStr: string): JQuery | string {
		if (htmlStr) {
			// set html
			return this;
		} else {
			// get html
			const html = 'xxx';
			return html;
		}
	}
}

function $(selector: string) {
	return new JQuery(selector);
}
window.$ = $;

export { $ };
