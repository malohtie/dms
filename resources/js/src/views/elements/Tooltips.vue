<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Attach optional info to an element." title="Tooltips">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Tooltips</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Default -->
            <base-block title="Default">
                <p class="font-size-sm text-muted">
                    Show tooltips on hover
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.nofade.top="'Top Tooltip'" variant="primary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.nofade.right="'Right Tooltip'" variant="primary">
                            Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.nofade.bottom="'Bottom Tooltip'" variant="primary">
                            Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.nofade.left="'Left Tooltip'" variant="primary">
                            Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Default -->

            <!-- Click Triggered -->
            <base-block title="Click Triggered">
                <p class="font-size-sm text-muted">
                    Show tooltips on hover
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.click.nofade.top="'Top Tooltip'" variant="secondary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.click.nofade.right="'Right Tooltip'" variant="secondary">
                            Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.click.nofade.bottom="'Bottom Tooltip'"
                                  variant="secondary">Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.click.nofade.left="'Left Tooltip'" variant="secondary">
                            Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Click Triggered -->

            <!-- Animation -->
            <base-block title="Animation">
                <p class="font-size-sm text-muted">
                    You can enable a fade animation to your tooltips
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.top="'Top Tooltip'" variant="secondary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.right="'Right Tooltip'" variant="secondary">Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.bottom="'Bottom Tooltip'" variant="secondary">
                            Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.left="'Left Tooltip'" variant="secondary">Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Animation -->

            <!-- HTML -->
            <base-block title="HTML">
                <p class="font-size-sm text-muted">
                    You can add HTML in your tooltips as well
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.html.nofade.top="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">
                            Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.html.nofade.right="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">
                            Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.html.nofade.bottom="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">
                            Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" v-b-tooltip.hover.html.nofade.left="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">
                            Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END HTML -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
