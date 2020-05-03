<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Adding rating functionality to your pages has never been easier." title="Rating">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
                    <b-breadcrumb-item active>Rating</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <base-block title="Vue Star Rating">
                <b-row class="items-push-2x">
                    <!-- Simple -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Simple</h4>
                        <p class="font-size-sm text-muted mb-2">
                            Setting up rating is just a component away <span v-if="starRatingSimple">({{ starRatingSimple }})</span>
                        </p>
                        <star-rating :show-rating="false" :star-size="24" v-model="starRatingSimple"></star-rating>
                    </b-col>
                    <!-- END Simple -->

                    <!-- Predefined Score -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Predefined Score</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can easily set a default score <span v-if="starRatingPredefined">({{ starRatingPredefined }})</span>
                        </p>
                        <star-rating :show-rating="false" :star-size="24" v-model="starRatingPredefined"></star-rating>
                    </b-col>
                    <!-- END Predefined Score -->

                    <!-- More Stars -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">More Stars</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can easily set the number of stars <span
                            v-if="starRatingMore">({{ starRatingMore }})</span>
                        </p>
                        <star-rating :max-rating="10" :show-rating="false" :star-size="24"
                                     v-model="starRatingMore"></star-rating>
                    </b-col>
                    <!-- END More Stars -->

                    <!-- Reset Button -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Reset Button</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can also add a reset button to your rating <span v-if="starRatingReset">({{ starRatingReset }})</span>
                        </p>
                        <div class="d-flex align-items-center">
                            <b-button @click="starRatingReset = 0" class="btn-rounded mt-1 mr-2" size="sm"
                                      variant="alt-danger">
                                <i class="fa fa-times-circle"></i>
                            </b-button>
                            <star-rating :show-rating="false" :star-size="24" v-model="starRatingReset"></star-rating>
                        </div>
                    </b-col>
                    <!-- END Reset Button -->

                    <!-- Half Stars -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Half Stars</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can have half stars <span v-if="starRatingIncrement">({{ starRatingIncrement }})</span>
                        </p>
                        <star-rating :increment="0.5" :show-rating="false" :star-size="24"
                                     v-model="starRatingIncrement"></star-rating>
                    </b-col>
                    <!-- END Half Stars -->

                    <!-- Fluid Stars -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Fluid Stars</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can even have fluid stars <span v-if="starRatingFluid">({{ starRatingFluid }})</span>
                        </p>
                        <star-rating :fixed-points="2" :increment="0.01" :star-size="24" text-class="font-size-sm text-muted"
                                     v-model="starRatingFluid"></star-rating>
                    </b-col>
                    <!-- END Fluid Stars -->

                    <!-- Color and Shape Variations -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Color and Shape Variations</h4>
                        <p class="font-size-sm text-muted mb-2">
                            You can set the colors to what ever you like <span v-if="starRatingColors">({{ starRatingColors }})</span>
                        </p>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     active-color="#5c80d1"
                                     class="mb-2"
                                     v-model="starRatingColors"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     active-color="#46c37b"
                                     class="mb-2"
                                     v-model="starRatingColors"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     active-color="#70b9eb"
                                     class="mb-2"
                                     v-model="starRatingColors"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     active-color="#f3b760"
                                     class="mb-2"
                                     v-model="starRatingColors"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     active-color="#d26a5c"
                                     class="mb-2"
                                     v-model="starRatingColors"></star-rating>
                    </b-col>
                    <!-- END Color and Shape Variations -->

                    <!-- Size and Shape Variations -->
                    <b-col md="6">
                        <h4 class="border-bottom pb-2">Size and Shape Variations</h4>
                        <p class="font-size-sm text-muted mb-2">
                            Changing the size of the stars is also possible <span v-if="starRatingSize">({{ starRatingSize }})</span>
                        </p>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="16"
                                     class="mb-1"
                                     v-model="starRatingSize"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="24"
                                     class="mb-1"
                                     v-model="starRatingSize"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="32"
                                     class="mb-1"
                                     v-model="starRatingSize"></star-rating>
                        <star-rating :show-rating="false" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" :star-size="48"
                                     class="mb-1"
                                     v-model="starRatingSize"></star-rating>
                    </b-col>
                    <!-- END Size and Shape Variations -->
                </b-row>
            </base-block>
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    // Vue Star Rating, for more info and examples you can check out https://github.com/craigh411/vue-star-rating
    import StarRating from 'vue-star-rating'

    export default {
        components: {
            StarRating
        },
        data() {
            return {
                starRatingSimple: 0,
                starRatingPredefined: 3,
                starRatingMore: 5,
                starRatingReset: 4,
                starRatingIncrement: 2.5,
                starRatingFluid: 0,
                starRatingColors: 3,
                starRatingSize: 3
            }
        }
    }
</script>
