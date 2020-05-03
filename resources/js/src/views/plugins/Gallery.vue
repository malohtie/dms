<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Clean and easy way to showcase your images." title="Gallery">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
                    <b-breadcrumb-item active>Gallery</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <gallery :images="photos" :index="index" :options="{ indicatorOptions: { thumbnailIndicators: true }}"
                     @close="index = null"></gallery>
            <b-row class="items-push">
                <b-col :key="photoIndex" class="animated fadeIn" lg="4" md="6" v-for="(photo, photoIndex) in photos"
                       xl="3">
                    <a @click="index = photoIndex" class="img-link img-link-zoom-in img-thumb"
                       href="javascript:void(0)">
                        <img :src="photo" alt="Photo" class="img-fluid">
                    </a>
                </b-col>
            </b-row>
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    // Vue Gallery, for more info and examples you can check out https://github.com/RobinCK/vue-gallery
    import VueGallery from 'vue-gallery'

    export default {
        components: {
            'gallery': VueGallery
        },
        data() {
            return {
                index: null,
                photos: [
                    'images/photos/photo2@2x.jpg',
                    'images/photos/photo3@2x.jpg',
                    'images/photos/photo4@2x.jpg',
                    'images/photos/photo5@2x.jpg',
                    'images/photos/photo6@2x.jpg',
                    'images/photos/photo7@2x.jpg',
                    'images/photos/photo8@2x.jpg',
                    'images/photos/photo9@2x.jpg',
                    'images/photos/photo10@2x.jpg',
                    'images/photos/photo11@2x.jpg',
                    'images/photos/photo12@2x.jpg',
                    'images/photos/photo13@2x.jpg',
                    'images/photos/photo14@2x.jpg',
                    'images/photos/photo15@2x.jpg',
                    'images/photos/photo16@2x.jpg',
                    'images/photos/photo17@2x.jpg'
                ]
            }
        }
    }
</script>
