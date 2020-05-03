<template>
    <!-- Page Content -->
    <div class="hero-static d-flex align-items-center">
        <div class="w-100">
            <!-- Reminder Section -->
            <div class="bg-white">
                <div class="content content-full">
                    <b-row class="justify-content-center">
                        <b-col class="py-4" lg="6" md="8" xl="4">
                            <!-- Header -->
                            <div class="text-center">
                                <p class="mb-2">
                                    <i class="fa fa-2x fa-circle-notch text-primary"></i>
                                </p>
                                <h1 class="h4 mb-1">
                                    Password Reminder
                                </h1>
                                <h2 class="h6 font-w400 text-muted mb-3">
                                    Please provide your account’s email and we will send you your password.
                                </h2>
                            </div>
                            <!-- END Header -->

                            <!-- Reminder Form -->
                            <b-form @submit.stop.prevent="onSubmit">
                                <div class="form-group py-3">
                                    <b-form-input :state="!$v.form.reminder.$error && null" aria-describedby="reminder-feedback" class="form-control-alt" id="reminder"
                                                  name="reminder" placeholder="Username or Email"
                                                  size="lg"
                                                  v-model="$v.form.reminder.$model"></b-form-input>
                                </div>
                                <b-row class="form-group justify-content-center">
                                    <b-col md="6" xl="5">
                                        <b-button block type="submit" variant="primary">
                                            <i class="fa fa-fw fa-envelope mr-1"></i> Send Mail
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <!-- END Reminder Form -->

                            <div class="text-center">
                                <router-link class="font-size-sm" to="/auth/signin2">Login?</router-link>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- END Reminder Section -->

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
