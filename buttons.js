const { remote } = require('electron')

var window = remote.getCurrentWindow()

function startButtonClick() {
    createPopup('Start', 'button not working')
    // TODO: run sledge on click
}

function problemsButtonClick() {
    createPopup('Problems', 'Fonts not working?<br>If you dont have an internet connection, thats normal because we use Google Fonts.<br><br>Other problems?<br>Create issue <a target="_blank" href="https://github.com/44lr/sledge/issues">here</a>')
}

function aboutButtonClick() {
    createPopup('About Sledge', 'Sledge is an open source project that aims to bring full C# modding support to Teardown.<br>'+
    'The current goal is to port all of the already available Lua functions to C#, then add new / custom ones on top. (i.e. Voxel loading, changing gl uniforms, loading custom shaders, etc). It also features other neat things like Ultralight support.<br><br>'+
    'Special thanks to:<br>'+
    '<a target="_blank" href="https://github.com/SK83RJOSH">SK83RJOSH</a>, <a target="_blank" href="https://github.com/ss-gnalvesteffer">Xorberax</a>, <a target="_blank" href="https://github.com/nymda">Nymda</a>, <a target="_blank" href="https://github.com/BuilderHD">Nitro</a>, <a target="_blank" href="https://github.com/vulcan-dev">Daniel</a>, <a target="_blank" href="https://github.com/alexandargyurov">Alexandar</a>')
}

function exitButtonClick() {
    window.close()
}

function createPopup(title = "Sledge", text) {
    var popupMain = document.querySelector(".popups")
    var popup = popupMain.appendChild(document.createElement('div'))
    var popupTitle = popup.appendChild(document.createElement('div'))
    var popupText = popup.appendChild(document.createElement('div'))
    popup.setAttribute('class', 'popup')
    popupTitle.setAttribute('class', 'popup-title')
    popupText.setAttribute('class', 'popup-text')

    var textTitle = popupTitle.appendChild(document.createElement('span'))
    var textPopup = popupText.appendChild(document.createElement('span'))
    textTitle.innerHTML = title
    textPopup.innerHTML = text

    var closeBtn = popup.appendChild(document.createElement('button'))
    closeBtn.innerHTML = 'Close'
    closeBtn.onclick = function () {
        popup.remove()
    }
}