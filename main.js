// main.js - Electron Main Process
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Disable GPU hardware acceleration to fix EGL Driver errors
app.disableHardwareAcceleration();

function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Load index.html safely
    const indexPath = path.join(__dirname, 'index.html');
    console.log("Loading file:", indexPath);

