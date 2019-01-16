import { app, BrowserWindow } from "electron";
import widevine from "electron-widevinecdm";
import path from "path";
let mainWindow;
let isDevelopment = process.env.NODE_ENV === "development";

widevine.load(app);

// app.commandLine.appendSwitch('widevvine-widevine-cdm-path', '/Applications/Google Chrome.app/Contents/Versions/73.0.3664.3/Google Chrome Framework.framework/Versions/A/Libraries/WidevineCdm/_platform_specific/mac_x64/libwidevinecdm.dylib');
// app.commandLine.appendSwitch('widevine-cdm-version', '4.10.1224.7')

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      plugins: true
    }
  });

  // mainWindow.loadURL("http://localhost:8000/test/");

  mainWindow.loadURL(`file://${path.resolve(__dirname, "./index.html")}`, {
    userAgent: "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko"
  });

  // mainWindow.loadURL('https://bitmovin.com/demos/drm');

  // mainWindow.loadURL(
  //   "https://shaka-player-demo.appspot.com/demo/#asset=https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd;lang=zh-CN;build=uncompiled"
  // );

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
