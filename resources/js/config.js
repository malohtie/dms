/**
 * Template Config
 */
export default {
    appName: process.env.MIX_APP_NAME,
    appVersion: process.env.MIX_APP_VERSION,
    appDebug: process.env.MIX_APP_DEBUG,
    appUrl: process.env.MIX_APP_URL,
    appAuthor: process.env.MIX_AUTHOR,
    appAuthorLink: process.env.MIX_AUTHTOR_LINK,
    sidebarCollapsed: true,
    currentYear: new Date().getFullYear(),
    header: true,
    sidebar: true,
    sideOverlay: true,
    footer: true,
    colorTheme: '', // 'amethyst', 'city', 'flat', 'modern', 'smooth'
    sidebarLeft: true,
    sidebarMini: false,
    sidebarDark: true,
    sidebarVisibleDesktop: true,
    sidebarVisibleMobile: false,
    sideOverlayVisible: false,
    sideOverlayHoverable: false,
    pageOverlay: true,
    headerFixed: true,
    headerDark: false,
    headerSearch: false,
    headerLoader: false,
    pageLoader: false,
    rtlSupport: false,
    sideTransitions: true,
    mainContent: '' // 'boxed', ''narrow'
};
