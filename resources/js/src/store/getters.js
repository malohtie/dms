/**
 * Global Getters
 */
export default {
    appName: (state) => {
        return state.app.name
    },
    // Get App version
    appVersion: (state) => {
        return state.app.version
    },
    // Get App author
    appAuthor: (state) => {
        return state.app.author
    },
    // Get App author link
    appAuthorLink: (state) => {
        return state.app.authorLink
    },
    // Get App copyright year
    appCopyright: (state) => {
        return state.app.copyright
    },
    // Get app color theme
    appColorTheme: (state) => {
        return state.settings.colorTheme
    }
}
