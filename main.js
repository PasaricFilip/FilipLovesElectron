const { app, BrowserWindow,ipcMain,globalShortcut } = require("electron");
const MainScreen = require("./screens/main/mainScreen");
const Globals = require("./globals")

let curWindow;

function createWindow() {
  curWindow = new MainScreen();

  
}

app.whenReady().then(() => {

    globalShortcut.register('Alt+CommandOrControl+I', () => {
      console.log('Electron loves global shortcuts 1!')
    })

    globalShortcut.register('Alt+CommandOrControl+J', () => {
      console.log('Electron loves global shortcuts 2!')
    })


  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length == 0) createWindow();
  });
});

//Global exception handler
process.on("uncaughtException", function (err) {
  console.log(err);
});

app.on("window-all-closed", function () {
  if (process.platform != "darwin") app.quit();
});
