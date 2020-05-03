<template>
    <!-- Side Overlay-->
    <simplebar id="side-overlay">
        <slot>
            <!-- Side Header -->
            <div class="content-header border-bottom">
                <!-- User Avatar -->
                <a class="img-link mr-1" href="javascript:void(0)">
                    <img alt="Avatar" class="img-avatar img-avatar32" src="/images/avatars/avatar10.jpg">
                </a>
                <!-- END User Avatar -->

                <!-- User Info -->
                <div class="ml-2">
                    <a class="link-fx text-dark font-w600" href="javascript:void(0)">Adam McCoy</a>
                </div>
                <!-- END User Info -->

                <!-- Close Side Overlay -->
                <base-layout-modifier action="sideOverlayClose" class="ml-auto" size="sm" variant="alt-danger">
                    <i class="fa fa-fw fa-times text-danger"></i>
                </base-layout-modifier>
                <!-- END Close Side Overlay -->
            </div>
            <!-- END Side Header -->

            <!-- Side Content -->
            <div class="content-side">
                <!-- Side Overlay Tabs -->
                <b-tabs class="block block-transparent pull-x pull-t" content-class="block-content"
                        justified nav-class="nav-tabs-alt">
                    <b-tab active class="fade-right pull-x">
                        <template #title>
                            <i class="fa fa-fw fa-coffee text-gray mr-1"></i> Overview
                        </template>

                        <!-- Activity -->
                        <base-block btn-option-content header-bg title="Recent Activity">
                            <ul class="nav-items mb-0">
                                <li :key="`event-${index}`" v-for="(appEvent, index) in activity">
                                    <a :href="`${appEvent.href}`" class="text-dark media py-2">
                                        <div class="mr-2 ml-3">
                                            <i :class="`${appEvent.icon} text-${appEvent.color}`"></i>
                                        </div>
                                        <div class="media-body pr-2">
                                            <div class="font-w600">{{ appEvent.title }}</div>
                                            <div :class="`text-${appEvent.color}`">{{ appEvent.subtitle }}</div>
                                            <small class="text-muted">{{ appEvent.time }}</small>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </base-block>
                        <!-- END Activity -->

                        <!-- Online Friends -->
                        <base-block btn-option-content header-bg title="Online Friends">
                            <ul class="nav-items mb-0">
                                <li :key="`userlist-${index}`" v-for="(user, index) in userList">
                                    <a :href="`${user.href}`" class="media py-2">
                                        <div class="mr-3 ml-2 overlay-container overlay-bottom">
                                            <img :src="`/images/avatars/${user.avatar}.jpg`"
                                                 alt="Avatar" class="img-avatar img-avatar48">
                                            <span
                                                :class="`overlay-item item item-tiny item-circle border border-2x border-white bg-${user.statusColor}`"></span>
                                        </div>
                                        <div class="media-body">
                                            <div class="font-w600">{{ user.name }}</div>
                                            <div class="text-muted">{{ user.profession }}</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </base-block>
                        <!-- END Online Friends -->

                        <!-- Quick Settings -->
                        <base-block btn-option-content class="mb-0" header-bg title="Quick Settings">
                            <div class="form-group">
                                <p class="font-w600 mb-2">
                                    Online Status
                                </p>
                                <b-form-checkbox class="mb-1" name="so-settings-status" switch
                                                 v-model="settings.status">
                                    Show your status to all
                                </b-form-checkbox>
                            </div>
                            <hr>
                            <div class="form-group">
                                <p class="font-w600 mb-2">
                                    Auto Updates
                                </p>
                                <b-form-checkbox class="mb-1" name="so-settings-updated" switch
                                                 v-model="settings.updated">
                                    Keep up to date
                                </b-form-checkbox>
                            </div>
                            <hr>
                            <div class="form-group">
                                <p class="font-w600 mb-1">
                                    Application Alerts
                                </p>
                                <b-form-checkbox class="mb-1"
                                                 name="so-settings-notifications-email" switch v-model="settings.notifications.email">
                                    Email Notifications
                                </b-form-checkbox>
                                <b-form-checkbox class="mb-1"
                                                 name="so-settings-notifications-sms" switch v-model="settings.notifications.sms">
                                    SMS Notifications
                                </b-form-checkbox>
                            </div>
                            <hr>
                            <div class="form-group">
                                <p class="font-w600 mb-1">
                                    API
                                </p>
                                <b-form-checkbox class="mb-1" name="so-settings-api" switch v-model="settings.api">
                                    Enable access
                                </b-form-checkbox>
                            </div>
                        </base-block>
                        <!-- END Quick Settings -->
                    </b-tab>
                    <b-tab class="fade-left pull-x">
                        <template #title>
                            <i class="fa fa-fw fa-chart-line text-gray mr-1"></i> Sales
                        </template>
                        <base-block class="mb-0" content-class="p-0">
                            <!-- Stats -->
                            <div class="block-content">
                                <b-row class="items-push pull-t">
                                    <b-col cols="6">
                                        <div class="font-w700 text-uppercase">Sales</div>
                                        <a class="link-fx font-size-h3 font-w300" href="javascript:void(0)">22.030</a>
                                    </b-col>
                                    <b-col cols="6">
                                        <div class="font-w700 text-uppercase">Balance</div>
                                        <a class="link-fx font-size-h3 font-w300"
                                           href="javascript:void(0)">$4.589,00</a>
                                    </b-col>
                                </b-row>
                            </div>
                            <!-- END Stats -->

                            <!-- Today -->
                            <div class="block-content block-content-full block-content-sm bg-body-light">
                                <b-row>
                                    <b-col cols="6">
                                        <span class="font-w600 text-uppercase">Today</span>
                                    </b-col>
                                    <b-col class="text-right" cols="6">
                                        <span class="ext-muted">$996</span>
                                    </b-col>
                                </b-row>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <li :key="`sale-today-${index}`" v-for="(sale, index) in salesToday">
                                        <a :href="`${sale.href}`" class="text-dark media py-2">
                                            <div class="mr-3 ml-2">
                                                <i :class="`${sale.icon}`"></i>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">{{ sale.title }}</div>
                                                <small class="text-muted">{{ sale.time }}</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <!-- END Today -->

                            <!-- Yesterday -->
                            <div class="block-content block-content-full block-content-sm bg-body-light">
                                <div class="row">
                                    <div class="col-6">
                                        <span class="font-w600 text-uppercase">Yesterday</span>
                                    </div>
                                    <div class="col-6 text-right">
                                        <span class="text-muted">$765</span>
                                    </div>
                                </div>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <li :key="`sale-yesterday-${index}`" v-for="(sale, index) in salesYesterday">
                                        <a :href="`${sale.href}`" class="text-dark media py-2">
                                            <div class="mr-3 ml-2">
                                                <i :class="`${sale.icon}`"></i>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-w600">{{ sale.title }}</div>
                                                <small class="text-muted">{{ sale.time }}</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <!-- More -->
                                <div class="text-center">
                                    <b-button href="javascript:void(0)" size="sm" variant="light">
                                        <i class="fa fa-arrow-down mr-1"></i> Load More..
                                    </b-button>
                                </div>
                                <!-- END More -->
                            </div>
                            <!-- END Yesterday -->
                        </base-block>
                    </b-tab>
                </b-tabs>
                <!-- END Side Overlay Tabs -->
            </div>
            <!-- END Side Content -->
        </slot>
    </simplebar>
    <!-- END Side Overlay -->
