const commander = require('commander');
const fs = require('fs');


// 设置当前命令的版本,默认-V
// 参数: 版本号, [命令简写, 命令全称]
commander.version('v1.0.0', '-v, --version');

// 创建子命令
let subCommander = commander.command('create <app-name>')
.description('create Object')
.alias('c')
.usage('使用说明哈哈哈哈')     // node vue c -h 进入子命令查看
.action((appName) => {
    console.log('Create app name is ' + appName);

    fs.mkdirSync(appName)
})
// 使用方法: node vue create miaov   ====> 同级下创建一个miaov的文件夹
// subCommander.option('1.1.0')

// 解析来自 process.argv 上的数据,会自动加一个 -h 的参数
commander.parse(process.argv);