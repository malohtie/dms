<template>
    <div :class="classContainer" id="page-container">
        <!-- Page Loader -->
        <vue-progress-bar></vue-progress-bar>
        <div :class="{'show': loader}" id="page-loader"></div>
        <!-- END Page Loader -->

        <!-- Sidebar -->
        <base-sidebar :class="layoutClasses.sidebar" :menu="menu" v-if="sidebar">
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
            <transition name="fade" mode="out-in">
                <router-view :key="$route.fullPath"></router-view>
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
    import BaseFooter from '@/layouts/partials/Footer'

    export default {
        name: 'BaseLayout',
        components: {
            BaseHeader,
            BaseSidebar,
            BaseFooter
        },
        props: {
            layoutClasses: Object,
            menu: Array
        },
        data() {
            return {}
        },
        computed: {
            loader() {
                return this.$store.state.settings.pageLoader
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
