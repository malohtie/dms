<template>
    <!-- Page Content -->
    <div class="hero-static d-flex align-items-center">
        <div class="w-100">
            <!-- Sign Up Section -->
            <div class="bg-white">
                <div class="content content-full">
                    <b-row class="justify-content-center">
                        <b-col class="py-4" lg="6" md="8" xl="4">
                            <!-- Header -->
                            <div class="text-center">
                                <p class="mb-2">
                                    <i class="fa fa-2x fa-circle-notch text-primary"></i>
                                </p>
                                <h1 class="h4  mb-1">
                                    Create Account
                                </h1>
                                <h2 class="h6 font-w400 text-muted mb-3">
                                    Get your access today in one easy step
                                </h2>
                            </div>
                            <!-- END Header -->

                            <!-- Sign Up Form -->
                            <b-form @submit.stop.prevent="onSubmit">
                                <div class="py-3">
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.username.$error && null" aria-describedby="username-feedback" class="form-control-alt" id="username"
                                                      name="username" placeholder="Username"
                                                      size="lg"
                                                      v-model="$v.form.username.$model"></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.email.$error && null" aria-describedby="email-feedback" class="form-control-alt" id="email"
                                                      name="email" placeholder="Email" size="lg"
                                                      type="email"
                                                      v-model="$v.form.email.$model"></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.password.$error && null" aria-describedby="password-feedback" class="form-control-alt" id="password"
                                                      name="password" placeholder="Password"
                                                      size="lg"
                                                      type="password"
                                                      v-model="$v.form.password.$model"></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <b-form-input :state="!$v.form.password2.$error && null" aria-describedby="password2-feedback" class="form-control-alt" id="password2"
                                                      name="password2" placeholder="Confirm Password"
                                                      size="lg"
                                                      type="password"
                                                      v-model="$v.form.password2.$model"></b-form-input>
                                    </div>
                                    <div class="form-group">
                                        <div class="d-md-flex align-items-md-center justify-content-md-between">
                                            <div>
                                                <b-form-checkbox :state="!$v.form.terms.$error && null" aria-describedby="terms-feedback" id="terms"
                                                                 name="terms"
                                                                 v-model="$v.form.terms.$model">I agree to Terms
                                                    &amp; Conditions
                                                </b-form-checkbox>
                                            </div>
                                            <div class="py-2">
                                                <!-- Terms Modal -->
                                                <b-button class="font-size-sm p-0" v-b-modal.one-signup-terms
                                                          variant="link">View Terms
                                                </b-button>
                                                <b-modal body-class="p-0" hide-footer hide-header id="one-signup-terms"
                                                         size="lg">
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
                                                                Dolor posuere proin blandit accumsan senectus netus
                                                                nullam curae, ornare laoreet adipiscing luctus mauris
                                                                adipiscing pretium eget fermentum, tristique lobortis
                                                                est ut metus lobortis tortor tincidunt himenaeos
                                                                habitant quis dictumst proin odio sagittis purus mi, nec
                                                                taciti vestibulum quis in sit varius lorem sit metus mi.
                                                            </p>
                                                            <p>
                                                                Dolor posuere proin blandit accumsan senectus netus
                                                                nullam curae, ornare laoreet adipiscing luctus mauris
                                                                adipiscing pretium eget fermentum, tristique lobortis
                                                                est ut metus lobortis tortor tincidunt himenaeos
                                                                habitant quis dictumst proin odio sagittis purus mi, nec
                                                                taciti vestibulum quis in sit varius lorem sit metus mi.
                                                            </p>
                                                            <p>
                                                                Dolor posuere proin blandit accumsan senectus netus
                                                                nullam curae, ornare laoreet adipiscing luctus mauris
                                                                adipiscing pretium eget fermentum, tristique lobortis
                                                                est ut metus lobortis tortor tincidunt himenaeos
                                                                habitant quis dictumst proin odio sagittis purus mi, nec
                                                                taciti vestibulum quis in sit varius lorem sit metus mi.
                                                            </p>
                                                            <p>
                                                                Dolor posuere proin blandit accumsan senectus netus
                                                                nullam curae, ornare laoreet adipiscing luctus mauris
                                                                adipiscing pretium eget fermentum, tristique lobortis
                                                                est ut metus lobortis tortor tincidunt himenaeos
                                                                habitant quis dictumst proin odio sagittis purus mi, nec
                                                                taciti vestibulum quis in sit varius lorem sit metus mi.
                                                            </p>
                                                            <p>
                                                                Dolor posuere proin blandit accumsan senectus netus
                                                                nullam curae, ornare laoreet adipiscing luctus mauris
                                                                adipiscing pretium eget fermentum, tristique lobortis
                                                                est ut metus lobortis tortor tincidunt himenaeos
                                                                habitant quis dictumst proin odio sagittis purus mi, nec
                                                                taciti vestibulum quis in sit varius lorem sit metus mi.
                                                            </p>
                                                        </div>
                                                        <div
                                                            class="block-content block-content-full text-right border-top">
                                                            <b-button @click="$bvModal.hide('one-signup-terms')" size="sm"
                                                                      variant="light">Close
                                                            </b-button>
                                                            <b-button @click="$bvModal.hide('one-signup-terms')" size="sm"
                                                                      variant="primary">I Agree
                                                            </b-button>
                                                        </div>
                                                    </div>
                                                </b-modal>
                                                <!-- END Terms Modal -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <b-row class="form-group row justify-content-center mb-0">
                                    <b-col md="6" xl="5">
                                        <b-button block type="submit" variant="success">
                                            <i class="fa fa-fw fa-plus mr-1"></i> Sign Up
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <!-- END Sign Up Form -->
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- END Sign Up Section -->

            <!-- Footer -->
            <div class="font-size-sm text-center text-muted py-3">
                <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{
                $store.getters.appCopyright }}
            </div>
            <!-- END Footer -->
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
