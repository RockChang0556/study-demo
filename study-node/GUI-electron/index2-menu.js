// 自定义菜单项

const {app, BrowserWindow, Menu, MenuItem, remote, isMac} = require('electron');

app.on('ready', () => {
    let win1 = new BrowserWindow();
    win1.loadURL('https://baidu.com');

    // 一. 单个创建菜单
    let m1 = new Menu();

    // 创建菜单项
    let mi1 = new MenuItem({
        type: 'normal',
        label: 'file',
    });
    let mi2 = new MenuItem({
        type: 'submenu',
        label: 'edit',
        submenu: [
            {
                type: 'normal',
                label: 'aaa'
            },
            {
                type: 'separator' // 分隔符
            },
            {
                type: 'checkbox',
                label: 'checkbox1',
                checked: true
            },
            {
                type: 'checkbox',
                label: 'checkbox2',
                checked: true
            },
            {
                type: 'separator' // 分隔符
            },
            {
                type: 'radio',
                label: 'radio1',
                checked: true
            },
            {
                type: 'radio',
                label: 'radio2'
            },
            {
                type: 'separator' // 分隔符
            },
            {
                role: 'quit',
                label: 'exit'
            },
            {
                type: 'normal',
                label: '退出(自定义)',
                click() {
                    app.quit();
                }
            },
        ]
    });

    // 把菜单项添加到指定菜单对象中
    m1.append(mi1);
    m1.append(mi2);

    // 指定该菜单显示的主体( 具体哪个窗口, 右键上下文 )
    /**
     * 菜单位置:
     *  1. 应用程序的顶层菜单
     *  2. 上下文菜单( 右键菜单 )
     */

    // 将菜单添加到程序窗口最顶层
    Menu.setApplicationMenu(m1);


    // 二. 批量创建菜单
    const template = [
        // { role: 'appMenu' }
        ...(process.platform === 'darwin' ? [{
          label: app.getName(),
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
          ]
        }] : []),
        // { role: 'fileMenu' }
        {
          label: 'File',
          submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
          ]
        },
        // { role: 'editMenu' }
        {
          label: 'Edit',
          submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
              { role: 'pasteAndMatchStyle' },
              { role: 'delete' },
              { role: 'selectAll' },
              { type: 'separator' },
              {
                label: 'Speech',
                submenu: [
                  { role: 'startspeaking' },
                  { role: 'stopspeaking' }
                ]
              }
            ] : [
              { role: 'delete' },
              { type: 'separator' },
              { role: 'selectAll' }
            ])
          ]
        },
        // { role: 'viewMenu' }
        {
          label: 'View',
          submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { role: 'toggledevtools' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin' },
            { role: 'zoomout' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
          ]
        },
        // { role: 'windowMenu' }
        {
          label: 'Window',
          submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
              { type: 'separator' },
              { role: 'front' },
              { type: 'separator' },
              { role: 'window' }
            ] : [
              { role: 'close' }
            ])
          ]
        },
        {
          role: 'help',
          submenu: [
            {
              label: 'Learn More',
              click () { require('electron').shell.openExternalSync('https://electronjs.org') }
            }
          ]
        }
    ]
    const m2 = Menu.buildFromTemplate(template)
    // Menu.setApplicationMenu(m2);

    
});
