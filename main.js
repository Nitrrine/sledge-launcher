const path = require('path')
const url = require('url')
const {app, BrowserWindow} = require('electron')

let win

function createWindow() {
    win = new BrowserWindow(
        {
            width: 500, 
            height: 300,
            maxWidth: 700,
            maxHeight: 500,
            minWidth: 500,
            minHeight: 300,
            icon: 'img/icon.png',
            autoHideMenuBar: true
        }
    )

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.webContents.setWindowOpenHandler(({ url }) => {
        require('electron').shell.openExternal(url);
        return {action: 'deny'}
    })

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})