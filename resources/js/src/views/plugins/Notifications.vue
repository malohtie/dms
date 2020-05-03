<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Powerful alerts for your application." title="Notifications">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
                    <b-breadcrumb-item active>Notifications</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Bootstrap Toasts -->
            <base-block title="Bootstrap Toasts">
                <!-- Default -->
                <h4 class="border-bottom pb-2">Default</h4>
                <b-row class="items-push">
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            A nice toast with a message
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <b-button @click="toast('Prepend Toast', 'Toast content')" class="push" variant="alt-secondary">
                            Prepend Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content')</code>
                        </p>
                        <b-button @click="toast('Append Toast', 'Toast content', null, true)" class="push"
                                  variant="alt-secondary">
                            Append Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, true)</code>
                        </p>
                    </b-col>
                </b-row>
                <!-- END Default -->

                <!-- Position -->
                <h4 class="border-bottom pb-2">Position</h4>
                <b-row class="items-push">
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            You can show your notification in multiple screen positions
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <b-button @click="toast('Top Right Toast', 'Toast content', null, false, 'b-toaster-top-right')" class="push"
                                  variant="alt-primary">
                            Top Right Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-right')</code>
                        </p>
                        <b-button @click="toast('Top Left Toast', 'Toast content', null, false, 'b-toaster-top-left')" class="push"
                                  variant="alt-primary">
                            Top Left Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-left')</code>
                        </p>
                        <b-button @click="toast('Top Center Toast', 'Toast content', null, false, 'b-toaster-top-center')" class="push"
                                  variant="alt-primary">
                            Top Center Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-center')</code>
                        </p>
                        <b-button @click="toast('Top Full Toast', 'Toast content', null, false, 'b-toaster-top-full')" class="push"
                                  variant="alt-primary">
                            Top Full Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-top-full')</code>
                        </p>
                        <b-button @click="toast('Bottom Right Toast', 'Toast content', null, false, 'b-toaster-bottom-right')" class="push"
                                  variant="alt-primary">
                            Bottom Right Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-right')</code>
                        </p>
                        <b-button @click="toast('Bottom Left Toast', 'Toast content', null, false, 'b-toaster-bottom-left')" class="push"
                                  variant="alt-primary">
                            Bottom Left Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-left')</code>
                        </p>
                        <b-button @click="toast('Bottom Center Toast', 'Toast content', null, false, 'b-toaster-bottom-center')" class="push"
                                  variant="alt-primary">
                            Bottom Center Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-center')</code>
                        </p>
                        <b-button @click="toast('Bottom Full Toast', 'Toast content', null, false, 'b-toaster-bottom-full')" class="push"
                                  variant="alt-primary">
                            Bottom Full Toast
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', null, false, 'b-toaster-bottom-full')</code>
                        </p>
                    </b-col>
                </b-row>
                <!-- END Position -->

                <!-- Variants -->
                <h4 class="border-bottom pb-2">Variants</h4>
                <b-row class="items-push">
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            You can also specify color variations
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <b-button @click="toast('Success Toast', 'Toast content', 'success')" class="push"
                                  variant="alt-success">
                            Success
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', 'success')</code>
                        </p>
                        <b-button @click="toast('Info Toast', 'Toast content', 'info')" class="push" variant="alt-info">
                            Info
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', 'info')</code>
                        </p>
                        <b-button @click="toast('Warning Toast', 'Toast content', 'warning')" class="push"
                                  variant="alt-warning">
                            Warning
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', 'warning')</code>
                        </p>
                        <b-button @click="toast('Danger Toast', 'Toast content', 'danger')" class="push"
                                  variant="alt-danger">
                            Danger
                        </b-button>
                        <p class="font-w600 mb-0">
                            JS code:
                        </p>
                        <p class="mb-5">
                            <code>this.toast('Title', 'Content', 'danger')</code>
                        </p>
                    </b-col>
                </b-row>
                <!-- END Variants -->
            </base-block>
            <!-- END Bootstrap Toasts -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        methods: {
            // Trigger a new toast
            toast(title, content, variant = null, append = false, toaster = 'b-toaster-top-right', autoHideDelay = 5000) {
                this.$bvToast.toast(content, {
                    title: title,
                    toaster: toaster,
                    variant: variant,
                    autoHideDelay: autoHideDelay,
                    appendToast: append
                })
            }
        }
    }
</script>
