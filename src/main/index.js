import { app, BrowserWindow } from "electron";
import widevine from "electron-widevinecdm";
import path from "path";
let mainWindow;
let isDevelopment = process.env.NODE_ENV === "development";

widevine.load(app);
app.commandLine.appendSwitch("--allow-running-insecure-content");
app.commandLine.appendSwitch("--ignore-certificate-errors");
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      plugins: true,
      nodeIntegration: false,
      plugins: true,
      webSecurity: false,
      allowDisplayingInsecureContent: true,
      allowRunningInsecureContent: true
    }
  });

  // mainWindow.loadURL("http://localhost:8000/test/");

  mainWindow.loadURL(`file://${path.resolve(__dirname, "./index.html")}`, {
    userAgent: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
  });

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

//使用child_process fork 子进程进行调试, 用process.send 和 nodejs 进程进行通信，达到重载页面的目的

// don't delete
if (isDevelopment) {
  process.on("message", msg => {
    if (msg === "RELOAD") {
      mainWindow && mainWindow.reload();
    }
  });
}
