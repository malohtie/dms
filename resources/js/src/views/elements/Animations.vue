<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Rich animation library will bring your elements to life and engage your users."
                           title="Animations">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Animations</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Attention Seekers -->
            <h2 class="content-heading">Attention Seekers</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ attentionSeekers.animated ? 'animated ' +
                        attentionSeekers.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('bounce', 'attentionSeekers')" block variant="light">
                                    bounce
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('flash', 'attentionSeekers')" block variant="light">
                                    flash
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('pulse', 'attentionSeekers')" block variant="light">
                                    pulse
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rubberBand', 'attentionSeekers')" block variant="light">
                                    rubberBand
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('shake', 'attentionSeekers')" block variant="light">
                                    shake
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('swing', 'attentionSeekers')" block variant="light">
                                    swing
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('tada', 'attentionSeekers')" block variant="light">tada
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('wobble', 'attentionSeekers')" block variant="light">
                                    wobble
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('attentionSeekers')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Attention Seekers -->

            <!-- Bouncing Entrances -->
            <h2 class="content-heading">Bouncing Entrances</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ bouncingEntrances.animated ? 'animated ' +
                        bouncingEntrances.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceIn', 'bouncingEntrances')" block variant="light">
                                    bounceIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceInDown', 'bouncingEntrances')" block
                                          variant="light">bounceInDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceInLeft', 'bouncingEntrances')" block
                                          variant="light">bounceInLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceInRight', 'bouncingEntrances')" block
                                          variant="light">bounceInRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceInUp', 'bouncingEntrances')" block
                                          variant="light">bounceInUp
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('bouncingEntrances')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Bouncing Entrances -->

            <!-- Bouncing Exits -->
            <h2 class="content-heading">Bouncing Exits</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ bouncingExits.animated ? 'animated ' +
                        bouncingExits.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceOut', 'bouncingExits')" block variant="light">
                                    bounceOut
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceOutDown', 'bouncingExits')" block variant="light">
                                    bounceOutDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceOutLeft', 'bouncingExits')" block variant="light">
                                    bounceOutLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceOutRight', 'bouncingExits')" block
                                          variant="light">bounceOutRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('bounceOutUp', 'bouncingExits')" block variant="light">
                                    bounceOutUp
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('bouncingExits')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Bouncing Exits -->

            <!-- Fading Entrances -->
            <h2 class="content-heading">Fading Entrances</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ fadingEntrances.animated ? 'animated ' +
                        fadingEntrances.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeIn', 'fadingEntrances')" block variant="light">
                                    fadeIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInDown', 'fadingEntrances')" block variant="light">
                                    fadeInDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInDownBig', 'fadingEntrances')" block
                                          variant="light">fadeInDownBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInLeft', 'fadingEntrances')" block variant="light">
                                    fadeInLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInLeftBig', 'fadingEntrances')" block
                                          variant="light">fadeInLeftBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInRight', 'fadingEntrances')" block variant="light">
                                    fadeInRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInRightBig', 'fadingEntrances')" block
                                          variant="light">fadeInRightBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInUp', 'fadingEntrances')" block variant="light">
                                    fadeInUp
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeInUpBig', 'fadingEntrances')" block variant="light">
                                    fadeInUpBig
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('fadingEntrances')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Fading Entrances -->

            <!-- Fading Exits -->
            <h2 class="content-heading">Fading Exits</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ fadingExits.animated ? 'animated ' + fadingExits.animation :
                        '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOut', 'fadingExits')" block variant="light">
                                    fadeOut
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutDown', 'fadingExits')" block variant="light">
                                    fadeOutDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutDownBig', 'fadingExits')" block variant="light">
                                    fadeOutDownBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutLeft', 'fadingExits')" block variant="light">
                                    fadeOutLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutLeftBig', 'fadingExits')" block variant="light">
                                    fadeOutLeftBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutRight', 'fadingExits')" block variant="light">
                                    fadeOutRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutRightBig', 'fadingExits')" block variant="light">
                                    fadeOutRightBig
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutUp', 'fadingExits')" block variant="light">
                                    fadeOutUp
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('fadeOutUpBig', 'fadingExits')" block variant="light">
                                    fadeOutUpBig
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('fadingExits')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Fading Exits -->

            <!-- Flippers -->
            <h2 class="content-heading">Flippers</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ flippers.animated ? 'animated ' + flippers.animation : ''
                        }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('flip', 'flippers')" block variant="light">flip
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('flipInX', 'flippers')" block variant="light">flipInX
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('flipInY', 'flippers')" block variant="light">flipInY
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('flipOutX', 'flippers')" block variant="light">flipOutX
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('flipOutY', 'flippers')" block variant="light">flipOutY
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('flippers')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Flippers -->

            <!-- Lightspeed -->
            <h2 class="content-heading">Lightspeed</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ lightspeed.animated ? 'animated ' + lightspeed.animation :
                        '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('lightSpeedIn', 'lightspeed')" block variant="light">
                                    lightSpeedIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('lightSpeedOut', 'lightspeed')" block variant="light">
                                    lightSpeedOut
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('lightspeed')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Lightspeed -->

            <!-- Rotating Entrances -->
            <h2 class="content-heading">Rotating Entrances</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ rotatingEntrances.animated ? 'animated ' +
                        rotatingEntrances.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateIn', 'rotatingEntrances')" block variant="light">
                                    rotateIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateInDownLeft', 'rotatingEntrances')" block
                                          variant="light">
                                    rotateInDownLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateInDownRight', 'rotatingEntrances')" block
                                          variant="light">
                                    rotateInDownRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateInDownLeft', 'rotatingEntrances')" block
                                          variant="light">
                                    rotateInDownLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateInUpRight', 'rotatingEntrances')" block
                                          variant="light">rotateInUpRight
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('rotatingEntrances')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Rotating Entrances -->

            <!-- Rotating Exits -->
            <h2 class="content-heading">Rotating Exits</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ rotatingExits.animated ? 'animated ' +
                        rotatingExits.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateOut', 'rotatingExits')" block variant="light">
                                    rotateOut
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateOutDownLeft', 'rotatingExits')" block
                                          variant="light">rotateOutDownLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateOutDownRight', 'rotatingExits')" block
                                          variant="light">
                                    rotateOutDownRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateOutUpLeft', 'rotatingExits')" block
                                          variant="light">rotateOutUpLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rotateOutUpRight', 'rotatingExits')" block
                                          variant="light">rotateOutUpRight
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('rotatingExits')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Rotating Exits -->

            <!-- Sliding Entrances -->
            <h2 class="content-heading">Sliding Entrances</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ slidingEntrances.animated ? 'animated ' +
                        slidingEntrances.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('slideInUp', 'slidingEntrances')" block variant="light">
                                    slideInUp
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideInDown', 'slidingEntrances')" block
                                          variant="light">slideInDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideInLeft', 'slidingEntrances')" block
                                          variant="light">slideInLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideInRight', 'slidingEntrances')" block
                                          variant="light">slideInRight
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('slidingEntrances')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Sliding Entrances -->

            <!-- Sliding Exits -->
            <h2 class="content-heading">Sliding Exits</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ slidingExits.animated ? 'animated ' + slidingExits.animation
                        : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('slideOutUp', 'slidingExits')" block variant="light">
                                    slideOutUp
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideOutDown', 'slidingExits')" block variant="light">
                                    slideOutDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideOutLeft', 'slidingExits')" block variant="light">
                                    slideOutLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('slideOutRight', 'slidingExits')" block variant="light">
                                    slideOutRight
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('slidingExits')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Sliding Exits -->

            <!-- Zoom Entrances -->
            <h2 class="content-heading">Zoom Entrances</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ zoomEntrances.animated ? 'animated ' +
                        zoomEntrances.animation : '' }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomIn', 'zoomEntrances')" block variant="light">
                                    zoomIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomInDown', 'zoomEntrances')" block variant="light">
                                    zoomInDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomInLeft', 'zoomEntrances')" block variant="light">
                                    zoomInLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomInRight', 'zoomEntrances')" block variant="light">
                                    zoomInRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomInUp', 'zoomEntrances')" block variant="light">
                                    zoomInUp
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('zoomEntrances')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Zoom Entrances -->

            <!-- Zoom Exits -->
            <h2 class="content-heading">Zoom Exits</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ zoomExits.animated ? 'animated ' + zoomExits.animation : ''
                        }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomOut', 'zoomExits')" block variant="light">zoomOut
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomOutDown', 'zoomExits')" block variant="light">
                                    zoomOutDown
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomOutLeft', 'zoomExits')" block variant="light">
                                    zoomOutLeft
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomOutRight', 'zoomExits')" block variant="light">
                                    zoomOutRight
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('zoomOutUp', 'zoomExits')" block variant="light">
                                    zoomOutUp
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('zoomExits')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Zoom Exits -->

            <!-- Specials -->
            <h2 class="content-heading">Specials</h2>
            <base-block content-class="overflow-hidden">
                <template #header>
                    <h3 class="block-title">
                        Active CSS classes: <small><code>{{ specials.animated ? 'animated ' + specials.animation : ''
                        }}</code></small>
                    </h3>
                </template>
                <b-row>
                    <b-col lg="6">
                        <b-row class="items-push">
                            <b-col md="6">
                                <b-button @click="setAnimation('hinge', 'specials')" block variant="light">hinge
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rollIn', 'specials')" block variant="light">rollIn
                                </b-button>
                            </b-col>
                            <b-col md="6">
                                <b-button @click="setAnimation('rollOut', 'specials')" block variant="light">rollOut
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4" lg="6">
                        <div :class="classContainer('specials')">
                            <img alt="Cartoon" class="img-fluid" src="images/various/little-monster.png" width="200">
                        </div>
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Specials -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                attentionSeekers: {animated: false, animation: ''},
                bouncingEntrances: {animated: false, animation: ''},
                bouncingExits: {animated: false, animation: ''},
                fadingEntrances: {animated: false, animation: ''},
                fadingExits: {animated: false, animation: ''},
                flippers: {animated: false, animation: ''},
                lightspeed: {animated: false, animation: ''},
                rotatingEntrances: {animated: false, animation: ''},
                rotatingExits: {animated: false, animation: ''},
                slidingEntrances: {animated: false, animation: ''},
                slidingExits: {animated: false, animation: ''},
                zoomEntrances: {animated: false, animation: ''},
                zoomExits: {animated: false, animation: ''},
                specials: {animated: false, animation: ''}
            }
        },
        methods: {
            setAnimation(animation, section) {
                // Remove animation classes
                this[section]['animated'] = false
                this[section]['animation'] = ''

                // Add them again to trigger the animation
                this[section]['animated'] = true
                this[section]['animation'] = animation
            },
            classContainer(section) {
                return {
                    'animated': this[section]['animated'],
                    [this[section]['animation']]: this[section]['animation']
                }
            }
        }
    }
</script>
