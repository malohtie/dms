<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Solid foundation and integral part of the design." title="Blocks">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
                    <b-breadcrumb-item active>Styles</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Square Blocks -->
            <h2 class="content-heading">Square Blocks</h2>
            <b-row>
                <b-col md="6" xl="3">
                    <base-block subtitle="Subtitle" title="Title">
                        <p>
                            Simple block..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block header-bg subtitle="Subtitle" title="Title">
                        <p>
                            With header background..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block bordered subtitle="Subtitle" title="Title">
                        <p>
                            Bordered block..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block bordered header-bg subtitle="Subtitle" title="Title">
                        <p>
                            Bordered block with header background..
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Square Blocks -->

            <!-- Rounded Blocks -->
            <h2 class="content-heading">Rounded Blocks</h2>
            <b-row>
                <b-col md="6" xl="3">
                    <base-block rounded subtitle="Subtitle" title="Title">
                        <p>
                            Simple block..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block header-bg rounded subtitle="Subtitle" title="Title">
                        <p>
                            With header background..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block bordered rounded subtitle="Subtitle" title="Title">
                        <p>
                            Bordered block..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block bordered header-bg rounded subtitle="Subtitle" title="Title">
                        <p>
                            Bordered block with header background..
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Rounded Blocks -->

            <!-- Transparent Blocks -->
            <h2 class="content-heading">Transparent Blocks</h2>
            <b-row>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title" transparent>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block subtitle="Subtitle" title="Title" transparent>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Transparent Blocks -->

            <!-- Block Effects -->
            <h2 class="content-heading">Block Effects</h2>
            <b-row>
                <b-col md="6" xl="3">
                    <base-block fx-shadow subtitle="FX" title="Shadow">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block fx-pop subtitle="FX" title="Pop">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block fx-rotate-right subtitle="FX" title="Rotate Right">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block fx-rotate-left subtitle="FX" title="Rotate Left">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Block Effects -->

            <!-- Link Blocks -->
            <h2 class="content-heading">Link Blocks</h2>
            <b-row>
                <b-col md="6" xl="3">
                    <base-block href="javascript:void(0)" subtitle="Subtitle" tag="a" title="Title">
                        <p>
                            Default opacity hover effect..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block href="javascript:void(0)" link-rotate subtitle="Subtitle" tag="a" title="Title">
                        <p>
                            Rotate hover effect..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block href="javascript:void(0)" link-pop subtitle="Subtitle" tag="a" title="Title">
                        <p>
                            Pop hover effect..
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6" xl="3">
                    <base-block href="javascript:void(0)" link-shadow subtitle="Subtitle" tag="a" title="Title">
                        <p>
                            Shadow hover effect..
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Link Blocks -->

            <!-- Router Link Blocks -->
            <h2 class="content-heading">Router Link Blocks</h2>
            <b-row>
                <b-col md="6" xl="3">
                    <router-link to="/backend/dashboard" v-slot="{ href, navigate }">
                        <base-block :href="href" @click="navigate" tag="a" title="Dashboard">
                            <p>
                                Go to Dashboard
                            </p>
                        </base-block>
                    </router-link>
                </b-col>
                <b-col md="6" xl="3">
                    <router-link to="/" v-slot="{ href, navigate }">
                        <base-block :href="href" @click="navigate" tag="a" title="Landing">
                            <p>
                                Go to Landing
                            </p>
                        </base-block>
                    </router-link>
                </b-col>
                <b-col md="6" xl="3">
                    <router-link to="/auth/signin" v-slot="{ href, navigate }">
                        <base-block :href="href" @click="navigate" subtitle="Auth" tag="a" title="Sign In">
                            <p>
                                Go to Sign In Page
                            </p>
                        </base-block>
                    </router-link>
                </b-col>
                <b-col md="6" xl="3">
                    <router-link to="/auth/signup" v-slot="{ href, navigate }">
                        <base-block :href="href" @click="navigate" subtitle="Auth" tag="a" title="Sign Up">
                            <p>
                                Go to Sign Up Page
                            </p>
                        </base-block>
                    </router-link>
                </b-col>
            </b-row>
            <!-- END Router Link Blocks -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
