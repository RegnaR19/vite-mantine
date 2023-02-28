import { BrowserWindow , app , ipcMain } from 'electron' ; 

let mainWindow : BrowserWindow ;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 ,  webPreferences : {
        nodeIntegration: true,
      } });
    mainWindow.loadURL("index.html");
    mainWindow.on("closed", () => (mainWindow.destroy()));

    ipcMain.on('channel' , (msg: any)=>{
        console.log(msg)
        mainWindow.webContents.send('response' , {title : 'mymessage'  , data : 1 }) ; 
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});