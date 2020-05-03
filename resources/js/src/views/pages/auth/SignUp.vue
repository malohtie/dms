<template>
    <!-- Page Content -->
    <div class="hero-static">
        <div class="content">
            <b-row class="justify-content-center">
                <b-col lg="6" md="8" xl="4">
                    <!-- Sign Up Block -->
                    <base-block class="mb-0" fx-shadow header-class="bg-success" themed title="Create Account">
                        <template #options>
                            <!-- Terms Modal -->
                            <button class="btn-block-option font-size-sm" type="button" v-b-modal.one-signup-terms>View
                                Terms
                            </button>
                            <b-modal body-class="p-0" hide-footer hide-header id="one-signup-terms" size="lg">
                                <div class="block block-themed block-transparent mb-0">
                                    <div class="block-header bg-primary-dark">
                                        <h3 class="block-title">Terms &amp; Conditions</h3>
                                        <div class="block-options">
                                            <button @click="$bvModal.hide('one-signup-terms')" class="btn-block-option"
                                                    type="button">
                                                <i class="fa fa-fw fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="block-content">
                                        <p>
                                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare
                                            laoreet adipiscing luctus mauris adipiscing pretium eget fermentum,
                                            tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant
                                            quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in
                                            sit varius lorem sit metus mi.
                                        </p>
                                        <p>
                                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare
                                            laoreet adipiscing luctus mauris adipiscing pretium eget fermentum,
                                            tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant
                                            quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in
                                            sit varius lorem sit metus mi.
                                        </p>
                                        <p>
                                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare
                                            laoreet adipiscing luctus mauris adipiscing pretium eget fermentum,
                                            tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant
                                            quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in
                                            sit varius lorem sit metus mi.
                                        </p>
                                        <p>
                                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare
                                            laoreet adipiscing luctus mauris adipiscing pretium eget fermentum,
                                            tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant
                                            quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in
                                            sit varius lorem sit metus mi.
                                        </p>
                                        <p>
                                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare
                                            laoreet adipiscing luctus mauris adipiscing pretium eget fermentum,
                                            tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant
                                            quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in
                                            sit varius lorem sit metus mi.
                                        </p>
                                    </div>
                                    <div class="block-content block-content-full text-right border-top">
                                        <b-button @click="$bvModal.hide('one-signup-terms')" size="sm" variant="light">
                                            Close
                                        </b-button>
                                        <b-button @click="$bvModal.hide('one-signup-terms')" size="sm"
                                                  variant="primary">I Agree
                                        </b-button>
                                    </div>
                                </div>
                            </b-modal>
                            <!-- END Terms Modal -->

                            <router-link class="btn-block-option" to="/auth/signin"
                                         v-b-tooltip.hover.nofade.left="'Sign In'">
                                <i class="fa fa-sign-in-alt"></i>
                            </router-link>
                        </template>
                        <div class="p-sm-3 px-lg-4 py-lg-5">
                            <h1 class="mb-2">dms</h1>
                            <p>Please fill the following details to create a new account.</p>

                            <!-- Sign Up Form -->
                            <b-form @submit.stop.prevent="onSubmit">
                                <div class="py-3">
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.username.$error && null" aria-describedby="username-feedback" class="form-control-alt" id="username"
                                                      name="username" placeholder="Username"
                                                      size="lg"
                                                      v-model="$v.form.username.$model"></b-form-input>
                                        <b-form-invalid-feedback id="username-feedback">
                                            Please enter a username
                                        </b-form-invalid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.email.$error && null" aria-describedby="email-feedback" class="form-control-alt" id="email"
                                                      name="email" placeholder="Email" size="lg"
                                                      type="email"
                                                      v-model="$v.form.email.$model"></b-form-input>
                                        <b-form-invalid-feedback id="email-feedback">
                                            Please enter your email
                                        </b-form-invalid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.password.$error && null" aria-describedby="password-feedback" class="form-control-alt" id="password"
                                                      name="password" placeholder="Password"
                                                      size="lg"
                                                      type="password"
                                                      v-model="$v.form.password.$model"></b-form-input>
                                        <b-form-invalid-feedback id="password-feedback">
                                            Please provide a secure password
                                        </b-form-invalid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.password2.$error && null" aria-describedby="password2-feedback" class="form-control-alt" id="password2"
                                                      name="password2" placeholder="Confirm Password"
                                                      size="lg"
                                                      type="password"
                                                      v-model="$v.form.password2.$model"></b-form-input>
                                        <b-form-invalid-feedback id="password2-feedback">
                                            Please confirm your password
                                        </b-form-invalid-feedback>
                                    </div>
                                    <div class="form-group">
                                        <b-form-checkbox :state="!$v.form.terms.$error && null" aria-describedby="terms-feedback" id="terms"
                                                         name="terms"
                                                         v-model="$v.form.terms.$model">I agree to Terms &amp;
                                            Conditions
                                        </b-form-checkbox>
                                        <b-form-invalid-feedback :state="$v.form.terms.$dirty ? !$v.form.terms.$error : null"
                                                                 id="terms-feedback">
                                            You must agree to the service terms!
                                        </b-form-invalid-feedback>
                                    </div>
                                </div>
                                <b-row class="form-group">
                                    <b-col md="6" xl="5">
                                        <b-button block type="submit" variant="success">
                                            <i class="fa fa-fw fa-plus mr-1"></i> Sign Up
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <!-- END Sign Up Form -->
                        </div>
                    </base-block>
                    <!-- END Sign Up Block -->
                </b-col>
            </b-row>
        </div>
        <div class="content content-full font-size-sm text-muted text-center">
            <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{
            $store.getters.appCopyright }}
        </div>
    </div>
    <!-- END Page Content -->
</template>

<script>
    // Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
    import {validationMixin} from 'vuelidate'
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    username: null,
                    email: null,
                    password: null,
                    password2: null,
                    terms: null
                }
            }
        },
        validations: {
            form: {
                username: {
                    required,
                    minLength: minLength(3)
                },
                email: {
                    required,
                    email
                },
                password: {
                    required,
                    minLength: minLength(5)
                },
                password2: {
                    required,
                    sameAsPassword: sameAs('password')
                },
                terms: {
                    sameAs: sameAs(() => true)
                }
            }
        },
        methods: {
            onSubmit() {
                this.$v.form.$touch()

                if (this.$v.form.$anyError) {
                    return
                }

                // Form submit logic
                this.$router.push('/backend/pages/auth/all')
            }
        }
    }
</script>
