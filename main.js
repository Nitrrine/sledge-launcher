const path = require('path')
const url = require('url')
const {app, BrowserWindow, dialog} = require('electron')

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

    win.on('close', function (e) {
        var response = dialog.showMessageBoxSync(this, {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Confirm',
            message: 'Are you sure want to exit?'
        })

        if (response == 1) e.preventDefault()
    })

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})