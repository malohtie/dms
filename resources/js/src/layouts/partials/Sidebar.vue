<template>
    <!-- Sidebar -->
    <!--
      Sidebar Mini Mode - Display Helper classes

      Adding 'smini-hide' class to an element will make it invisible (opacity: 0) when the sidebar is in mini mode
      Adding 'smini-show' class to an element will make it visible (opacity: 1) when the sidebar is in mini mode
      If you would like to disable the transition animation, make sure to also add the 'no-transition' class to your element

      Adding 'smini-hidden' to an element will hide it when the sidebar is in mini mode
      Adding 'smini-visible' to an element will show it (display: inline-block) only when the sidebar is in mini mode
      Adding 'smini-visible-block' to an element will show it (display: block) only when the sidebar is in mini mode
      -->
    <simplebar aria-label="Main Navigation" id="sidebar">
        <slot>
            <!-- Side Header -->
            <div class="content-header bg-white-5">
                <!-- Logo -->
                <a class="font-w600 text-dual" href='javascript:void(0)'>
                    <i class="fa fa-circle-notch text-primary"></i><span class="font-w700 font-size-h5 ml-1 smini-hide">{{ appName }}</span>
                </a>
                <!-- END Logo -->
                <!-- Extra -->
                <div>
                    <!-- Options -->
                    <b-dropdown class="d-inline-block ml-2" menu-class="font-size-sm smini-hide border-0" no-caret
                                right size="sm" variant="dual">
                        <template #button-content>
                            <i class="si si-drop"></i>
                        </template>
                        <!-- Color Themes -->
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: '' })">
                            <span>Default</span>
                            <i class="fa fa-circle text-default"></i>
                        </b-dropdown-item>
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: 'amethyst' })">
                            <span>Amethyst</span>
                            <i class="fa fa-circle text-amethyst"></i>
                        </b-dropdown-item>
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: 'city' })">
                            <span>City</span>
                            <i class="fa fa-circle text-city"></i>
                        </b-dropdown-item>
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: 'flat' })">
                            <span>Flat</span>
                            <i class="fa fa-circle text-flat"></i>
                        </b-dropdown-item>
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: 'modern' })">
                            <span>Modern</span>
                            <i class="fa fa-circle text-modern"></i>
                        </b-dropdown-item>
                        <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                         @click="$store.commit('setColorTheme', { theme: 'smooth' })">
                            <span>Smooth</span>
                            <i class="fa fa-circle text-smooth"></i>
                        </b-dropdown-item>
                        <!-- END Color Themes -->
                        <b-dropdown-divider />
                        <!-- Sidebar Styles -->
                        <base-layout-modifier action="sidebarStyleLight" class="dropdown-item" tag="a">
                            Sidebar Light
                        </base-layout-modifier>
                        <base-layout-modifier action="sidebarStyleDark" class="dropdown-item" tag="a">
                            Sidebar Dark
                        </base-layout-modifier>
                        <!-- Sidebar Styles -->
                        <b-dropdown-divider />
                        <!-- Header Styles -->
                        <base-layout-modifier action="headerStyleLight" class="dropdown-item" tag="a">
                            Header Light
                        </base-layout-modifier>
                        <base-layout-modifier action="headerStyleDark" class="dropdown-item" tag="a">
                            Header Dark
                        </base-layout-modifier>
                        <!-- Header Styles -->
                    </b-dropdown>
                    <!-- Options -->
                    <!-- Close Sidebar, Visible only on mobile screens -->
                    <base-layout-modifier action="sidebarClose" class="d-lg-none ml-2" size="sm" variant="dual">
                        <i class="fa fa-times"></i>
                    </base-layout-modifier>
                    <!-- END Close Sidebar -->
                </div>
                <!-- END Extra -->
            </div>
            <!-- END Side Header -->
            <!-- Side Navigation -->
            <div class="content-side content-side-full">
                <base-navigation :nodes="menu"></base-navigation>
            </div>
            <!-- END Side Navigation -->
        </slot>
    </simplebar>
    <!-- END Sidebar -->
</template>

<script>
    // SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
    import simplebar from 'simplebar-vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'BaseSidebar',
        props: {
            classes: String,
            menu: Array
        },
        components: {
            simplebar
        },
        computed: {
            ...mapGetters([
                'appName'
            ])
        }
    }
</script>
