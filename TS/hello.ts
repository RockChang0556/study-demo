/*
    多行字符串
 */
var content = `aaa
bbb
ccc`;

/*
    自动拆分字符串
*/
function test1(template, name, age){
    console.log(template); // 输出类似 str.split(${}) 数组
    console.log(name); // 第一个${}的内容
    console.log(age); // // 第二个${}的内容。。。以此类推
}
var myname = "Rock";
var getAge = function(){
     return 18;
}
// 用字符串模板调用test方法，在字符串模板中，表达式的值会传入到相应的参数中；
test1 `hello my name is ${myname},i'm ${getAge()}`

/**
    可选参数
 */
// function test(a:string, b?:string, c:"lulu"){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// // 注意：1、要处理可选参数没传的情况。2、必选参数不能放在可选参数后面。
// test("xxx"); // err