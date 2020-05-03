<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Adding controls in your blocks." title="Block Options">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
                    <b-breadcrumb-item active>Options</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Interactive Options -->
            <h2 class="content-heading">
                Interactive Options
                <small>
                    <router-link to="/backend/blocks/api">Check out Blocks API</router-link>
                </small>
            </h2>
            <b-row>
                <b-col md="6">
                    <base-block btn-option-close btn-option-content btn-option-fullscreen btn-option-pinned
                                ref="exampleBlock1" subtitle="Subtitle" title="Title">
                        <template #options>
                            <button @click="loadData('exampleBlock1')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block btn-option-close btn-option-content btn-option-fullscreen btn-option-pinned header-rtl
                                ref="exampleBlock2" subtitle="Subtitle" title="Title">
                        <template #options>
                            <button @click="loadData('exampleBlock2')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Interactive Options -->

            <h2 class="content-heading">Alternative Options Examples</h2>

            <!-- Custom Buttons in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-bell"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-arrow-alt-circle-left"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-arrow-alt-circle-right"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-trash-alt"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-trash-alt"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-arrow-alt-circle-left"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-arrow-alt-circle-right"></i>
                            </button>
                            <button class="btn-block-option" type="button">
                                <i class="far fa-fw fa-bell"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Custom Buttons in Options -->

            <!-- Bootstrap Dropdowns in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-dropdown right size="sm" text="Settings" variant="light">
                                <b-dropdown-item class="font-size-sm">
                                    <i class="far fa-fw fa-bell mr-1"></i> News
                                </b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">
                                    <i class="far fa-fw fa-envelope mr-1"></i> Messages
                                </b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">
                                    <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                                </b-dropdown-item>
                            </b-dropdown>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-dropdown size="sm" text="Settings" variant="light">
                                <b-dropdown-item class="font-size-sm">
                                    <i class="far fa-fw fa-bell mr-1"></i> News
                                </b-dropdown-item>
                                <b-dropdown-item class="font-size-sm">
                                    <i class="far fa-fw fa-envelope mr-1"></i> Messages
                                </b-dropdown-item>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item class="font-size-sm">
                                    <i class="fa fa-fw fa-pencil-alt mr-1"></i> Edit Profile
                                </b-dropdown-item>
                            </b-dropdown>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Bootstrap Dropdowns in Options -->

            <!-- Bootstrap Buttons in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-button size="sm" variant="primary">Edit</b-button>
                            <b-button size="sm" variant="danger">Delete</b-button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-button size="sm" variant="danger">Delete</b-button>
                            <b-button size="sm" variant="primary">Edit</b-button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-button size="sm" variant="outline-secondary">Cancel</b-button>
                            <b-button size="sm" variant="outline-primary">Ok</b-button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <b-button size="sm" variant="outline-primary">Ok</b-button>
                            <b-button size="sm" variant="outline-secondary">Cancel</b-button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Bootstrap Buttons in Options -->

            <!-- Text in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">Text 1</div>
                            <div class="block-options-item">Text 2</div>
                            <div class="block-options-item">Text 3</div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">Text 1</div>
                            <div class="block-options-item">Text 2</div>
                            <div class="block-options-item">Text 3</div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item text-danger">Special!</div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item text-success">Looking Good!</div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Text in Options -->

            <!-- Alerts in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="warning">
                                    <i class="fa fa-exclamation-triangle mr-1"></i> This is an alert!
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <div class="alert alert-warning py-2 mb-0">
                                    This is an alert! <i class="fa fa-exclamation-triangle ml-1"></i>
                                </div>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="info">
                                    <i class="fa fa-info-circle mr-1"></i> Info
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="info">
                                    Info! <i class="fa fa-info-circle ml-1"></i>
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="success">
                                    <i class="fa fa-check-circle mr-1"></i> Success
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="success">
                                    Success <i class="fa fa-check-circle ml-1"></i>
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="danger">
                                    <i class="fa fa-times-circle mr-1"></i> Failure!
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-alert class="py-2 mb-0" show variant="danger">
                                    Failure! <i class="fa fa-times-circle ml-1"></i>
                                </b-alert>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Alerts in Options -->

            <!-- Badges in Options -->
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-badge variant="success">Yes</b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge variant="primary">15</b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge variant="warning">
                                    <i class="fa fa-exclamation-triangle"></i>
                                </b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge pill variant="danger">Pill Badge</b-badge>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block header-rtl subtitle="Subtitle" title="Title">
                        <template #options>
                            <div class="block-options-item">
                                <b-badge pill variant="danger">Pill Badge</b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge variant="warning">
                                    <i class="fa fa-exclamation-triangle"></i>
                                </b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge variant="success">Yes</b-badge>
                            </div>
                            <div class="block-options-item">
                                <b-badge variant="primary">15</b-badge>
                            </div>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris
                            adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt
                            himenaeos
                            habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit
                            varius lorem sit
                            metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Badges in Options -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        methods: {
            loadData(ref) {
                // Set the block to loading state
                this.$refs[ref].stateLoading()

                // .. here you could load your data

                // Set a timeout for demo purposes
                setTimeout(() => {
                    // Set the block back to normal state
                    this.$refs[ref].stateNormal()
                }, 2000)
            }
        }
    }
</script>
