/* 
  如果 [Symbol.toPrimitivel(hint) 方法存在，优先调用，无视valueOf和toSting方法 
  否则，如果期望是 'string' 先调用 obj.toString(), 如果返回不是原始值，继续调用 obj.valueof()。 
  否则，如果期望是 'number' 或 'default', 先调用 obj.valueOf() 如果返回不是原始值，继续调用 obj.toString()
*/
/* 
string 情况
  window.alert(obj);
  模板字符串`${obj}`
  test[obj] = 1

number 情况 
  一元+，位移
  -，*，/，关系运算符
  Math.pow等很多内部方法
*/

// const user = {
// 	name: 'John',
// 	age: 10,
// 	toString() {
// 		return this.name;
// 	},
// 	valueOf() {
// 		return this.age;
// 	},
// };

// console.log('user:', +user); // 10  => 期望 number,调用 valueOf()
// console.log('user:', `${user}`); // 'John'  => 期望 string,调用 toString()

// const user = {
// 	name: 'John',
// 	age: 10,
// 	// toString() {
// 	// 	return this;
// 	// },
// 	valueOf() {
// 		return this.age;
// 	},
// };
// console.log('user:', `${user}`);

/* const obj = {
	value: 10,
	toString() {
		return this.value + 10;
	},
	valueOf() {
		return this.value;
	},
};
obj[obj] = obj.value;

console.log('keys', Object.keys(obj));
console.log('`${obj}`', `${obj}`);
console.log('obj + 1', obj + 1);
console.log('obj + ""', obj + ''); */

const val = [] == ![];
console.log('[ val ]', val);

console.log([+val, [] + 1] == [1, 1] + []);
// [1, '1'] = [1, 1] + ''
// '1, 1'(+val, [] + 1)

console.log('[  ]', [+val, [] + 1] == [1, '1']);
// [1, '1']  == [1, '1']

export {};
