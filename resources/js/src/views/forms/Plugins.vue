<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Carefully integrated Vue plugins that will enhance your forms with great features."
                           title="Form Plugins">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Forms</b-breadcrumb-item>
                    <b-breadcrumb-item active>Plugins</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Flatpickr Datetimepicker -->
            <base-block title="Flatpickr Datetimepicker">
                <b-form @submit.prevent>
                    <!-- Datepickers -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Datepickers</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                You can easily change the date format to match your preference
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group label="Default format" label-for="example-flatpickr-default">
                                <flat-pickr class="form-control bg-white" id="example-flatpickr-default"
                                            placeholder="Y-m-d" v-model="dateDefault"></flat-pickr>
                            </b-form-group>
                            <b-form-group label="Custom format" label-for="example-flatpickr-custom">
                                <flat-pickr :config="configCustom" class="form-control bg-white"
                                            id="example-flatpickr-custom" placeholder="d-m-Y"
                                            v-model="dateCustom"></flat-pickr>
                            </b-form-group>
                            <b-form-group label="Friendly format" label-for="example-flatpickr-friendly">
                                <flat-pickr :config="configFriendly" class="form-control bg-white"
                                            id="example-flatpickr-friendly" placeholder="F j, Y"
                                            v-model="dateFriendly"></flat-pickr>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Datepickers -->

                    <!-- Datepicker Range -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Datepicker Range</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                A date range mode is available, very useful for booking or calendar web apps
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group>
                                <flat-pickr :config="configRange" class="form-control bg-white"
                                            id="example-flatpickr-range" placeholder="Select Date Range"
                                            v-model="dateRange"></flat-pickr>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Datepicker Range -->

                    <!-- Timepickers -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Timepickers</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                You can also enable a standalone or integrated timepicker
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group label="Standalone" label-for="example-flatpickr-time-standalone">
                                <flat-pickr :config="configTimeStandalone" class="form-control bg-white"
                                            id="example-flatpickr-time-standalone" v-model="timeStandalone"></flat-pickr>
                            </b-form-group>
                            <b-form-group label="Standalone (24-hour format)"
                                          label-for="example-flatpickr-time-standalone-24">
                                <flat-pickr :config="configTimeStandalone24" class="form-control bg-white"
                                            id="example-flatpickr-time-standalone-24" v-model="timeStandalone24"></flat-pickr>
                            </b-form-group>
                            <b-form-group label="Calendar and time picker" label-for="example-flatpickr-datetime">
                                <flat-pickr :config="configDateTime" class="form-control bg-white"
                                            id="example-flatpickr-datetime" v-model="timeDateTime"></flat-pickr>
                            </b-form-group>
                            <b-form-group label="Calendar and time picker (24-hour format)"
                                          label-for="example-flatpickr-datetime24">
                                <flat-pickr :config="configDateTime24" class="form-control bg-white"
                                            id="example-flatpickr-datetime24" v-model="timeDateTime24"></flat-pickr>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Timepickers -->

                    <!-- Inline Mode -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Inline Mode</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                The plugin also supports an inline mode
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group>
                                <flat-pickr :config="configInlineDefault" class="form-control bg-white"
                                            id="example-flatpickr-inline" placeholder="Inline Datepicker"
                                            v-model="inlineDefault"></flat-pickr>
                            </b-form-group>
                            <b-form-group>
                                <flat-pickr :config="configInlineTime" class="form-control bg-white"
                                            id="example-flatpickr-inline-time" placeholder="Inline Datetimepicker"
                                            v-model="inlineTime"></flat-pickr>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Inline Mode -->
                </b-form>
            </base-block>
            <!-- END Flatpickr Datetimepicker -->

            <!-- Vue Color -->
            <base-block title="Vue Color">
                <b-form @submit.prevent>
                    <!-- Colorpickers -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Colorpickers</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Chrome variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <chrome-picker v-model="vColors"></chrome-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Photoshop variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <div class="overflow-auto">
                                    <photoshop-picker v-model="vColors"></photoshop-picker>
                                </div>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Sketch variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <sketch-picker v-model="vColors"></sketch-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Slider variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <slider-picker style="width: 260px;" v-model="vColors"></slider-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Swatches variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <swatches-picker v-model="vColors"></swatches-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Material variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <material-picker v-model="vColors"></material-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Compact variation
                            </p>
                        </b-col>
                        <b-col lg="8">
                            <b-form-group>
                                <compact-picker v-model="vColors"></compact-picker>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Colorpickers -->
                </b-form>
            </base-block>
            <!-- END Vue Color -->

            <!-- Custom Input Maxlength -->
            <base-block title="Custom Input Maxlength">
                <b-form @submit.prevent>
                    <!-- Examples -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                You can easily set a max character length with live feedback to your inputs
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group label="Input Group" label-for="example-maxlength-group">
                                <b-input-group>
                                    <b-form-input :maxlength="customMaxLength" id="example-maxlength-group"
                                                  v-model="customMaxLengthValue"></b-form-input>
                                    <template #append>
                                        <b-input-group-text
                                            v-text="(customMaxLength - customMaxLengthValue.length)"></b-input-group-text>
                                    </template>
                                </b-input-group>
                            </b-form-group>
                            <b-form-group label="Visible feedback" label-for="example-maxlength-feedback-visible">
                                <b-form-input :maxlength="customMaxLength2" id="example-maxlength-feedback-visible"
                                              v-model="customMaxLengthValue2"></b-form-input>
                                <p class="text-danger font-size-sm bg-danger-light rounded p-2 mt-2 mb-0">
                                    {{ customMaxLength2 - customMaxLengthValue2.length }} characters left
                                </p>
                            </b-form-group>
                            <b-form-group label="Fade in feedback" label-for="example-maxlength-feedback-fadein">
                                <b-form-input :maxlength="customMaxLength3" id="example-maxlength-feedback-fadein"
                                              v-model="customMaxLengthValue3"></b-form-input>
                                <p class="animated fadeInDown font-size-sm text-muted mt-2 mb-0"
                                   v-if="(customMaxLength3 - customMaxLengthValue3.length) < customMaxLength3">
                                    {{ customMaxLength3 - customMaxLengthValue3.length }} characters left
                                </p>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Examples -->
                </b-form>
            </base-block>
            <!-- END Custom Input Maxlength -->

            <!-- Vue Select -->
            <base-block title="Vue Select">
                <b-form @submit.prevent>
                    <!-- Normal Select Box -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Normal Select Box</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Default select input turns into a dynamic list
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group>
                                <v-select :options="vSelectOptionsMultiple" placeholder="Choose a value.."
                                          v-model="vSelectOptionsSelected"></v-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Normal Select Box -->

                    <!-- Multiple Select Box -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Multiple Select Box</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                Default multiple select input turns into a tags input
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group>
                                <v-select :options="vSelectOptionsMultiple" multiple
                                          placeholder="Choose multiple values.."
                                          v-model="vSelectOptionsMultipleSelected"></v-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Multiple Select Box -->
                </b-form>
            </base-block>
            <!-- END Vue Select -->

            <!-- Vue Masked Input -->
            <base-block title="Vue Masked Input">
                <b-form @submit.prevent>
                    <!-- Examples -->
                    <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
                    <b-row>
                        <b-col lg="4">
                            <p class="font-size-sm text-muted">
                                It enables to easily enter a value following a specific format by adding a mask
                            </p>
                            <p class="font-size-sm text-muted">
                                1 – number<br>
                                a – letter<br>
                                A – letter, forced to upper case when entered<br>
                                * – alphanumeric<br>
                                # – alphanumeric, forced to upper case when entered<br>
                                + – any character
                            </p>
                        </b-col>
                        <b-col lg="8" xl="4">
                            <b-form-group>
                                <label for="example-masked-date1">Date (dd/mm/yyyy)</label>
                                <masked-input class="form-control" id="example-masked-date1" mask="11/11/1111"
                                              placeholder="11/11/1111"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-date2">Date (dd-mm-yyyy)</label>
                                <masked-input class="form-control" id="example-masked-date2" mask="11-11-1111"
                                              placeholder="11-11-1111"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-phone">Phone</label>
                                <masked-input class="form-control" id="example-masked-phone"
                                              mask="\+\1 (111) 1111-11" placeholder="+1 (000) 0000-00"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-taxid">Tax ID</label>
                                <masked-input class="form-control" id="example-masked-taxid" mask="11-1111111"
                                              placeholder="11-1111111"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-ssn">SSN</label>
                                <masked-input class="form-control" id="example-masked-ssn" mask="111-11-1111"
                                              placeholder="111-11-1111"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-pkey">Product Key</label>
                                <masked-input class="form-control" id="example-masked-pkey" mask="a*-111-a111"
                                              placeholder="a*-111-a111"></masked-input>
                            </b-form-group>
                            <b-form-group>
                                <label for="example-masked-time">Time Format</label>
                                <masked-input class="form-control" id="example-masked-time" mask="11:11"
                                              placeholder="11:11"></masked-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <!-- END Examples -->
                </b-form>
            </base-block>
            <!-- END Vue Masked Input -->

            <!-- Vue Slider -->
            <base-block title="Vue Slider">
                <!-- Example -->
                <h2 class="content-heading border-bottom mb-4 pb-2">Examples</h2>
                <b-row class="items-push push">
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            A highly customized slider component
                        </p>
                    </b-col>
                    <b-col lg="8" xl="6">
                        <b-form-group>
                            <label>Normal</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :marks="[0, 100]" tooltip="always"
                                            v-model="sliderValueNormal"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>MinMax</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :marks="[0, 1000]" :max="1000" :min="0"
                                            tooltip="always" v-model="sliderValueMinMax"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>Marks</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :marks="[0, 250, 500, 750, 1000]" :max="1000"
                                            :min="0" tooltip="always" v-model="sliderValueMarks"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>Double</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :marks="[0, 250, 500, 750, 1000]" :max="1000"
                                            :min="0" tooltip="always" v-model="sliderValueDouble"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>Negative</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :marks="[-500, -250, 0, 250, 500]"
                                            :max="500" :min="-500" tooltip="always"
                                            v-model="sliderValueNegative"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>Step (50)</label>
                            <div class="py-4">
                                <vue-slider :dotSize="18" :interval="50" :marks="[-500, -250, 0, 250, 500]"
                                            :max="500" :min="-500" tooltip="always" v-model="sliderValueStep"></vue-slider>
                            </div>
                        </b-form-group>
                        <b-form-group>
                            <label>Custom Data</label>
                            <div class="py-4">
                                <vue-slider :data="sliderDataCustom" :dotSize="18" :marks="true"
                                            tooltip="always" v-model="sliderValueCustom"></vue-slider>
                            </div>
                        </b-form-group>
                    </b-col>
                </b-row>
                <!-- END Example -->
            </base-block>
            <!-- END Vue Slider -->

            <!-- Vue Dropzone -->
            <base-block title="Vue Dropzone">
                <!-- Example -->
                <h2 class="content-heading border-bottom mb-4 pb-2">Asynchronous File Uploads</h2>
                <b-row class="push">
                    <b-col lg="4">
                        <p class="font-size-sm text-muted">
                            Drag and drop sections for your file uploads
                        </p>
                    </b-col>
                    <b-col lg="8" xl="6">
                        <vue-dropzone :options="dropzoneOptions" id="dropzone" ref="myVueDropzone"></vue-dropzone>
                    </b-col>
                </b-row>
                <!-- END Example -->
            </base-block>
            <!-- END Vue Dropzone -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<style lang="scss">
    // Flatpickr + Custom overrides
    @import '~flatpickr/dist/flatpickr.css';
    @import '~@sass/vendor/flatpickr';

    // Vue Color Custom overrides
    @import '~@sass/vendor/vue-color';

    // Vue Select + Custom overrides
    @import '~vue-select/src/scss/vue-select';
    @import '~@sass/vendor/vue-select';

    // Vue Slider + Custom overrides
    @import '~vue-slider-component/theme/default.css';
    @import '~@sass/vendor/vue-slider';

    // Vue2 Dropzone + Custom overrides
    @import '~vue2-dropzone/dist/vue2Dropzone.min.css';
    @import '~@sass/vendor/dropzone';
