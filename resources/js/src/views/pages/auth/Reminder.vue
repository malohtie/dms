<template>
    <!-- Page Content -->
    <base-background image="images/photos/photo6@2x.jpg" inner-class="bg-white-95">
        <div class="hero-static">
            <div class="content">
                <b-row class="justify-content-center">
                    <b-col lg="6" md="8" xl="4">
                        <!-- Reminder Block -->
                        <base-block class="mb-0" fx-shadow themed title="Password Reminder">
                            <template #options>
                                <router-link class="btn-block-option" to="/auth/signin"
                                             v-b-tooltip.hover.nofade.left="'Sign In'">
                                    <i class="fa fa-sign-in-alt"></i>
                                </router-link>
                            </template>
                            <div class="p-sm-3 px-lg-4 py-lg-5">
                                <h1 class="mb-2">dms</h1>
                                <p>Please provide your account’s email and we will send you your password.</p>

                                <!-- Reminder Form -->
                                <b-form @submit.stop.prevent="onSubmit">
                                    <div class="form-group py-3">
                                        <b-form-input :state="!$v.form.reminder.$error && null" aria-describedby="reminder-feedback" class="form-control-alt" id="reminder"
                                                      name="reminder" placeholder="Username or Email"
                                                      size="lg"
                                                      v-model="$v.form.reminder.$model"></b-form-input>
                                        <b-form-invalid-feedback id="reminder-feedback">
                                            Please enter your username or email
                                        </b-form-invalid-feedback>
                                    </div>
                                    <b-row class="form-group">
                                        <b-col md="6" xl="5">
                                            <b-button block type="submit" variant="primary">
                                                <i class="fa fa-fw fa-envelope mr-1"></i> Send Mail
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </b-form>
                                <!-- END Reminder Form -->
                            </div>
                        </base-block>
                        <!-- END Reminder Block -->
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
                    reminder: null
                }
            }
        },
        validations: {
            form: {
                reminder: {
                    required,
                    minLength: minLength(3)
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
