<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Flexible and mobile friendly content sliders." title="Carousel">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Plugins</b-breadcrumb-item>
                    <b-breadcrumb-item active>Carousel</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <b-row>
                <b-col md="6">
                    <base-block content-full title="Default with Indicators">
                        <b-carousel :interval="4000" controls indicators>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block content-full title="Fade with Indicators">
                        <b-carousel :interval="4000" controls fade indicators>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block content-full title="No animation with Indicators">
                        <b-carousel :interval="4000" controls indicators no-animation>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block content-full title="Only Arrows">
                        <b-carousel :interval="4000" controls>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block content-full title="Simple with No Pause on Hover">
                        <b-carousel :interval="4000" no-hover-pause>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block content-full title="No autoplay">
                        <b-carousel :interval="0" controls indicators>
                            <b-carousel-slide img-src="images/photos/photo31.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo29.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo30.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="images/photos/photo32.jpg"></b-carousel-slide>
                        </b-carousel>
                    </base-block>
                </b-col>
            </b-row>
        </div>
        <!-- END Page Content -->
    </div>
</template>
