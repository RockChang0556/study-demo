/*
 * @Author: Rock Chang
 * @Date: 2023-03-15 20:39:34
 * @LastEditTime: 2023-03-15 20:43:39
 * @Description: 工厂模式 - 场景 2 & 场景 3
 */

/* 
  场景 2 : Vue _createElementVNode 
  在线编译 https://vue-next-template-explorer.netlify.app/ 
*/
/* <div>
  <span>静态文字</span>
  <span :id="hello" class="bar">{{ msg }}</span>
</div> */
// 会编译出很多 _createXxx JS 代码。这些就是工厂函数，创建 vnode 。
// export function render(_ctx, _cache, $props, $setup, $data, $options) {
// 	return (
// 		_openBlock(),
// 		_createElementBlock('div', null, [
// 			_createElementVNode('span', null, '静态文字'),
// 			_createElementVNode(
// 				'span',
// 				{
// 					id: _ctx.hello,
// 					class: 'bar',
// 				},
// 				_toDisplayString(_ctx.msg),
// 				9 /* TEXT, PROPS */,
// 				['id']
// 			),
// 		])
// 	);
// }

/* 
  场景 3 : React createElement
  在线编译 https://www.babeljs.cn/repl
*/

// 在 React 中使用 JSX 语法
/* const profile = <div>
  <img src="avatar.png" className="profile" /> <h3>{[user.firstName, user.lastName].join(' ')}</h3>
</div> */
// 这是一种语法糖，编译之后就会是
// 返回 vnode
// const profile = React.createElement("div", null,
//   React.createElement("img", { src: "avatar.png", className: "profile" }),
//   React.createElement("h3", null, [user.firstName, user.lastName].join(" "))
// );
// // 其实React.createElement也是一个工厂，模拟代码
// class Vnode(tag, attrs, children) {
//   // ...省略内部代码...
// }
// React.createElement = function (tag, attrs, children) {
//   return new Vnode(tag, attrs, children)
// }
