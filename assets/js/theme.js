const STORAGE_KEY = ''

let autoDefinedScheme = window.matchMedia('(prefers-color-scheme: dark)')

const autoChangeScheme = e => {
    currentTheme = e.matches ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', currentTheme)
    changeButtonText()
}

document.addEventListener('DOMContentLoaded', function() {
    switchButton = document.querySelector('.colorscheme-toggle')
    currentTheme = detectCurrentScheme()
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    if (currentTheme == 'auto') {
        autoChangeScheme(autoDefinedScheme);
        autoDefinedScheme.addListener(autoChangeScheme);
    }
    if (switchButton) {
        switchButton.addEventListener('click', switchTheme, false)
    }
})


function detectCurrentScheme() {
    if (localStorage.getItem(STORAGE_KEY)) {
        return localStorage.getItem(STORAGE_KEY)
    }
    if (!window.matchMedia) {
        return 'light'
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}

function switchTheme(e) {
    if (currentTheme == 'dark') {
        localStorage.setItem(STORAGE_KEY, 'light')
        document.documentElement.setAttribute('data-theme', 'light')
        currentTheme = 'light'
    } else {
        localStorage.setItem(STORAGE_KEY, 'dark')
        document.documentElement.setAttribute('data-theme', 'dark')
        currentTheme = 'dark'
    }
}