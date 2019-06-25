// 案例

const {
    app,
    BrowserWindow,
    ipcMain
} = require('electron');

app.on('ready', () => {
    let win1 = new BrowserWindow({
        title: '案例',
        width: 320,
        height: 640,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    });

    // win1.webContents.openDevTools();
    win1.loadFile('./layout/index4.html');

});
