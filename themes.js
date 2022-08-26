function themeChanged(checked) {
    if (checked) {
        document.body.setAttribute('light-theme', '')
    } else {
        document.body.removeAttribute('light-theme')
    }
}