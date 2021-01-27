// @ts-nocheck
/* 
    联合类型: 多个类型中的一个, 或的关系
        let a: string|number;
    交叉类型: 多个类型的叠加, 与的关系
        let a: string&number; 
*/

/*
    声明方式
    基本类型: string, number, boolean
    对象类型: String, Number, Boolean

    注意:  基本类型可以赋值给对应包装对象
          包装对象不可以赋值给对应基本类型
*/
let a: String = 'rock'; // √
let b: string = new String('rock'); // ×
/* 
    数组的声明
        具有相同类型的一组有序数据的集合
        声明数组的同时要声明数组存储的数据类型
        同一个数组只能存一种类型的数据

        基本语法: let arr: number[];    // 只包含数字的数组
        泛型方式: let arr: Array<number>;
*/
let arr: number[] = [];
let arr1: Array<number> = [];
arr.push(1);
arr.push('1');

/* 
    元祖 Tuple
    与数组类似, 但是可以存放不同类型的数据, 需要注意的是, 顺序要对应, 超出部分采用联合类型检测
*/
let tuple: [number, string, boolean];
tuple[0] = 1; // √
tuple[1] = 1; // × 必须为string
tuple[2] = 1; // × 必须为boolean
tuple[3] = null; // × 必须为[number, string, boolean]中的一种


/* 
    枚举
    使用枚举可以为一组数据赋予友好的名字
*/
// 老
let sex1: number = 1; // 1:男 0:女
if (sex1 === 1) {  // 时间长了,或者代码过多会忘记这代表什么
    // do something
}
// 新
enum sex2 {woman, man}; // 默认从0开始,相当于 woman=0, man=1
enum sex3 {woman=1, man=2}; // 也可以手动赋值
if (sex2.man) {
    // do something
}

/* 
    非原始类型 Object
    object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
*/
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error


/* 
    其他类型
    null, undefined   - 基本不用,是其他类型的子类型( null可以赋给其他如 number等类型,反之则不行 )
    any  - 任意类型
    void  - 像是与any相反,表示没有任何类型, 比如一个函数没有返回值时 function getName(): void { // something... }
    never - 基本不用, 永不存在的值的类型
*/


/* 
    类型断言
    确定类型, 编译器就不会再检查它了,没有运行时的影响，只是在编译阶段起作用
    
    两种语法: <类型>值  /  值 as 类型 
        在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种。
*/
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
// 另一个为as语法：
let strLength2: number = (someValue as string).length;


/* 
    类型推导
    有时候不一定需要使用强制类型声明, 在某些情况下TS可以根据语境进行类型推导
*/
let test = 1; // TS会自动推导出test是number类型的
test = '111'; // error


