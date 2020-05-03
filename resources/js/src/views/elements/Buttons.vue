<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Custom buttons styles to fulfill any design approach." title="Buttons">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Button</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Buttons Styles -->
            <h2 class="content-heading">Styles</h2>

            <!-- Default -->
            <base-block title="Default">
                <p class="font-size-sm text-muted">
                    The default button style with various colors to choose from. Prefer using 2 or max 3 button color
                    variations in your web project to make it easier and more accesible for your users.
                </p>
                <b-row class="items-push-2x text-center text-sm-left">
                    <b-col sm="6" xl="4">
                        <b-button variant="primary">Primary</b-button>
                        <div class="mt-2">
                            <code>variant="primary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="secondary">Secondary</b-button>
                        <div class="mt-2">
                            <code>variant="secondary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="success">Success</b-button>
                        <div class="mt-2">
                            <code>variant="success"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="info">Info</b-button>
                        <div class="mt-2">
                            <code>variant="info"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="warning">Warning</b-button>
                        <div class="mt-2">
                            <code>variant="warning"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="danger">Danger</b-button>
                        <div class="mt-2">
                            <code>variant="danger"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="dark">Dark</b-button>
                        <div class="mt-2">
                            <code>variant="dark"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="light">Light</b-button>
                        <div class="mt-2">
                            <code>variant="light"</code>
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Default -->

            <!-- Alternate -->
            <base-block title="Alternate">
                <p class="font-size-sm text-muted">
                    The alternate button style offers a more subtle design style.
                </p>
                <b-row class="items-push-2x text-center text-sm-left">
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-primary">Primary</b-button>
                        <div class="mt-2">
                            <code>variant="alt-primary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-secondary">Secondary</b-button>
                        <div class="mt-2">
                            <code>variant="alt-secondary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-success">Success</b-button>
                        <div class="mt-2">
                            <code>variant="alt-success"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-info">Info</b-button>
                        <div class="mt-2">
                            <code>variant="alt-info"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-warning">Warning</b-button>
                        <div class="mt-2">
                            <code>variant="alt-warning"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-danger">Danger</b-button>
                        <div class="mt-2">
                            <code>variant="alt-danger"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-dark">Dark</b-button>
                        <div class="mt-2">
                            <code>variant="alt-dark"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="alt-light">Light</b-button>
                        <div class="mt-2">
                            <code>variant="alt-light"</code>
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Alternate -->

            <!-- Outline -->
            <base-block title="Outline">
                <p class="font-size-sm text-muted">
                    Outline styles are also available for all previous color variations
                </p>
                <b-row class="items-push-2x text-center text-sm-left">
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-primary">Primary</b-button>
                        <div class="mt-2">
                            <code>variant="primary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-secondary">Secondary</b-button>
                        <div class="mt-2">
                            <code>variant="outline-secondary"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-success">Success</b-button>
                        <div class="mt-2">
                            <code>variant="outline-success"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-info">Info</b-button>
                        <div class="mt-2">
                            <code>variant="outline-info"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-warning">Warning</b-button>
                        <div class="mt-2">
                            <code>variant="outline-warning"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-danger">Danger</b-button>
                        <div class="mt-2">
                            <code>variant="outline-danger"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-dark">Dark</b-button>
                        <div class="mt-2">
                            <code>variant="outline-dark"</code>
                        </div>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button variant="outline-light">Light</b-button>
                        <div class="mt-2">
                            <code>variant="outline-light"</code>
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Outline -->
            <!-- END Buttons Styles -->

            <!-- Button Effects -->
            <h2 class="content-heading">Effects</h2>

            <!-- Ripple -->
            <!-- Click Ripple, functionality initialized in directives/click-ripple.js -->
            <base-block title="Ripple">
                <p class="font-size-sm text-muted">
                    Inspired by Material design, adding a ripple animation on click is just an attribute away <code>v-click-ripple</code>
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button v-click-ripple variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>
            <!-- END Ripple -->
            <!-- END Button Effects -->

            <!-- Button Variations -->
            <h2 class="content-heading">Variations</h2>

            <!-- Small Size -->
            <base-block title="Small Size">
                <p class="font-size-sm text-muted">
                    You can use <code>size="sm"</code> to make your buttons larger
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="sm" variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>
            <!-- END Small Size -->

            <!-- Large Size -->
            <base-block title="Large Size">
                <p class="font-size-sm text-muted">
                    You can use <code>size="lg"</code> to make your buttons larger
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button size="lg" variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>
            <!-- END Large Size -->

            <!-- Square -->
            <base-block title="Square">
                <p class="font-size-sm text-muted">
                    You can remove border radius from your buttons if you are looking for a sharp look by using the
                    class <code>btn-square</code>
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-square" variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>
            <!-- END Square -->

            <!-- Rounded -->
            <base-block title="Rounded">
                <p class="font-size-sm text-muted">
                    Fully rounded buttons are available for all available button styles by using the class <code>btn-rounded</code>
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button class="btn-rounded" variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>
            <!-- END Rounded -->

            <!-- Disabled -->
            <base-block title="Disabled">
                <p class="font-size-sm text-muted">
                    If an action is not available in a specific state of your website/app, you can easily disable your
                    buttons
                </p>

                <!-- Default -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Alternate -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="alt-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Alternate -->

                <!-- Outline -->
                <b-row class="items-push text-center text-sm-left mb-4">
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-primary">Primary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-secondary">Secondary</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-success">Success</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-info">Info</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-warning">Warning</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-danger">Danger</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-dark">Dark</b-button>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-button disabled variant="outline-light">Light</b-button>
                    </b-col>
                </b-row>
                <!-- END Outline -->
            </base-block>

            <!-- Icons -->
            <base-block title="Icons">
                <p class="font-size-sm text-muted">
                    You can use any of the
                    <router-link to="/backend/elements/icons">available icons</router-link>
                    in your buttons to visualize its intended action
                </p>

                <!-- Default -->
                <div class="mb-4">
                    <b-button class="mr-1 mb-3" variant="success">
                        <i class="fa fa-fw fa-plus mr-1"></i> Add User
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="info">
                        <i class="fa fa-fw fa-download mr-1"></i> Download
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="warning">
                        <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="primary">
                        <i class="fa fa-fw fa-upload mr-1"></i> Upload
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="secondary">
                        <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="danger">
                        <i class="fa fa-fw fa-times mr-1"></i> Delete
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="primary">
                        <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="secondary">
                        <i class="fa fa-fw fa-play mr-1"></i> Play
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="dark">
                        <i class="fa fa-fw fa-box mr-1"></i> 10 Products
                    </b-button>
                </div>
                <!-- END Default -->

                <!-- Alternate -->
                <div class="mb-4">
                    <b-button class="mr-1 mb-3" variant="alt-success">
                        <i class="fa fa-fw fa-plus mr-1"></i> Add User
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-info">
                        <i class="fa fa-fw fa-download mr-1"></i> Download
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-warning">
                        <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-primary">
                        <i class="fa fa-fw fa-upload mr-1"></i> Upload
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-secondary">
                        <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-danger">
                        <i class="fa fa-fw fa-times mr-1"></i> Delete
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-primary">
                        <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-secondary">
                        <i class="fa fa-fw fa-play mr-1"></i> Play
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="alt-dark">
                        <i class="fa fa-fw fa-box mr-1"></i> 10 Products
                    </b-button>
                </div>
                <!-- END Alternate -->

                <!-- Outline -->
                <div class="mb-4">
                    <b-button class="mr-1 mb-3" variant="outline-success">
                        <i class="fa fa-fw fa-plus mr-1"></i> Add User
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-info">
                        <i class="fa fa-fw fa-download mr-1"></i> Download
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-warning">
                        <i class="fa fa-fw fa-exclamation-triangle mr-1"></i> Are you sure?
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-primary">
                        <i class="fa fa-fw fa-upload mr-1"></i> Upload
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-secondary">
                        <i class="fab fa-fw fa-bluetooth-b mr-1"></i> 3 Connections
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-danger">
                        <i class="fa fa-fw fa-times mr-1"></i> Delete
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-primary">
                        <i class="fa fa-fw fa-thumbs-up mr-1"></i> Like
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-secondary">
                        <i class="fa fa-fw fa-play mr-1"></i> Play
                    </b-button>
                    <b-button class="mr-1 mb-3" variant="outline-dark">
                        <i class="fa fa-fw fa-box mr-1"></i> 10 Products
                    </b-button>
                </div>
                <!-- END Outline -->
            </base-block>

            <!-- Be Creative -->
            <base-block title="Be Creative">
                <p class="font-size-sm text-muted">
                    Mix any of the available classes to create the button style you want to use in your project
                </p>
                <b-button class="btn-square mr-1 mb-3" size="lg" variant="secondary">
                    <i class="fa fa-fw fa-wifi mr-1"></i> Wifi Available
                </b-button>
                <b-button class="btn-rounded mr-1 mb-3" variant="alt-danger">
                    <i class="fa fa-fw fa-times mr-1"></i> Remove
                </b-button>
                <b-button class="mr-1 mb-3" variant="success">
                    <i class="fa fa-fw fa-check"></i>
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="warning">
                    <i class="fa fa-fw fa-exclamation-circle"></i>
                </b-button>
                <b-button class="mr-1 mb-3" size="lg" variant="outline-primary">
                    <i class="fab fa-fw fa-instagram mr-1"></i> Post your image
                </b-button>
                <b-button class="btn-rounded mr-1 mb-3" variant="success">
                    <i class="fa fa-fw fa-pencil-alt"></i>
                </b-button>
                <b-button class="mr-1 mb-3" size="lg" variant="secondary">
                    <i class="fab fa-fw fa-youtube mr-1"></i> YouTube
                </b-button>
                <b-button class="btn-square mr-1 mb-3" size="sm" variant="outline-warning">
                    <i class="far fa-fw fa-envelope mr-1"></i> Messages
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="dark">
                    <i class="fab fa-fw fa-dribbble mr-1"></i> Dribbble
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="primary">
                    <i class="fa fa-fw fa-archive mr-1"></i> Archive
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="secondary">
                    <i class="fa fa-fw fa-wrench mr-1"></i> Preferences
                </b-button>
                <b-button class="btn-square mr-1 mb-3" size="lg" variant="light">
                    <i class="fa fa-fw fa-cog mr-1"></i> Options
                </b-button>
                <b-button class="mr-1 mb-3" size="lg" variant="alt-warning">
                    <i class="fab fa-fw fa-instagram mr-1"></i> Instagram
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="alt-primary">
                    <i class="fa fa-fw fa-rocket mr-1"></i> Test
                </b-button>
                <b-button class="btn-rounded mr-1 mb-3" size="sm" variant="outline-dark">
                    <i class="fa fa-fw fa-image mr-1"></i> Picture
                </b-button>
                <b-button class="mr-1 mb-3" size="lg" variant="warning">
                    <i class="fa fa-fw fa-tint mr-1"></i> Themes
                </b-button>
                <b-button class="mr-1 mb-3" size="sm" variant="primary">
                    <i class="fa fa-fw fa-arrow-down mr-1"></i> Down
                </b-button>
                <b-button class="btn-rounded px-4 mr-1 mb-3" size="lg" variant="alt-success">
                    <i class="si si-rocket mr-1"></i> Launch Product
                </b-button>
                <b-button class="btn-square mr-1 mb-3" size="sm" variant="info">
                    <i class="si si-chemistry mr-1"></i> Lab
                </b-button>
            </base-block>
            <!-- END Be Creative -->
            <!-- END Button Variations -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
