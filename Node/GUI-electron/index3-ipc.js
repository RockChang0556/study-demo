// IPC( Inter-Process Communication ) - 进程间通讯

const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

let username = 'rock';
global.username = 'rock';

app.on('ready', () => {
    let win1 = new BrowserWindow({
        title: '进程通信demo',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win1.webContents.openDevTools();
    win1.loadFile('./layout/index3.html');


    // 主进程接受 & 被动发送数据
    ipcMain.on('getData', (e, ...arg) => {
        console.log('主进程接受的数据是' + arg); // > ["rock"]

        // e.sender => 通过这个对象返回消息给渲染进程
        // e.sender.send('sendData', username);
        e.reply('sendData', username); // 这个也可以
    });

    // 主进程主动发送数据
    setTimeout(() => {
        win1.webContents.send('hello', 'hello...', 10, 20);
    }, 2000);
});

