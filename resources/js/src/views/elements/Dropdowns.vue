<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Toggle contextual overlays for displaying lists of links and more."
                           title="Dropdowns">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Dropdowns</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Normal -->
            <base-block title="Normal">
                <!-- Default Style -->
                <p class="font-size-sm text-muted">
                    You can easily attach a dropdown to a default button and add various actions
                </p>
                <b-row class="items-push mb-4">
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-primary" text="Dropdown" variant="primary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-secondary" text="Dropdown" variant="secondary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-success" text="Dropdown" variant="success">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-info" text="Dropdown" variant="info">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-warning" text="Dropdown" variant="warning">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-danger" text="Dropdown" variant="danger">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-dark" text="Dropdown" variant="dark">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-light" text="Dropdown" variant="light">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
                <!-- END Default Style -->

                <!-- Alternate Style -->
                <p class="font-size-sm text-muted">
                    You can also add dropdowns to alternate styled buttons
                </p>
                <b-row class="items-push mb-4">
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-primary" text="Dropdown" variant="alt-primary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-secondary" text="Dropdown" variant="alt-secondary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-success" text="Dropdown" variant="alt-success">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-info" text="Dropdown" variant="alt-info">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-warning" text="Dropdown" variant="alt-warning">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-danger" text="Dropdown" variant="alt-danger">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-dark" text="Dropdown" variant="alt-dark">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-alt-light" text="Dropdown" variant="alt-light">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
                <!-- END Alternate Style -->

                <!-- Outline Style -->
                <p class="font-size-sm text-muted">
                    You can also add dropdowns to outline styled buttons
                </p>
                <b-row class="items-push mb-4">
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-primary" text="Dropdown" variant="outline-primary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-secondary" text="Dropdown" variant="outline-secondary">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-success" text="Dropdown" variant="outline-success">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-info" text="Dropdown" variant="outline-info">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-warning" text="Dropdown" variant="outline-warning">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-danger" text="Dropdown" variant="outline-danger">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-dark" text="Dropdown" variant="outline-dark">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                    <b-col sm="6" xl="4">
                        <b-dropdown id="dropdown-default-outline-light" text="Dropdown" variant="outline-light">
                            <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                            <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                        </b-dropdown>
                    </b-col>
                </b-row>
                <!-- END Outline Style -->
            </base-block>
            <!-- END Normal -->

            <b-row class="row-deck">
                <b-col md="6">
                    <!-- Split Button Dropdowns -->
                    <base-block title="Split Button Dropdowns">
                        <p class="font-size-sm text-muted">
                            Grouping your dropdowns with separate buttons is really easy
                        </p>
                        <b-row class="items-push mb-4">
                            <b-col xl="4">
                                <b-dropdown id="dropdown-split-primary" split text="Action" variant="primary">
                                    <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </b-col>
                            <b-col xl="4">
                                <b-dropdown id="dropdown-split-danger" split text="Action" variant="alt-danger">
                                    <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </b-col>
                            <b-col xl="4">
                                <b-dropdown id="dropdown-split-warning" split text="Action" variant="warning">
                                    <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Something else here...</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </b-col>
                        </b-row>
                    </base-block>
                    <!-- END Split Button Dropdowns -->
                </b-col>
                <b-col md="6">
                    <!-- Alignment -->
                    <base-block title="Alignment">
                        <p class="font-size-sm text-muted">
                            You can align your dropmenus to the right of buttons
                        </p>
                        <b-row class="items-push mb-4">
                            <b-col class="text-right" sm="6">
                                <b-dropdown id="dropdown-align-primary" right text="From Right" variant="primary">
                                    <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </b-col>
                            <b-col class="text-right" sm="6">
                                <b-dropdown id="dropdown-align-alt-primary" right text="From Right"
                                            variant="alt-primary">
                                    <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                    <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                                </b-dropdown>
                            </b-col>
                        </b-row>
                    </base-block>
                    <!-- END Alignment -->
                </b-col>
            </b-row>

            <!-- Rich Content -->
            <base-block title="Rich Content">
                <p class="font-size-sm text-muted">
                    You can also use forms inside your dropdowns
                </p>
                <b-dropdown class="push" id="dropdown-content-rich-primary" ref="dropdown"
                            text="Example form in dropdown" variant="primary">
                    <b-dropdown-form class="font-size-sm p-2">
                        <b-form-group @submit.stop.prevent label="Email" label-for="dropdown-content-form-email">
                            <b-form-input id="dropdown-content-form-email"
                                          placeholder="email@example.com"></b-form-input>
                        </b-form-group>
                        <b-form-group label="Password" label-for="dropdown-content-form-password">
                            <b-form-input id="dropdown-content-form-password" placeholder="Password"
                                          type="password"></b-form-input>
                        </b-form-group>
                        <b-button @click="clickDropdownFormExample" variant="primary">Sign In</b-button>
                    </b-dropdown-form>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item-button class="font-size-sm">Sign up</b-dropdown-item-button>
                    <b-dropdown-item-button class="font-size-sm">Forgot Password?</b-dropdown-item-button>
                </b-dropdown>
            </base-block>
            <!-- END Rich Content -->

            <!-- Position -->
            <base-block title="Position">
                <p class="font-size-sm text-muted">
                    You can position your dropdown relative to your button
                </p>
                <b-row class="items-push mb-4">
                    <b-col md="4">
                        <!-- Dropup -->
                        <h3 class="h4">Dropup</h3>
                        <div class="push">
                            <b-dropdown dropup id="dropdown-dropup-secondary" text="Up" variant="secondary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropup id="dropdown-dropup-alt-secondary" text="Up" variant="alt-secondary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropup id="dropdown-dropup-outline-secondary" text="Up"
                                        variant="outline-secondary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- END Dropup -->
                    </b-col>
                    <b-col md="4">
                        <!-- Dropright -->
                        <h3 class="h4">Dropright</h3>
                        <div class="push">
                            <b-dropdown dropright id="dropdown-dropright-primary" text="Right" variant="primary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropright id="dropdown-dropright-alt-primary" text="Right"
                                        variant="alt-primary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropright id="dropdown-dropright-outline-primary" text="Right"
                                        variant="outline-primary">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- END Dropright -->
                    </b-col>
                    <b-col class="text-right" md="4">
                        <!-- Dropleft -->
                        <h3 class="h4">Dropleft</h3>
                        <div class="push">
                            <b-dropdown dropleft id="dropdown-dropleft-dark" text="Left" variant="dark">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropleft id="dropdown-dropleft-alt-dark" text="Left" variant="alt-dark">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <div class="push">
                            <b-dropdown dropleft id="dropdown-dropleft-outline-dark" text="Left" variant="outline-dark">
                                <b-dropdown-item class="font-size-sm">Action</b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">Another action</b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">Something else here</b-dropdown-item>
                            </b-dropdown>
                        </div>
                        <!-- END Dropleft -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Position -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        methods: {
            clickDropdownFormExample() {
                // Close the menu and (by passing true) return focus to the toggle button
                this.$refs.dropdown.hide(true)
            }
        }
    }
</script>
