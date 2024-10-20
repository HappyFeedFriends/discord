import { app, BrowserWindow } from 'electron';

const NODE_ENV = process.env.NODE_ENV;

/**
 * Создаёт окно приложения.
 */
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: NODE_ENV === 'development',
    },
  });
  mainWindow.loadFile('../../dist/client/index.html');
  mainWindow.webContents.openDevTools()
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