</style>

<script>
    // Flatpickr, for more info and examples you can check out https://github.com/ankurk91/vue-flatpickr-component
    import flatPickr from 'vue-flatpickr-component'
    // Vue Color, for more info and examples you can check out https://github.com/xiaokaike/vue-color
    import VueColor from 'vue-color'
    // Vue Select, for more info and examples you can check out https://github.com/sagalbot/vue-select
    import VueSelect from 'vue-select'
    // Vue Masked Input, for more info and examples you can check out https://www.npmjs.com/package/vue-masked-input
    import MaskedInput from 'vue-masked-input'
    // Vue Slider, for more info and examples you can check out https://github.com/NightCatSama/vue-slider-component
    import VueSlider from 'vue-slider-component'
    // Vue2 Dropzone, for more info and examples you can check out https://github.com/rowanwins/vue-dropzone
    import vue2Dropzone from 'vue2-dropzone'

    export default {
        components: {
            flatPickr,
            'material-picker': VueColor.Material,
            'compact-picker': VueColor.Compact,
            'swatches-picker': VueColor.Swatches,
            'slider-picker': VueColor.Slider,
            'sketch-picker': VueColor.Sketch,
            'chrome-picker': VueColor.Chrome,
            'photoshop-picker': VueColor.Photoshop,
            'v-select': VueSelect,
            MaskedInput,
            'VueSlider': VueSlider,
            'vueDropzone': vue2Dropzone
        },
        data() {
            return {
                // Flatpickr initial values
                dateDefault: null,
                dateCustom: null,
                dateFriendly: null,
                dateRange: null,
                timeStandalone: null,
                timeStandalone24: null,
                timeDateTime: null,
                timeDateTime24: null,
                inlineDefault: null,
                inlineTime: null,

                // Flatpickr configuration, get more form https://chmln.github.io/flatpickr/options/
                configCustom: {dateFormat: 'd-m-Y'},
                configFriendly: {dateFormat: 'F j, Y'},
                configRange: {mode: 'range', minDate: 'today'},
                configTimeStandalone: {enableTime: true, noCalendar: true, dateFormat: 'H:i'},
                configTimeStandalone24: {enableTime: true, noCalendar: true, dateFormat: 'H:i', time_24hr: true},
                configDateTime: {enableTime: true},
                configDateTime24: {enableTime: true, time_24hr: true},
                configInlineDefault: {inline: true},
                configInlineTime: {inline: true, enableTime: true},

                // Vue color initial values
                vColors: '#5c80d1',

                // Custom Input Maxlength
                customMaxLength: 20,
                customMaxLengthValue: '',
                customMaxLength2: 30,
                customMaxLengthValue2: '',
                customMaxLength3: 40,
                customMaxLengthValue3: '',

                // Vue Select initial values
                vSelectOptions: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
                vSelectOptionsSelected: null,
                vSelectOptionsMultiple: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Ruby', 'Angular', 'React', 'Vue.js'],
                vSelectOptionsMultipleSelected: null,

                // Vue Slider
                sliderValueNormal: 50,
                sliderValueMinMax: 212,
                sliderValueMarks: 1000,
                sliderValueDouble: [200, 800],
                sliderValueNegative: [-150, 150],
                sliderValueStep: [-250, 250],
                sliderValueCustom: 'Three',
                sliderDataCustom: ['One', 'Two', 'Three', 'Four'],

                // Vue2 Dropzone
                dropzoneOptions: {
                    url: 'https://httpbin.org/post',
                    thumbnailWidth: 150,
                    maxFilesize: 1,
                    headers: {"My-Awesome-Header": "header value"}
                }
            }
        }
    }
</script>
