# Electron

### 安装

官网地址   http://electronjs.org/
```
npm i electron
require('electron')
```

### 主进程和渲染进程

- 在 Electron 中,被 Electron 直接运行的脚本( package.json中指定的main脚本 )被称为主进程
- 在 Electron 中用来展示页面的web页面都运行在一个独立的,属于他自己的渲染进程中
- 我们可以通过主进程创建web页面,但是一个web页面被销毁的时候, 对应的渲染进程也会被终止
- 主进程管理所有的web页面和它们对应的渲染进程
- 一个应用程序有且只有一个主进程

#### 渲染进程(网页)require报错问题
```js
// 在主进程中添加此属性即可
let win1 = new BrowserWindow({
    webPreferences: { // 网页功能设置
        nodeIntegration: true // node集成开关
    }
})
```

### API暴露
- 在 Electron 中, Electron 同时为主进程和渲染进程暴露了node.js的所有接口, 也就是说, 我们可以在 Electron 的主进程和渲染进程中使用node.js的API

### 自定义菜单
#### 1. 单个创建
```js
const {..., Menu, MenuItem} = require('electron');
// 1. 创建菜单
let m1 = new Menu();
// 2. 创建菜单项( 横向 )
let mi1 = new MenuItem({
    type: 'submenu', // 有二级菜单是此项必须为submenu
    label: 'file',
    submenu: [] // 纵向菜单
})
// 3. 把菜单项添加到指定菜单对象中
m1.append(mi1);
// 4. 将菜单添加到程序窗口最顶层
Menu.setApplicationMenu(m1);
```

#### 2. 批量创建
```js
const {..., Menu, MenuItem} = require('electron');
// 1. 菜单项配置
const template = [
    {label: 'file', submenu: []}
    ...
];
// 2. 创建菜单
let m1 = Menu.buildFromTemplate(template);
// 3. 将菜单添加到程序窗口最顶层
Menu.setApplicationMenu(m1);
```
### IPC-进程通讯
#### 1. 主进程被动发送( 渲染进程先发送 )
```js
// 在渲染进程( 网页 )中.
const { ipcRenderer } = require('electron');
dom.onclick = () => {
    ipcRenderer.send('getData', 'rock'); // 1. 向主线程发送数据
}

ipcRenderer.on('sendData', (e, arg) => { // 4. 接收主线程的数据
    console.log('主进程被动发送的数据是 ' + arg);
});
```
```js
// 在主进程中.
const { ipcMain } = require('electron');
ipcMain.on('getData', (e, ...arg) => { // 2. 接收渲染进程数据
    console.log(arg); // > ["rock"]

    // e.sender => 通过这个对象发送消息给渲染进程
    // e.sender.send('sendData', '数据'); // 3. 主进程被动发送数据
    e.reply('sendData', '数据'); // 这个也可以
})
```

#### 2.  主进程主动发送
```js
// 在主进程中.
let win1 = new BrowserWindow();
setTimeout(() => {
    win1.webContents.send('hello', 'hello...', 10, 20); // 主进程主动发送数据
}, 2000);
```
```js
// 在渲染进程( 网页 )中.
const { ipcRenderer } = require('electron');
ipcRenderer.on('hello', (e, ...arg) => { // 接受主进程主动发送的数据
    console.log('主进程主动发送的数据是 ' + arg);
});

```
#### 渲染进程之间通讯
- 多个渲染进程之间其实是同域下的,因此利用H5的session, 一个进程存,一个进程读

### 打包
- 打包工具 electron-builder ( https://www.electron.build/cn )
```js
// 1. 下载
npm i electron-builder
// 2.配置 (package.json)
"scripts": {
    /*  -w win
        -m mac
        -l linux
    */
    "build": ".\\node_modules\\.bin\\electron-builder -w"
},
// 添加以下配置
"build": {
    "appId": "com.rock.app",
    "productName": "rock",
    "directories": {
        "output": "./dist"
    },
    "win": {
        "icon": "./source/logo.ico",
        "target": ["nsis", "zip"]
    },
    "nsis": {
        "oneClick": false, // 是创建单击安装程序还是辅助安装程序(是否一键安装)。
        "allowToChangeInstallationDirectory": true, // 仅辅助安装程序, 是否允许用户更改安装目录
        "installerIcon": "./source/logo.ico", // 安装程序图标的路径
        "installerHeader": "./source/header.bmp",
        "license": "./source/license.txt" // EULA许可证文件的路径
    }
}
```



