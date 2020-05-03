<template>
    <!-- Page Content -->
    <base-background image="images/photos/photo6@2x.jpg" inner-class="bg-white-95">
        <div class="hero-static">
            <div class="content">
                <b-row class="justify-content-center">
                    <b-col lg="6" md="8" xl="4">
                        <!-- Sign In Block -->
                        <base-block class="mb-0" fx-shadow themed title="Sign In">
                            <template #options>
                                <router-link class="btn-block-option font-size-sm" to="/auth/reminder">Forgot
                                    Password?
                                </router-link>
                                <router-link class="btn-block-option" to="/auth/signup"
                                             v-b-tooltip.hover.nofade.left="'New Account'">
                                    <i class="fa fa-user-plus"></i>
                                </router-link>
                            </template>
                            <div class="p-sm-3 px-lg-4 py-lg-5">
                                <h1 class="mb-2">dms</h1>
                                <p>Welcome, please login.</p>

                                <!-- Sign In Form -->
                                <b-form @submit.stop.prevent="onSubmit">
                                    <div class="py-3">
                                        <div class="form-group">
                                            <b-form-input :state="!$v.form.username.$error && null" aria-describedby="username-feedback" class="form-control-alt"
                                                          id="username" name="username"
                                                          placeholder="Username"
                                                          size="lg"
                                                          v-model="$v.form.username.$model"></b-form-input>
                                            <b-form-invalid-feedback id="username-feedback">
                                                Please enter your username
                                            </b-form-invalid-feedback>
                                        </div>
                                        <div class="form-group">
                                            <b-form-input :state="!$v.form.password.$error && null" aria-describedby="password-feedback" class="form-control-alt"
                                                          id="password" name="password" placeholder="Password"
                                                          size="lg"
                                                          type="password"
                                                          v-model="$v.form.password.$model"></b-form-input>
                                            <b-form-invalid-feedback id="password-feedback">
                                                Please enter your password
                                            </b-form-invalid-feedback>
                                        </div>
                                        <div class="form-group">
                                            <b-form-checkbox id="remember" name="remember">Remember Me</b-form-checkbox>
                                        </div>
                                    </div>
                                    <b-row class="form-group">
                                        <b-col md="6" xl="5">
                                            <b-button block type="submit" variant="primary">
                                                <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </b-form>
                                <!-- END Sign In Form -->
                            </div>
                        </base-block>
                        <!-- END Sign In Block -->
                    </b-col>
                </b-row>
            </div>
            <div class="content content-full font-size-sm text-muted text-center">
                <strong>{{ $store.getters.appName + ' ' + $store.getters.appVersion }}</strong> &copy; {{
                $store.getters.appCopyright }}
            </div>
        </div>
    </base-background>
    <!-- END Page Content -->
</template>

<script>
    // Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
    import {validationMixin} from 'vuelidate'
    import {minLength, required} from 'vuelidate/lib/validators'

    export default {
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    username: null,
                    password: null
                }
            }
        },
        validations: {
            form: {
                username: {
                    required,
                    minLength: minLength(3)
                },
                password: {
                    required,
                    minLength: minLength(5)
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
                this.$router.push('/backend')
            }
        }
    }
</script>
