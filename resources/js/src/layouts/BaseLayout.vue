<template>
    <div :class="classContainer" id="page-container">
        <!-- Page Loader -->
        <vue-progress-bar></vue-progress-bar>
        <div :class="{'show': loader}" id="page-loader"></div>
        <!-- END Page Loader -->

        <!-- Page Overlay -->
        <div @click="close" id="page-overlay" v-if="sideOverlay && pageOverlay"></div>
        <!-- END Page Overlay -->

        <!-- Side Overlay -->
        <base-side-overlay :class="layoutClasses.sideOverlay || 'font-size-sm'" v-if="sideOverlay">
            <slot name="side-overlay"></slot>
        </base-side-overlay>
        <!-- END Side Overlay -->

        <!-- Sidebar -->
        <base-sidebar :class="layoutClasses.sidebar" v-if="sidebar">
            <slot name="sidebar"></slot>
        </base-sidebar>
        <!-- END Sidebar -->

        <!-- Header -->
        <base-header :class="layoutClasses.header" v-if="header">
            <slot name="header"></slot>
        </base-header>
        <!-- END Header -->

        <!-- Main Container -->
        <div id="main-container">
            <slot name="content"></slot>
            <transition mode="out-in" name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <!-- END Main Container -->

        <!-- Footer -->
        <base-footer :class="layoutClasses.footer || 'bg-body-light'" v-if="footer">
            <slot name="footer"></slot>
        </base-footer>
        <!-- END Footer -->
    </div>
</template>

<script>
    // Import main layout components
    import BaseHeader from '@/layouts/partials/Header'
    import BaseSidebar from '@/layouts/partials/Sidebar'
    import BaseSideOverlay from '@/layouts/partials/SideOverlay'
    import BaseFooter from '@/layouts/partials/Footer'

    export default {
        name: 'BaseLayout',
        components: {
            BaseHeader,
            BaseSidebar,
            BaseSideOverlay,
            BaseFooter
        },
        props: {
            layoutClasses: Object
        },
        data() {
            return {}
        },
        computed: {
            loader() {
                return this.$store.state.settings.pageLoader
            },
            pageOverlay() {
                return this.$store.state.settings.pageOverlay
            },
            sideOverlay() {
                return this.$store.state.layout.sideOverlay
            },
            sidebar() {
                return this.$store.state.layout.sidebar
            },
            header() {
                return this.$store.state.layout.header
            },
            footer() {
                return this.$store.state.layout.footer
            },
            classContainer() {
                return {
                    'sidebar-r': this.$store.state.layout.sidebar && !this.$store.state.settings.sidebarLeft,
                    'sidebar-mini': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarMini,
                    'sidebar-o': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarVisibleDesktop,
                    'sidebar-o-xs': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarVisibleMobile,
                    'sidebar-dark': this.$store.state.layout.sidebar && this.$store.state.settings.sidebarDark,
                    'side-overlay-o': this.$store.state.layout.sideOverlay && this.$store.state.settings.sideOverlayVisible,
                    'side-overlay-hover': this.$store.state.layout.sideOverlay && this.$store.state.settings.sideOverlayHoverable,
                    'enable-page-overlay': this.$store.state.layout.sideOverlay && this.$store.state.settings.pageOverlay,
                    'page-header-fixed': this.$store.state.layout.header && this.$store.state.settings.headerFixed,
                    'page-header-dark': this.$store.state.layout.header && this.$store.state.settings.headerDark,
                    'main-content-boxed': this.$store.state.settings.mainContent === 'boxed',
                    'main-content-narrow': this.$store.state.settings.mainContent === 'narrow',
                    'rtl-support': this.$store.state.settings.rtlSupport,
                    'side-trans-enabled': this.$store.state.settings.sideTransitions,
                    'side-scroll': true
                }
            }
        },
        methods: {
            close() {
                this.$store.commit('sideOverlay', {mode: 'close'})
            }
        },
        created() {
            // Set default color theme
            this.$store.commit('setColorTheme', {theme: this.$store.getters.appColorTheme})
        }
    }
</script>

<style lang="scss">
    // Custom router view transition
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>
