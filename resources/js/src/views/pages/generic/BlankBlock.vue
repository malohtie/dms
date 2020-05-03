<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="That feeling of delight when you start your awesome new project!"
                           title="Blank (Block)">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Generic</b-breadcrumb-item>
                    <b-breadcrumb-item active>Blank (Block)</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Your Block -->
            <base-block title="Block Title">
                <template #options>
                    <button class="btn-block-option" type="button">
                        <i class="si si-cog"></i>
                    </button>
                </template>
                <p>
                    Your content..
                </p>
            </base-block>
            <!-- END Your Block -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
