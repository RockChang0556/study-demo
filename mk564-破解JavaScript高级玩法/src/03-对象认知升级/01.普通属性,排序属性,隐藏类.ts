/* 
  普通属性(properties): 键值为字符串
    根据创建时的顺序排序
  排序属性(elements): 键值为数字
    按照索引值的大小升序排列
    注意: 数字字符串也是排序属性
  
*/
// var obj: any = {};

// obj.p1 = 'str1';
// obj.p6 = 'str6';
// obj.p2 = 'str2';

// obj[1] = 'num1';
// obj[6] = 'num6';
// obj[2] = 'num2';

// for (var p in obj) {
// 	console.log('property:', obj[p]);
// }

/* 
  思考：为什么设计常规属性和排序属性 
 
  - 两种线性数据结构保存
  - 提升属性的访问速度 
    V8读取属性的时候先遍历排序属性(elements), 再遍历普通属性(properties)

  问题
    这样的话,我要读取一个普通属性, 就会多遍历一遍排序属性
*/

/* 
  对象内属性 - V8的性能提升
    被保存到对象自身的普通属性称为对象内属性
    数量限制: 一般 10 个
    哪些是内属性
*/
function CustomObject(eCount, pCount) {
	for (let i = 0; i < eCount; i++) {
		this[i] = `e-${i}`;
	}
	//添加常规属性
	for (let i = 0; i < pCount; i++) {
		this[`p-${i}`] = `p-${i}`;
	}
}

// 排序属性6， 普通属性6个
// var obj = new CustomObject(6, 6);

// 排序属性6， 普通16个
var obj = new CustomObject(6, 16);
console.log('[ obj ]', obj);

// 排序属性6， 普通50个, 普通属性非线性存储
// var obj = new CustomObject(6, 50);
/* 
  普通属性数量少于 10 个时,被保存在内属性, 
  微大于 10, 10 个在内属性,其余的在普通属性线性存储, 
  当远大于 10 时,则多余部分在普通属性非线性存储
*/



/* 
  隐藏类
  描述对象的属性布局,包括对象的属性名,属性对应的偏移量

  作用
    从空间和时间两个维度来提升速度
      时间上提升访问速度,因为属性可以通过固定的偏移量来访问.
      空间上节约内存,如属性的描述信息可以被复用

  动态添加或删除会破坏隐藏类

  如何保护隐藏类
    初始化时保持属性顺序一致 
    一次性初始化完毕 
    谨慎使用delete


*/

export {};
