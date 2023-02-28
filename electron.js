"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({ width: 900, height: 680, webPreferences: {
            nodeIntegration: true
        } });
    mainWindow.loadURL("index.html");
    mainWindow.on("closed", function () { return (mainWindow.destroy()); });
    electron_1.ipcMain.on('channel', function (msg) {
        console.log(msg);
        mainWindow.webContents.send('response', { title: 'mymessage', data: 1 });
    });
}
electron_1.app.on("ready", createWindow);
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});
