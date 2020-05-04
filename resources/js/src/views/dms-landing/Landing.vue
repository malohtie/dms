<template>
    <div>
        <!-- Info -->
        <div class="hero bg-white overflow-hidden">
            <div class="hero-inner align-self-stretch d-flex flex-column">
                <div class="pt-5 pb-3 text-center">
                    <i class="fa fa-2x fa-circle-notch text-primary"></i>
                </div>
                <div class="content content-full flex-fill d-flex align-items-center px-0 px-md-4 px-lg-6 px-xl-8 overflow-hidden">
                    <b-row class="w-100">
                        <b-col class="text-center d-flex" lg="12">
                            <div class="w-100">
                                <h1 class="display-4 font-w700 mb-3">
                                    {{ appName }} <span class="font-w300">Email Marketing Tool</span>
                                </h1>
                                <p class="font-size-lg text-muted mb-3">
                                    Become the brand you want to be with smarter marketing built for big things.
                                </p>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
            <div class="hero-meta">
                <div class="animated slideInDown infinite">
                    <i class="fa fa-chevron-down text-black-50"></i>
                </div>
            </div>
        </div>
        <!-- END Info -->
        <!-- Services Features -->
        <div class="bg-body-light">
            <div class="content content-full content-boxed">
                <div class="py-5 text-center">
                    <h2 class="h1 font-w700 mb-3 text-center">
                        Our Services
                    </h2>
                    <p class="font-size-lg text-muted mb-6 text-center mx-sm-6 mx-lg-10">
                        Comes packed with great features
                    </p>
                    <b-row class="row-deck">
                        <b-col md="4" sm="6">
                            <!-- Email Marketing -->
                            <base-block content-full fx-pop rounded>
                                <div class="item item-rounded bg-amethyst-lighter mx-auto my-4">
                                    <i class="fa fa-2x fa-envelope text-amethyst"></i>
                                </div>
                                <h4 class="mb-2">Email Marketing</h4>
                            </base-block>
                            <!-- END Email Marketing -->
                        </b-col>
                        <b-col md="4" sm="6">
                            <!-- Solution web -->
                            <base-block content-full fx-pop rounded>
                                <div class="item item-rounded bg-danger-light mx-auto my-4">
                                    <i class="fa fa-2x fa-globe text-danger"></i>
                                </div>
                                <h4 class="mb-2">Solution Web</h4>
                            </base-block>
                            <!-- END Solution web -->
                        </b-col>
                        <b-col md="4" sm="6">
                            <!-- Web development -->
                            <base-block content-full fx-pop rounded>
                                <div class="item item-rounded bg-flat-lighter mx-auto my-4">
                                    <i class="fab fa-2x fa-dev text-flat"></i>
                                </div>
                                <h4 class="mb-2">Web Development</h4>
                            </base-block>
                            <!-- END Web development -->
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
        <!-- END Services Features -->
        <!-- Contact Us -->
        <div class="bg-white">
            <div class="content content-full content-boxed">
                <div class="py-2">
                    <h2 class="h1 text-center font-w700 mb-3">
                        Contact Us
                    </h2>

                    <b-form-group label-for="name" label="Your Name:">
                        <b-form-input id="name" name="name" placeholder="Write Your Name"
                                      v-model="$v.form.name.$model"
                                      :state="$v.form.name.$dirty ? !$v.form.name.$error : null"
                                      aria-describedby="name-feedback"></b-form-input>
                        <b-form-invalid-feedback id="name-feedback">
                            Please enter your name!
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label-for="email" label="Your Email:">
                        <b-form-input id="email" name="email" type="email" placeholder="Write Your Email"
                                      v-model="$v.form.email.$model"
                                      :state="$v.form.email.$dirty ? !$v.form.email.$error : null"
                                      aria-describedby="email-feedback"></b-form-input>
                        <b-form-invalid-feedback id="email-feedback">
                            Please enter valid email address!
                        </b-form-invalid-feedback>
                    </b-form-group>

                    <b-form-group label-for="message"  label="Your Message:">
                        <b-form-textarea id="message" name="message" rows="5" placeholder="Write Your Message"
                                         v-model="$v.form.message.$model"
                                         :state="$v.form.message.$dirty ? !$v.form.message.$error : null"
                                         aria-describedby="message-feedback">

                        </b-form-textarea>
                        <b-form-invalid-feedback id="message-feedback">
                            Your message must consist of at least 3 characters
                        </b-form-invalid-feedback>
                    </b-form-group>
                    <div class="d-flex justify-content-center">
                        <b-button :disabled="$v.$invalid" class="px-4 py-2 mt-2 w-50" v-click-ripple variant="alt-success" @click="send">
                            <i class="far fa-paper-plane mr-1"></i> Send
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- END Contact Us -->
        <!-- Footer -->
        <footer class="bg-body-light">
            <div class="content content-boxed py-2">
                <b-row class="font-size-sm">
                    <b-col class="py-1 text-center text-sm-right" order-sm="2" sm="6">
                        Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600" :href="appAuthorLink" target="_blank">{{ appAuthor }}</a>
                    </b-col>
                    <b-col class="py-1 text-center text-sm-left" order-sm="1" sm="6">
                        <a class="font-w600" href="#">{{ appName + ' ' + appVersion }}</a> &copy; {{ appCopyright }}
                    </b-col>
                </b-row>
            </div>
        </footer>
        <!-- END Footer -->
    </div>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required, minLength, email } from 'vuelidate/lib/validators'
    import { mapGetters } from 'vuex'

    export default {
        name: "Landing",
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    message: '',
                }
            }
        },
        computed: {
            ...mapGetters([
               'appName',
               'appVersion',
               'appCopyright',
               'appAuthorLink',
               'appAuthor',
            ])
        },
        validations: {
            form : {
                name: {
                    required,
                },
                email: {
                    required,
                    email
                },
                message: {
                    required,
                    minLength: minLength(3)
                }
            }
        },
        methods: {
            send() {
                console.log('OK, YES');
            }
        }
    }
</script>
