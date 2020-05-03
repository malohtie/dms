<template>
    <!-- Page Content -->
    <base-background image="/images/photos/photo34@2x.jpg" inner-class="bg-black-50">
        <div class="hero-static">
            <div class="content">
                <b-row class="justify-content-center">
                    <b-col lg="6" md="8" xl="4">
                        <!-- Unlock Block -->
                        <base-block class="mb-0" header-class="bg-danger" themed title="Account Locked">
                            <template #options>
                                <router-link class="btn-block-option" to="/auth/signin"
                                             v-b-tooltip.hover.nofade.left="'Sign In with another account'">
                                    <i class="fa fa-sign-in-alt"></i>
                                </router-link>
                            </template>
                            <div class="p-sm-3 px-lg-4 py-lg-5 text-center">
                                <img alt="Avatar" class="img-avatar img-avatar96" src="/images/avatars/avatar10.jpg">
                                <p class="font-w600 my-2">
                                    user@example.com
                                </p>

                                <!-- Unlock Form -->
                                <b-form @submit.stop.prevent="onSubmit">
                                    <div class="form-group py-3">
                                        <b-form-input :state="!$v.form.password.$error && null" aria-describedby="password-feedback" class="form-control-alt" id="password"
                                                      name="password" placeholder="Password"
                                                      size="lg"
                                                      type="password"
                                                      v-model="$v.form.password.$model"></b-form-input>
                                        <b-form-invalid-feedback id="password-feedback">
                                            Please enter your password
                                        </b-form-invalid-feedback>
                                    </div>
                                    <b-row class="form-group justify-content-center">
                                        <b-col md="6" xl="5">
                                            <b-button block type="submit" variant="light">
                                                <i class="fa fa-fw fa-lock-open mr-1"></i> Unlock
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </b-form>
                                <!-- END Unlock Form -->
                            </div>
                        </base-block>
                        <!-- END Unlock Block -->
                    </b-col>
                </b-row>
            </div>
            <div class="content content-full font-size-sm text-white text-center">
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
                    password: null
                }
            }
        },
        validations: {
            form: {
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
