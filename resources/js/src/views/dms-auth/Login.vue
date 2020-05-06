<template>
    <!-- Page Content -->
    <div class="hero-static d-flex align-items-center">
        <div class="w-100">
            <!-- Sign In Section -->
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
                                    Sign In
                                </h1>
                            </div>
                            <!-- END Header -->

                            <!-- Sign In Form -->
                            <b-form @submit.stop.prevent="onSubmit">
                                <div class="py-3">
                                    <div class="form-group">
                                        <b-form-input  id="username" name="username" placeholder="Username" size="lg"
                                            :state="!$v.form.username.$error && null"
                                            aria-describedby="username-feedback"
                                            class="form-control-alt"
                                            v-model="$v.form.username.$model" />
                                    </div>
                                    <div class="form-group">
                                        <b-form-input id="password" name="password" placeholder="Password" size="lg" type="password"
                                                      :state="!$v.form.password.$error && null"
                                                      aria-describedby="password-feedback"
                                                      class="form-control-alt"
                                                      v-model="$v.form.password.$model" />
                                    </div>
                                    <div class="form-group">
                                        <div class="d-md-flex align-items-md-center justify-content-md-between">
                                            <b-form-checkbox
                                                id="remember"
                                                name="remember"
                                                switch
                                                v-model="$v.form.remember.$model">Remember Me</b-form-checkbox>
                                        </div>
                                    </div>
                                </div>
                                <b-row class="form-group row justify-content-center mb-0">
                                    <b-col md="6" xl="5">
                                        <b-button v-click-ripple block type="submit" variant="primary">
                                            <i class="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </b-form>
                            <!-- END Sign In Form -->
                        </b-col>
                    </b-row>
                </div>
            </div>
            <!-- END Sign In Section -->

            <!-- Footer -->
            <div class="font-size-sm text-center text-muted py-3">
                <strong>{{ appName + ' ' + appVersion }}</strong> &copy; {{ appCopyright }}
            </div>
            <!-- END Footer -->
        </div>
    </div>
    <!-- END Page Content -->
</template>

<script>

    import {validationMixin} from 'vuelidate'
    import {minLength, required} from 'vuelidate/lib/validators'
    import {mapGetters} from "vuex";

    export default {
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    username: null,
                    password: null,
                    remember: false
                }
            }
        },
        computed: {
            ...mapGetters([
                'appName',
                'appVersion',
                'appCopyright'
            ])
        },
        validations: {
            form: {
                username: {
                    required,
                    minLength: minLength(3)
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                remember: {

                }
            }
        },
        methods: {
            onSubmit() {
                this.$v.form.$touch()

                if (this.$v.form.$anyError) {

                    this.$swal({
                        icon: 'success',
                        title: 'Signed in successfully',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        onOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    })
                }


                console.log('ok')


            }
        }
    }
</script>
