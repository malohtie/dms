<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Multiple layouts to match any design requirement." title="Form Layouts">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
                    <b-breadcrumb-item active>Layouts</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Inline -->
            <base-block title="Inline">
                <b-row>
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            Using an inline layout can come really handy for small forms
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <!-- Form Inline - Default Style -->
                        <b-form @submit.prevent class="mb-4" inline>
                            <label class="sr-only" for="example-if-email">Email</label>
                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="example-if-email" name="example-if-email"
                                          placeholder="Email" type="email"></b-form-input>
                            <label class="sr-only" for="example-if-password">Password</label>
                            <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="example-if-password" name="example-if-password"
                                          placeholder="Password" type="password"></b-form-input>
                            <b-button type="submit" variant="primary">Login</b-button>
                        </b-form>
                        <!-- END Form Inline - Default Style -->

                        <!-- Form Inline - Alternative Style -->
                        <b-form @submit.prevent class="mb-4" inline>
                            <label class="sr-only" for="example-if-email2">Email</label>
                            <b-form-input class="form-control-alt mb-2 mr-sm-2 mb-sm-0" id="example-if-email2"
                                          name="example-if-email2" placeholder="Email"
                                          type="email"></b-form-input>
                            <label class="sr-only" for="example-if-password2">Password</label>
                            <b-form-input class="form-control-alt mb-2 mr-sm-2 mb-sm-0" id="example-if-password2"
                                          name="example-if-password2" placeholder="Password"
                                          type="password"></b-form-input>
                            <b-button type="submit" variant="dark">Login</b-button>
                        </b-form>
                        <!-- END Form Inline - Alternative Style -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Inline -->

            <!-- Labels on top -->
            <base-block title="Labels on top">
                <b-row>
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            An often used layout which is very easy to create with minimal markup
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <!-- Form Labels on top - Default Style -->
                        <b-form @submit.prevent class="mb-5">
                            <b-form-group label="Email" label-for="example-ltf-email">
                                <b-form-input id="example-ltf-email" placeholder="Your Email.."
                                              type="email"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Password" label-for="example-ltf-password">
                                <b-form-input id="example-ltf-password" placeholder="Your Password.."
                                              type="password"></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-button type="submit" variant="primary">Login</b-button>
                            </b-form-group>
                        </b-form>
                        <!-- END Form Labels on top - Default Style -->

                        <!-- Form Labels on top - Alternative Style -->
                        <b-form @submit.prevent class="mb-5">
                            <b-form-group label="Email" label-for="example-ltf-email2">
                                <b-form-input class="form-control-alt" id="example-ltf-email2" placeholder="Your Email.."
                                              type="email"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Password" label-for="example-ltf-password2">
                                <b-form-input class="form-control-alt" id="example-ltf-password2" placeholder="Your Password.."
                                              type="password"></b-form-input>
                            </b-form-group>
                            <b-form-group>
                                <b-button type="submit" variant="dark">Login</b-button>
                            </b-form-group>
                        </b-form>
                        <!-- END Form Labels on top - Alternative Style -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Labels on top -->

            <!-- Horizontal -->
            <base-block title="Horizontal">
                <b-row>
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            A horizontal layout is perfect for bigger forms
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <!-- Form Horizontal - Default Style -->
                        <b-form @submit.prevent class="mb-5">
                            <b-form-group label="Email" label-cols-sm="4" label-for="example-hf-email">
                                <b-form-input id="example-hf-email" placeholder="Your Email.."
                                              type="email"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Password" label-cols-sm="4" label-for="example-hf-password">
                                <b-form-input id="example-hf-password" placeholder="Your Password.."
                                              type="password"></b-form-input>
                            </b-form-group>
                            <div class="form-group form-row">
                                <b-col class="ml-auto" sm="8">
                                    <b-button type="submit" variant="primary">Login</b-button>
                                </b-col>
                            </div>
                        </b-form>
                        <!-- END Form Horizontal - Default Style -->

                        <!-- Form Horizontal - Alternative Style -->
                        <b-form @submit.prevent class="mb-5">
                            <b-form-group label="Email" label-cols-sm="4" label-for="example-hf-email2">
                                <b-form-input class="form-control-alt" id="example-hf-email2" placeholder="Your Email.."
                                              type="email"></b-form-input>
                            </b-form-group>
                            <b-form-group label="Password" label-cols-sm="4" label-for="example-hf-password2">
                                <b-form-input class="form-control-alt" id="example-hf-password2" placeholder="Your Password.."
                                              type="password"></b-form-input>
                            </b-form-group>
                            <div class="form-group form-row">
                                <b-col class="ml-auto" sm="8">
                                    <b-button type="submit" variant="dark">Login</b-button>
                                </b-col>
                            </div>
                        </b-form>
                        <!-- END Form Horizontal - Alternative Style -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Horizontal -->

            <!-- Grid Based -->
            <base-block title="Grid Based">
                <b-row>
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            Using the form grid you can create any input layout you could possibly imagine
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <!-- Form Grid -->
                        <b-form>
                            <div class="form-group form-row">
                                <div class="col-4">
                                    <b-form-input placeholder="col-4"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <b-form-input placeholder="col-4"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <b-form-input placeholder="col-4"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-4">
                                    <b-form-input placeholder="col-4"></b-form-input>
                                </div>
                                <div class="col-8">
                                    <b-form-input placeholder="col-8"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-5">
                                    <b-form-input placeholder="col-5"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <b-form-input placeholder="col-4"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <b-form-input placeholder="col-3"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-8">
                                    <b-form-input class="form-control-alt" placeholder="col-8"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <b-form-input class="form-control-alt" placeholder="col-4"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                                <div class="col-6">
                                    <b-form-input class="form-control-alt" placeholder="col-6"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <b-form-input class="form-control-alt" placeholder="col-3"></b-form-input>
                                </div>
                            </div>
                        </b-form>
                        <!-- END Form Grid -->
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            You could also include labels
                        </p>
                    </b-col>
                    <b-col lg="8">
                        <!-- Form Grid with Labels -->
                        <b-form @submit.prevent>
                            <div class="form-group form-row">
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                                <div class="col-8">
                                    <label>.col-8</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-5">
                                    <label>.col-5</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-8">
                                    <label>.col-8</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-4">
                                    <label>.col-4</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                            </div>
                            <div class="form-group form-row">
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-6">
                                    <label>.col-6</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                                <div class="col-3">
                                    <label>.col-3</label>
                                    <b-form-input class="form-control-alt"></b-form-input>
                                </div>
                            </div>
                        </b-form>
                        <!-- END Form Grid with Labels -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Grid Based -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
