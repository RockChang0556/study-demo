/**
 * 利用 commander 实现linux中 ls 命令的功能
 * 实现原理 : commander 下的 command 创建子命令
 * 
 * 使用方法:
 *  node ls : 输出当前目录下的文件及文件夹
 *  node ls /Users/xxx  : 输出指定目录下的文件及文件夹
 */

const commander = require('commander');
const fs = require('fs');

// 设置当前命令的版本,默认-V
commander.version('v1.0.1', '-v, --version');

// 实现 ls 的具体逻辑
// 创建子命令 注意: 此时子命令为空,直接node ls不带参数的话,不会走action
const subCommander =  commander.command(' <parh>');
commander.action((path) => {
    // console.log(dirname);
    try {
        const fils = fs.readdirSync(path);
        console.log(fils);
    } catch(e) {
        // 开发过程中,可以把错误打印出来,实际发布以后应该删除错误信息
        console.log(e);
    }
});

// 在把 process.argv 交给parse解析之前进行一个简单的处理, 少于三个参数,表示使用的是默认值,即当前目录
// 添加内容,使执行 node ls 也会走action
if (process.argv.length < 3) {
    process.argv.push(__dirname);
}

// 解析
commander.parse(process.argv);