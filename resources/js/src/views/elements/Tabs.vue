<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Generate tabbed interfaces with ease." title="Tabs">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Tabs</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Block Tabs -->
            <h2 class="content-heading">Block Tabs</h2>
            <b-row>
                <b-col lg="6">
                    <!-- Block Tabs Default Style -->
                    <b-tabs class="block" content-class="block-content" nav-class="nav-tabs-block">
                        <b-tab active title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>...</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Default Style -->

                    <!-- Block Tabs Alternative Style -->
                    <b-tabs class="block" content-class="block-content" nav-class="nav-tabs-alt">
                        <b-tab active title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>...</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Alternative Style -->
                </b-col>
                <b-col lg="6">
                    <!-- Block Tabs Default Style (Right) -->
                    <b-tabs class="block" content-class="block-content" nav-class="nav-tabs-block justify-content-end">
                        <b-tab title-item-class="mr-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab active title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>...</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Default Style (Right) -->

                    <!-- Block Tabs Alternative Style (Right) -->
                    <b-tabs class="block" content-class="block-content" nav-class="nav-tabs-alt justify-content-end">
                        <b-tab title-item-class="mr-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>...</p>
                        </b-tab>
                        <b-tab active title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>...</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Alternative Style (Right) -->
                </b-col>
            </b-row>
            <!-- END Block Tabs -->

            <!-- Block Tabs Content Animation -->
            <h2 class="content-heading">Tabs with Animation</h2>
            <b-row>
                <b-col lg="6">
                    <!-- Block Tabs Animated Fade -->
                    <b-tabs class="block" content-class="block-content overflow-hidden" nav-class="nav-tabs-block">
                        <b-tab active title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>Content fades in..</p>
                        </b-tab>
                        <b-tab title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>Content fades in..</p>
                        </b-tab>
                        <b-tab title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>Content fades in..</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Animated Fade -->

                    <!-- Block Tabs Animated Slide Left -->
                    <b-tabs class="block" content-class="block-content overflow-hidden" nav-class="nav-tabs-block">
                        <b-tab active class="fade-left" title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>Content slides in to the left..</p>
                        </b-tab>
                        <b-tab class="fade-left" title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>Content slides in to the left..</p>
                        </b-tab>
                        <b-tab class="fade-left" title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>Content slides in to the left..</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Animated Slide Left -->
                </b-col>
                <b-col lg="6">
                    <!-- Block Tabs Animated Slide Up -->
                    <b-tabs class="block" content-class="block-content overflow-hidden" nav-class="nav-tabs-block">
                        <b-tab active class="fade-up" title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>Content slides up..</p>
                        </b-tab>
                        <b-tab class="fade-up" title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>Content slides up..</p>
                        </b-tab>
                        <b-tab class="fade-up" title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>Content slides up..</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Animated Slide Up -->

                    <!-- Block Tabs Animated Slide Right -->
                    <b-tabs class="block" content-class="block-content overflow-hidden" nav-class="nav-tabs-block">
                        <b-tab active class="fade-right" title="Home">
                            <h4 class="font-w400">Home Content</h4>
                            <p>Content slides in to the right..</p>
                        </b-tab>
                        <b-tab class="fade-right" title="Profile">
                            <h4 class="font-w400">Profile Content</h4>
                            <p>Content slides in to the right..</p>
                        </b-tab>
                        <b-tab class="fade-right" title-item-class="ml-auto">
                            <template #title>
                                <i class="si si-settings"></i>
                            </template>
                            <h4 class="font-w400">Settings Content</h4>
                            <p>Content slides in to the right..</p>
                        </b-tab>
                    </b-tabs>
                    <!-- END Block Tabs Animated Slide Right -->
                </b-col>
            </b-row>
            <!-- END Block Tabs Content Animation -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
