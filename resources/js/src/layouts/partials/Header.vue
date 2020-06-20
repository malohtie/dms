<template>
    <!-- Header -->
    <header id="page-header">
        <slot>
            <!-- Header Content -->
            <div class="content-header">
                <!-- Left Section -->
                <div class="d-flex align-items-center">
                    <!-- Toggle Sidebar -->
                    <base-layout-modifier action="sidebarToggle" class="mr-2 d-lg-none" size="sm" variant="dual">
                        <i class="fa fa-fw fa-bars"></i>
                    </base-layout-modifier>
                    <!-- END Toggle Sidebar -->

                    <!-- Toggle Mini Sidebar -->
                    <base-layout-modifier action="sidebarMiniToggle" class="mr-2 d-none d-lg-inline-block" size="sm"
                                          variant="dual">
                        <i class="fa fa-fw fa-ellipsis-v"></i>
                    </base-layout-modifier>
                    <!-- END Toggle Mini Sidebar -->

                    <!-- Apps Modal Toggle Button -->
                    <b-button class="mr-2" size="sm" v-b-modal.one-modal-apps variant="dual" title="SHORTCUTS">
                        <i class="si si-grid"></i>
                    </b-button>
                    <!-- END Apps Modal Toggle Button -->

                    <!-- Apps Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="one-modal-apps" size="sm">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">SHORTCUTS</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('one-modal-apps')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content block-content-full">
                                <div class="row gutters-tiny">
                                    <div class="col-6">
                                        <!-- CAMPAIGNS -->
                                        <base-block class="bg-default pointer" content-class="text-center" hideHeader
                                                    @visit="go('/campaigns')"  rounded themed>
                                            <i class="si si-envelope fa-2x text-white-75"></i>
                                            <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                                                CAMPAIGNS
                                            </p>
                                        </base-block>
                                        <!-- END CAMPAIGNS -->
                                    </div>
                                    <div class="col-6">
                                        <!-- STATS -->
                                        <base-block class="bg-danger pointer" content-class="text-center" hideHeader
                                                    @visit="go('/stats')" rounded  themed>
                                            <i class="si si-feed fa-2x text-white-75"></i>
                                            <p class="font-w600 font-size-sm text-white mt-2 mb-3">
                                                STATS
                                            </p>
                                        </base-block>
                                        <!-- END STATS -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Apps Modal -->
                </div>
                <!-- END Left Section -->

                <!-- Right Section -->
                <div class="d-flex align-items-center">
                    <!-- User Dropdown -->
                    <b-dropdown class="d-inline-block ml-2" menu-class="p-0 border-0 font-size-sm" no-caret
                                right size="sm" variant="dual">
                        <template #button-content>
                            <i class="far fa-user"></i>
                            <span class="d-none d-sm-inline-block ml-1">{{ fullName | cap | truncate(13) }}</span>
                            <i class="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
                        </template>

                        <div class="p-3 text-center bg-primary">
                            <img alt="Avatar" class="img-avatar img-avatar48 img-avatar-thumb"
                                 src="/images/avatars/avatar10.jpg">
                        </div>
                        <div class="p-2">
                            <h5 class="dropdown-header text-uppercase">User Options</h5>
                            <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                               to="/profile">
                                <span>Settings</span>
                                <i class="si si-settings"></i>
                            </b-dropdown-item>
                            <b-dropdown-divider />
                            <b-dropdown-header tag="h5" class="text-uppercase">Actions</b-dropdown-header>

                            <b-dropdown-item link-class="d-flex align-items-center justify-content-between"
                                             @click="logout">
                                <span>Logout</span>
                                <i class="si si-logout ml-1"></i>
                            </b-dropdown-item>
                        </div>
                    </b-dropdown>
                    <!-- END User Dropdown -->
                </div>
                <!-- END Right Section -->
            </div>
            <!-- END Header Content -->
            <!-- Header Loader -->
            <div :class="{ 'show': settings.headerLoader }" class="overlay-header bg-white"
                 id="page-header-loader">
                <div class="content-header">
                    <div class="w-100 text-center">
                        <i class="fab fa-fw fa-dyalog fa-spin"></i>
                    </div>
                </div>
            </div>
            <!-- END Header Loader -->
        </slot>
    </header>
    <!-- END Header -->
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: 'BaseHeader',
        props: {
            classes: String
        },
        computed: {
            ...mapState([
                'settings'
            ]),
            ...mapGetters({
                user: 'auth/user'
            }),
            fullName() {
                return this.user?.full_name;
            }
        },
        methods: {
            go(url) {
                this.$router.push(url)
            },
            logout() {
                this.$store.dispatch('auth/logout').then(() => {
                    this.$router.push('/login')
                })
            },
        },
    }
</script>
