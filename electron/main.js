// electron/main.js
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  if (app.isPackaged) {
    // For packaged app
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  } else {
    // For development
    win.loadFile(path.join(__dirname, "../dist/index.html")).catch((err) => {
      // Load built app in production
      console.error("Failed to load dist/index.html:", err);
    });
  }

  win.webContents.openDevTools(); // For development, remove in production
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
