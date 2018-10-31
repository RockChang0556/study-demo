const commander = require('commander');


// 设置当前命令的版本,默认-V
// 参数: 版本号, [命令简写, 命令全称]
commander.version('v1.0.1', '-v, --version')

/*
    设置其他 option
    commander.option(flag, desciption?, fn?, defaultVal?)
参数:    flag       option名称,'-n, -name[val]'  []表示可选, <>表示必填
        desciption option简介
        fn         默认值,函数返回值为 defaultVal,优先级高于 defaultVal, 
                该函数接受用户输入的值,并返回一个值作为这个选项实际的值
        defaultVal 默认值

*/
// commander.option('-n, --name[val]', 'set name', function(val) {
//     return val + 1;
// })
commander.option('-n, --name [val]', 'set name', '')

// 设置命令的动作
commander.action(() => {
    console.log('hello ' + commander.name)
})


// 解析来自 process.argv 上的数据,会自动加一个 -h 的参数
commander.parse(process.argv);
