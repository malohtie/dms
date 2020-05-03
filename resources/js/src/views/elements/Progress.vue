<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Vital activity components for your project." title="Progress">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Progress</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Loading -->
            <h2 class="content-heading">Loading</h2>

            <!-- Bootstrap Spinners -->
            <base-block title="Bootstrap Spinners">
                <b-row class="items-push">
                    <b-col md="6">
                        <b-spinner label="Loading..." small variant="primary"></b-spinner>
                        <b-spinner label="Loading..." small variant="secondary"></b-spinner>
                        <b-spinner label="Loading..." small variant="success"></b-spinner>
                        <b-spinner label="Loading..." small variant="danger"></b-spinner>
                        <b-spinner label="Loading..." small variant="warning"></b-spinner>
                        <b-spinner label="Loading..." small variant="info"></b-spinner>
                        <b-spinner label="Loading..." small variant="light"></b-spinner>
                        <b-spinner label="Loading..." small variant="dark"></b-spinner>
                    </b-col>
                    <b-col md="6">
                        <b-spinner label="Loading..." small type="grow" variant="primary"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="secondary"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="success"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="danger"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="warning"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="info"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="light"></b-spinner>
                        <b-spinner label="Loading..." small type="grow" variant="dark"></b-spinner>
                    </b-col>
                    <b-col md="6">
                        <b-spinner label="Loading..." variant="primary"></b-spinner>
                        <b-spinner label="Loading..." variant="secondary"></b-spinner>
                        <b-spinner label="Loading..." variant="success"></b-spinner>
                        <b-spinner label="Loading..." variant="danger"></b-spinner>
                        <b-spinner label="Loading..." variant="warning"></b-spinner>
                        <b-spinner label="Loading..." variant="info"></b-spinner>
                        <b-spinner label="Loading..." variant="light"></b-spinner>
                        <b-spinner label="Loading..." variant="dark"></b-spinner>
                    </b-col>
                    <b-col md="6">
                        <b-spinner label="Loading..." type="grow" variant="primary"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="secondary"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="success"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="danger"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="warning"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="info"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="light"></b-spinner>
                        <b-spinner label="Loading..." type="grow" variant="dark"></b-spinner>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Bootstrap Spinners -->

            <!-- Icons -->
            <base-block title="Icons">
                <p class="font-size-sm text-muted mb-5">
                    You can create a loading indicator by adding the class <code>fa-spin</code> to any Font Awesome
                    icon. Combining it with size classes and colors, you can get a lot of variations.
                </p>
                <b-row class="items-push-3x text-center">
                    <b-col cols="6" md="3">
                        <i class="fa fa-sun fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-2x fa-sun fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-3x fa-sun fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-4x fa-sun fa-spin text-danger"></i>
                    </b-col>
                </b-row>
                <b-row class="items-push-3x text-center">
                    <b-col cols="6" md="3">
                        <i class="fa fa-cog fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-2x fa-cog fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-3x fa-cog fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-4x fa-cog fa-spin text-warning"></i>
                    </b-col>
                </b-row>
                <b-row class="items-push-3x text-center">
                    <b-col cols="6" md="3">
                        <i class="fa fa-asterisk fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-2x fa-asterisk fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-3x fa-asterisk fa-spin"></i>
                    </b-col>
                    <b-col cols="6" md="3">
                        <i class="fa fa-4x fa-asterisk fa-spin text-success"></i>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Icons -->
            <!-- END Loading -->

            <!-- Progress Bars -->
            <h2 class="content-heading">Progress Bars</h2>
            <b-row class="row-deck">
                <b-col xl="6">
                    <!-- Normal -->
                    <base-block title="Normal">
                        <template #options>
                            <button @click="randomValue(1)" class="btn-block-option" type="button">
                                <i class="fa fa-random"></i>
                            </button>
                        </template>
                        <b-progress :max="max" class="push" variant="primary">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[0].toFixed()}%</span>`"
                                            :value="groupOneValue[0]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" variant="warning">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[1].toFixed()}%</span>`"
                                            :value="groupOneValue[1]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" variant="danger">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[2].toFixed()}%</span>`"
                                            :value="groupOneValue[2]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" variant="info">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[3].toFixed()}%</span>`"
                                            :value="groupOneValue[3]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" variant="success">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupOneValue[4].toFixed()}%</span>`"
                                            :value="groupOneValue[4]"></b-progress-bar>
                        </b-progress>
                    </base-block>
                    <!-- END Normal -->
                </b-col>
                <b-col xl="6">
                    <!-- Striped -->
                    <base-block title="Striped">
                        <template #options>
                            <button @click="randomValue(2)" class="btn-block-option" type="button">
                                <i class="fa fa-random"></i>
                            </button>
                        </template>
                        <b-progress :max="max" class="push" striped variant="primary">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[0].toFixed()}%</span>`"
                                            :value="groupTwoValue[0]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" striped variant="warning">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[1].toFixed()}%</span>`"
                                            :value="groupTwoValue[1]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" striped variant="danger">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[2].toFixed()}%</span>`"
                                            :value="groupTwoValue[2]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" striped variant="info">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[3].toFixed()}%</span>`"
                                            :value="groupTwoValue[3]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" class="push" striped variant="success">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupTwoValue[4].toFixed()}%</span>`"
                                            :value="groupTwoValue[4]"></b-progress-bar>
                        </b-progress>
                    </base-block>
                    <!-- END Striped -->
                </b-col>
                <b-col xl="6">
                    <!-- Animated -->
                    <base-block title="Animated">
                        <template #options>
                            <button @click="randomValue(3)" class="btn-block-option" type="button">
                                <i class="fa fa-random"></i>
                            </button>
                        </template>
                        <b-progress :max="max" animated class="push" variant="primary">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[0].toFixed()}%</span>`"
                                            :value="groupThreeValue[0]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" animated class="push" variant="warning">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[1].toFixed()}%</span>`"
                                            :value="groupThreeValue[1]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" animated class="push" variant="danger">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[2].toFixed()}%</span>`"
                                            :value="groupThreeValue[2]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" animated class="push" variant="info">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[3].toFixed()}%</span>`"
                                            :value="groupThreeValue[3]"></b-progress-bar>
                        </b-progress>
                        <b-progress :max="max" animated class="push" variant="success">
                            <b-progress-bar :label-html="`<span class='font-size-sm font-w600'>${groupThreeValue[4].toFixed()}%</span>`"
                                            :value="groupThreeValue[4]"></b-progress-bar>
                        </b-progress>
                    </base-block>
                    <!-- END Animated -->
                </b-col>
                <b-col xl="6">
                    <!-- Mini -->
                    <base-block title="Mini">
                        <template #options>
                            <button @click="randomValue(4)" class="btn-block-option" type="button">
                                <i class="fa fa-random"></i>
                            </button>
                        </template>
                        <b-progress :max="max" :value="groupFourValue[0]" class="push" height="10px"
                                    variant="primary"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[1]" class="push" height="10px"
                                    variant="warning"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[2]" class="push" height="10px"
                                    variant="danger"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[3]" class="push" height="10px" striped
                                    variant="info"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[4]" class="push" height="10px" striped
                                    variant="success"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[5]" animated class="push" height="10px"
                                    variant="muted"></b-progress>
                        <b-progress :max="max" :value="groupFourValue[6]" animated class="push" height="10px"
                                    variant="dark"></b-progress>
                    </base-block>
                    <!-- END Mini -->
                </b-col>
            </b-row>
            <!-- END Progress Bars -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                groupOneValue: [30, 50, 70, 90, 100],
                groupTwoValue: [30, 50, 70, 90, 100],
                groupThreeValue: [30, 50, 70, 90, 100],
                groupFourValue: [30, 50, 70, 90, 100, 80, 60],
                max: 100
            }
        },
        methods: {
            randomValue(group) {
                switch (group) {
                    case 1:
                        this.groupOneValue.forEach((val, index) => {
                            this.$set(this.groupOneValue, index, 10 + Math.random() * this.max)
                        })
                        break
                    case 2:
                        this.groupTwoValue.forEach((val, index) => {
                            this.$set(this.groupTwoValue, index, 10 + Math.random() * this.max)
                        })
                        break
                    case 3:
                        this.groupThreeValue.forEach((val, index) => {
                            this.$set(this.groupThreeValue, index, 10 + Math.random() * this.max)
                        })
                        break
                    case 4:
                        this.groupFourValue.forEach((val, index) => {
                            this.$set(this.groupFourValue, index, 10 + Math.random() * this.max)
                        })
                        break
                }
            }
        }
    }
</script>
