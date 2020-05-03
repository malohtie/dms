<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Similar to the ones found in iOS." title="Popovers">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Popovers</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Default -->
            <base-block title="Default">
                <p class="font-size-sm text-muted">
                    Show popovers on hover
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Top Popover"
                                  v-b-popover.hover.nofade.top="'This is example content. You can put a description or more info here.'"
                                  variant="primary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Right Popover"
                                  v-b-popover.hover.nofade.right="'This is example content. You can put a description or more info here.'"
                                  variant="primary">Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Bottom Popover"
                                  v-b-popover.hover.nofade.bottom="'This is example content. You can put a description or more info here.'"
                                  variant="primary">Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Left Popover"
                                  v-b-popover.hover.nofade.left="'This is example content. You can put a description or more info here.'"
                                  variant="primary">Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Default -->

            <!-- Click Triggered -->
            <base-block title="Click Triggered">
                <p class="font-size-sm text-muted">
                    Show popovers on hover
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Top Popover"
                                  v-b-popover.click.nofade.top="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Right Popover"
                                  v-b-popover.click.nofade.right="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Bottom Popover"
                                  v-b-popover.click.nofade.bottom="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Left Popover"
                                  v-b-popover.click.nofade.left="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Click Triggered -->

            <!-- Animation -->
            <base-block title="Animation">
                <p class="font-size-sm text-muted">
                    You can enable a fade animation to your popovers
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Top Popover"
                                  v-b-popover.hover.top="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Right Popover"
                                  v-b-popover.hover.right="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Bottom Popover"
                                  v-b-popover.hover.bottom="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Left Popover"
                                  v-b-popover.hover.left="'This is example content. You can put a description or more info here.'"
                                  variant="secondary">Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Animation -->

            <!-- HTML -->
            <base-block title="HTML">
                <p class="font-size-sm text-muted">
                    You can add HTML in your popovers as well
                </p>
                <b-row class="items-push text-center">
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Popover Title"
                                  v-b-popover.hover.html.nofade.top="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">Top
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Popover Title"
                                  v-b-popover.hover.html.nofade.right="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">Right
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Popover Title"
                                  v-b-popover.hover.html.nofade.bottom="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">Bottom
                        </b-button>
                    </b-col>
                    <b-col sm="6" xl="3">
                        <b-button block size="sm" title="Popover Title"
                                  v-b-popover.hover.html.nofade.left="'<img class=\'img-avatar\' src=\'/images/avatars/avatar10.jpg\' alt=\'\'>'"
                                  variant="secondary">Left
                        </b-button>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END HTML -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
