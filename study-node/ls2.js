/**
 * 利用 commander 实现linux中 ls 命令的功能
 * 实现原理 : commander 下的 option ,用参数来判断
 * 
 * 使用方法:
 *  node ls : 输出当前目录下的文件及文件夹
 *  node ls -p /Users/xxx  : 输出指定目录下的文件及文件夹
 */

const commander = require('commander');
const fs = require('fs');

// 设置当前命令的版本,默认-V
commander.version('v1.0.1', '-v, --version');

// 实现 ls 的具体逻辑
commander.option('-p, --path [path]', '设置要显示的目录', __dirname)
commander.action(() => {

    // option中的变量会挂在当前commander对象的同名属性下
    // console.log(commander.path);

    try {
        const fils = fs.readdirSync(commander.path);
        console.log(fils);
    } catch(e) {
        // 开发过程中,可以把错误打印出来,实际发布以后应该删除错误信息
        console.log(e);
    }
});

// 解析
commander.parse(process.argv);