<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Easily integrated in your blocks." title="Block Forms">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
                    <b-breadcrumb-item active>Forms</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Form Submission in Options -->
            <b-row>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="secondary">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form1-username">
                                        <b-form-input class="form-control-alt" id="block-form1-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form1-password">
                                        <b-form-input class="form-control-alt" id="block-form1-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form1-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg header-rtl title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="secondary">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form2-username">
                                        <b-form-input class="form-control-alt" id="block-form2-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form2-password">
                                        <b-form-input class="form-control-alt" id="block-form2-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form2-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="outline-primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="outline-danger">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form3-username">
                                        <b-form-input class="form-control-alt" id="block-form3-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form3-password">
                                        <b-form-input class="form-control-alt" id="block-form3-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form3-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg header-rtl title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="outline-primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="outline-danger">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form4-username">
                                        <b-form-input class="form-control-alt" id="block-form4-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form4-password">
                                        <b-form-input class="form-control-alt" id="block-form4-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form4-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg title="Block Form">
                            <template #options>
                                <button class="btn-block-option" type="submit">
                                    Submit
                                </button>
                                <button class="btn-block-option" type="reset">
                                    Reset
                                </button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form5-username">
                                        <b-form-input class="form-control-alt" id="block-form5-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form5-password">
                                        <b-form-input class="form-control-alt" id="block-form5-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form5-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg header-rtl title="Block Form">
                            <template #options>
                                <button class="btn-block-option" type="submit">
                                    Submit
                                </button>
                                <button class="btn-block-option" type="reset">
                                    Reset
                                </button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form6-username">
                                        <b-form-input class="form-control-alt" id="block-form6-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form6-password">
                                        <b-form-input class="form-control-alt" id="block-form6-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form6-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="alt-primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="alt-danger">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form7-username">
                                        <b-form-input class="form-control-alt" id="block-form7-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form7-password">
                                        <b-form-input class="form-control-alt" id="block-form7-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form7-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
                <b-col md="6">
                    <b-form @reset="onReset" @submit="onSubmit">
                        <base-block header-bg header-rtl title="Block Form">
                            <template #options>
                                <b-button size="sm" type="submit" variant="alt-primary">
                                    Submit
                                </b-button>
                                <b-button size="sm" type="reset" variant="alt-danger">
                                    Reset
                                </b-button>
                            </template>
                            <b-row class="justify-content-center py-sm-3 py-md-5">
                                <b-col md="8" sm="10">
                                    <b-form-group label="Username" label-for="block-form8-username">
                                        <b-form-input class="form-control-alt" id="block-form8-username"
                                                      placeholder="Enter your username.."
                                                      v-model="form.username"></b-form-input>
                                    </b-form-group>
                                    <b-form-group label="Password" label-for="block-form8-password">
                                        <b-form-input class="form-control-alt" id="block-form8-password"
                                                      placeholder="Enter your password.." type="password"
                                                      v-model="form.password"></b-form-input>
                                    </b-form-group>
                                    <b-form-group>
                                        <b-form-checkbox id="block-form8-remember-me" v-model="form.rememberMe">
                                            Remember Me?
                                        </b-form-checkbox>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </base-block>
                    </b-form>
                </b-col>
            </b-row>
            <!-- END Form Submission in Options -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    rememberMe: false
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()

                // Alert with form input values
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault()

                // Reset our form values
                this.form.username = ''
                this.form.password = ''
                this.form.rememberMe = false
            }
        }
    }
</script>