</template>

<script>
    // SimpleBar, for more info and examples you can check out https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue
    import simplebar from 'simplebar-vue'

    export default {
        name: 'BaseSideOverlay',
        props: {
            classes: String
        },
        components: {
            simplebar
        },
        data() {
            return {
                settings: {
                    status: true,
                    updated: true,
                    notifications: {
                        email: true,
                        sms: true
                    },
                    api: true
                },
                activity: [
                    {
                        href: 'javascript:void(0)',
                        icon: 'si si-wallet',
                        color: 'success',
                        title: 'New sale ($15)',
                        subtitle: 'Admin Template',
                        time: '3 min ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'si si-pencil',
                        color: 'info',
                        title: 'You edited the file',
                        subtitle: 'Documentation.doc',
                        time: '15 min ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'si si-close',
                        color: 'danger',
                        title: 'Project deleted',
                        subtitle: 'Line Icon Set',
                        time: '4 hours ago'
                    }
                ],
                userList: [
                    {
                        href: 'javascript:void(0)',
                        name: 'Judy Ford',
                        profession: 'Copywriter',
                        avatar: 'avatar2',
                        statusColor: 'success'
                    },
                    {
                        href: 'javascript:void(0)',
                        name: 'Carl Wells',
                        profession: 'Web Developer',
                        avatar: 'avatar11',
                        statusColor: 'success'
                    },
                    {
                        href: 'javascript:void(0)',
                        name: 'Amber Shaw',
                        profession: 'Web Designer',
                        avatar: 'avatar5',
                        statusColor: 'success'
                    },
                    {
                        href: 'javascript:void(0)',
                        name: 'Lisa Jekins',
                        profession: 'Photographer',
                        avatar: 'avatar7',
                        statusColor: 'warning'
                    },
                    {
                        href: 'javascript:void(0)',
                        name: 'Adam Ford',
                        profession: 'Graphic Designer',
                        avatar: 'avatar16',
                        statusColor: 'warning'
                    }
                ],
                salesToday: [
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $249',
                        time: '3 min ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $129',
                        time: '50 min ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $119',
                        time: '2 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $499',
                        time: '3 hours ago'
                    }
                ],
                salesYesterday: [
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $249',
                        time: '26 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-danger',
                        title: 'Product Purchase - $50',
                        time: '28 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $119',
                        time: '29 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-danger',
                        title: 'Paypal Withdrawal - $300',
                        time: '37 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $129',
                        time: '39 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $119',
                        time: '45 hours ago'
                    },
                    {
                        href: 'javascript:void(0)',
                        icon: 'fa fa-fw fa-circle text-success',
                        title: 'New sale! + $499',
                        time: '46 hours ago'
                    }
                ]
            }
        },
        methods: {
            eventSideOverlay(event) {
                // When ESCAPE key is hit close the side overlay
                if (event.which === 27) {
                    event.preventDefault()
                    this.$store.commit('sideOverlay', {mode: 'close'})
                }
            }
        },
        mounted() {
            document.addEventListener('keydown', this.eventSideOverlay)
        },
        destroyed() {
            document.removeEventListener('keydown', this.eventSideOverlay)
        }
    }
</script>
