// console.log(1);

// nodejs的API对主进程和渲染进程都暴露
// console.log(__dirname);

// const electron = require('electron');
// console.log(electron);

const {app, BrowserWindow} = require('electron');

// 事件 (更多详见官网) - 加载完成, 关闭 等
// app.on('ready', () => {
//     console.log('ready');
//     setTimeout(() => {
//         app.exit();
//     }, 2000);
// })

// 方法  - 关闭, 重启等
// app.exit();
// app.relauch();


app.on('ready', () => {

    let win1 = new BrowserWindow({
        // ...更多参数见官网
        // width: 400,
        // height: 300,
        resizable: false,
        alwaysOnTop: true,
        title: '娃哈哈',
        // frame: false, // 无边框窗口,
        // transparent: true // 透明窗口
    });

    let win2 = new BrowserWindow({
        width: 400,
        height: 300,
        title: '子窗口',
        parent: win1,
        modal: true
    });

    
    // 类似浏览器的window对象, 所有与网页相关的事件和操作都将通过它完成
    // win.webContents;
    // win1.webContents.openDevTools(); // 打开开发者工具
    
    // 仅支持file协议, 加载指定页面到窗口中,支持绝对路径,但是推荐使用相对路径,而且路径在解析时会被处理, 相对路径默认指向应用程序的根目录
    win1.loadFile('./layout/index.html');

    // 支持 http协议和file协议
    // win1.loadURL('https://baidu.com');

})