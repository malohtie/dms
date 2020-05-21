import config from "@/../config";

/**
 * Global States
 */
export default {

    // App vital details
    app: {
        name: config.appName,
        version: config.appVersion,
        author: config.appAuthor,
        authorLink: config.appAuthorLink,
        copyright: config.currentYear
    },

    // Default layout options
    layout: {
        header: config.header,
        sidebar: config.sidebar,
        footer: config.footer
    },

    // Default template settings
    // Various of them are also set in each layout variation under layouts/variations/ folder
    settings: {
        colorTheme: config.colorTheme,
        sidebarLeft: config.sidebarLeft,
        sidebarMini: config.sidebarMini,
        sidebarDark: config.sidebarDark,
        sidebarVisibleDesktop: config.sidebarVisibleDesktop,
        sidebarVisibleMobile: config.sidebarVisibleMobile,
        headerFixed: config.headerFixed,
        headerDark: config.headerDark,
        headerSearch: config.headerSearch,
        headerLoader: config.headerLoader,
        pageLoader: config.pageLoader,
        rtlSupport: config.rtlSupport,
        sideTransitions: config.sideTransitions,
        mainContent: config.mainContent,
        windowWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    }

}
