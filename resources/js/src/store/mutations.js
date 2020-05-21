/**
 * Default mutations
 */
export default {
    setLayout(state, payload) {
        state.layout.header = payload.header
        state.layout.sidebar = payload.sidebar
        state.layout.footer = payload.footer
    },
    // Sets sidebar visibility (open, close, toggle)
    sidebar(state, payload) {
        if (state.settings.windowWidth > 991) {
            if (payload.mode === 'open') {
                state.settings.sidebarVisibleDesktop = true
            } else if (payload.mode === 'close') {
                state.settings.sidebarVisibleDesktop = false
            } else if (payload.mode === 'toggle') {
                state.settings.sidebarVisibleDesktop = !state.settings.sidebarVisibleDesktop
            }
        } else {
            if (payload.mode === 'open') {
                state.settings.sidebarVisibleMobile = true
            } else if (payload.mode === 'close') {
                state.settings.sidebarVisibleMobile = false
            } else if (payload.mode === 'toggle') {
                state.settings.sidebarVisibleMobile = !state.settings.sidebarVisibleMobile
            }
        }
    },
    // Sets sidebar mini mode (on, off, toggle)
    sidebarMini(state, payload) {
        if (state.settings.windowWidth > 991) {
            if (payload.mode === 'on') {
                state.settings.sidebarMini = true
            } else if (payload.mode === 'off') {
                state.settings.sidebarMini = false
            } else if (payload.mode === 'toggle') {
                state.settings.sidebarMini = !state.settings.sidebarMini
            }
        }
    },
    // Sets sidebar position (left, right, toggle)
    sidebarPosition(state, payload) {
        if (payload.mode === 'left') {
            state.settings.sidebarLeft = true
        } else if (payload.mode === 'right') {
            state.settings.sidebarLeft = false
        } else if (payload.mode === 'toggle') {
            state.settings.sidebarLeft = !state.settings.sidebarLeft
        }
    },
    // Sets sidebar style (dark, light, toggle)
    sidebarStyle(state, payload) {
        if (payload.mode === 'dark') {
            state.settings.sidebarDark = true
        } else if (payload.mode === 'light') {
            state.settings.sidebarDark = false
        } else if (payload.mode === 'toggle') {
            state.settings.sidebarDark = !state.settings.sidebarDark
        }
    },
    // Sets header mode (fixed, static, toggle)
    header(state, payload) {
        if (payload.mode === 'fixed') {
            state.settings.headerFixed = true
        } else if (payload.mode === 'static') {
            state.settings.headerFixed = false
        } else if (payload.mode === 'toggle') {
            state.settings.headerFixed = !state.settings.headerFixed
        }
    },
    // Sets header style (dark, light, toggle)
    headerStyle(state, payload) {
        if (payload.mode === 'dark') {
            state.settings.headerDark = true
        } else if (payload.mode === 'light') {
            state.settings.headerDark = false
        } else if (payload.mode === 'toggle') {
            state.settings.headerDark = !state.settings.headerDark
        }
    },
    // Sets header search visibility (on, off, toggle)
    headerSearch(state, payload) {
        if (payload.mode === 'on') {
            state.settings.headerSearch = true
        } else if (payload.mode === 'off') {
            state.settings.headerSearch = false
        } else if (payload.mode === 'toggle') {
            state.settings.headerSearch = !state.settings.headerSearch
        }
    },
    // Sets header loader visibility (on, off, toggle)
    headerLoader(state, payload) {
        if (payload.mode === 'on') {
            state.settings.headerLoader = true
        } else if (payload.mode === 'off') {
            state.settings.headerLoader = false
        } else if (payload.mode === 'toggle') {
            state.settings.headerLoader = !state.settings.headerLoader
        }
    },
    // Sets page loader visibility (on, off, toggle)
    pageLoader(state, payload) {
        if (payload.mode === 'on') {
            state.settings.pageLoader = true
        } else if (payload.mode === 'off') {
            state.settings.pageLoader = false
        } else if (payload.mode === 'toggle') {
            state.settings.pageLoader = !state.settings.pageLoader
        }
    },
    // Sets main content mode (full, boxed, narrow)
    mainContent(state, payload) {
        if (payload.mode === 'full') {
            state.settings.mainContent = ''
        } else if (payload.mode === 'boxed') {
            state.settings.mainContent = 'boxed'
        } else if (payload.mode === 'narrow') {
            state.settings.mainContent = 'narrow'
        }
    },
    // Sets active color theme
    setColorTheme(state, payload) {
        // Matches all classes which start with "theme-"
        let regx = new RegExp('\\btheme-[^ ]*[ ]?\\b', 'g')

        // Set new theme
        state.settings.colorTheme = payload.theme || ''

        // Remove all classes which start with "theme-" from body element
        document.body.className = document.body.className.replace(regx, '')

        // If theme is set, add the theme class to body element
        if (payload.theme) {
            document.body.classList.add('theme-' + payload.theme)
        }
    },
    //windows width
    setWindowWidth(state) {
        state.settings.windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }
}
