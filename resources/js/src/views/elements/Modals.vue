<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Add dialogs to your site for lightboxes, user notifications, or completely custom content."
                           title="Modals">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Elements</b-breadcrumb-item>
                    <b-breadcrumb-item active>Modals</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Bootstrap Modals -->
            <h2 class="content-heading">Bootstrap Modals</h2>
            <b-row class="row-deck">
                <b-col md="6">
                    <!-- Default Variation -->
                    <base-block content-full title="Default Variation">
                        <p class="font-size-sm text-muted">
                            Modals are completely customizable and here we present the default one
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-normal variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Default Variation -->

                    <!-- Normal Block Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="modal-block-normal">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-normal')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-normal')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-normal')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Normal Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Size: Small -->
                    <base-block content-full title="Size: Small">
                        <p class="font-size-sm text-muted">
                            If you don’t have much content, you can use the small size variation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-small variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Size: Small -->

                    <!-- Small Block Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="modal-block-small" size="sm">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-small')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-small')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-small')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Small Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Size: Large -->
                    <base-block content-full title="Size: Large">
                        <p class="font-size-sm text-muted">
                            If you need more space you can use the large size variation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-large variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Size: Large -->

                    <!-- Large Block Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="modal-block-large" size="lg">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-large')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-large')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-large')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Large Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Size: Extra Large -->
                    <base-block content-full title="Size: Extra Large">
                        <p class="font-size-sm text-muted">
                            Do you need even more space? Go for the extra large modal
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-extra-large variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Size: Extra Large -->

                    <!-- Extra Large Block Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="modal-block-extra-large" size="xl">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-extra-large')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad
                                    feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante
                                    convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan
                                    adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames
                                    aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo
                                    turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis
                                    congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi
                                    viverra luctus id leo dictum lorem, inceptos nibh orci.
                                </p>
                                <p>
                                    Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad
                                    feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante
                                    convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan
                                    adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames
                                    aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo
                                    turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis
                                    congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi
                                    viverra luctus id leo dictum lorem, inceptos nibh orci.
                                </p>
                                <p>
                                    Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad
                                    feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante
                                    convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan
                                    adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames
                                    aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo
                                    turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis
                                    congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi
                                    viverra luctus id leo dictum lorem, inceptos nibh orci.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-extra-large')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-extra-large')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Extra Large Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Position: Top -->
                    <base-block content-full title="Position: Top">
                        <p class="font-size-sm text-muted">
                            You can position your modals at the top of the screen
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-top variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Position: Top -->

                    <!-- Top Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-top" hide-footer hide-header
                             id="modal-block-top">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-top')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-top')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-top')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Top Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Position: Vertically Centered -->
                    <base-block content-full title="Position: Vertically Centered">
                        <p class="font-size-sm text-muted">
                            You can center your modals in the middle of the screen
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-vcenter variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Position: Vertically Centered -->

                    <!-- Vertically Centered Block Modal -->
                    <b-modal body-class="p-0" centered hide-footer hide-header id="modal-block-vcenter">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-vcenter')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-vcenter')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-vcenter')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Vertically Centered Block Modal -->
                </b-col>
            </b-row>
            <!-- END Bootstrap Modals -->

            <!-- Bootstrap Modals Animations -->
            <h2 class="content-heading">
                Bootstrap Modals <small>Animations</small>
            </h2>
            <b-row class="row-deck">
                <b-col md="6">
                    <!-- Fade In -->
                    <base-block content-full title="Fade In">
                        <p class="font-size-sm text-muted">
                            The default modal animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-fadein variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Fade In -->

                    <!-- Fade In Block Modal -->
                    <b-modal body-class="p-0" hide-footer hide-header id="modal-block-fadein">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-fadein')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-fadein')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-fadein')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Fade In Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Pop In -->
                    <base-block content-full title="Pop In">
                        <p class="font-size-sm text-muted">
                            Poping in animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-popin variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Pop In -->

                    <!-- Pop In Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-popin" hide-footer hide-header
                             id="modal-block-popin">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-popin')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-popin')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-popin')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Pop In Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Pop Out -->
                    <base-block content-full title="Pop Out">
                        <p class="font-size-sm text-muted">
                            Poping out animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-popout variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Pop Out -->

                    <!-- Pop Out Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-popout" hide-footer hide-header
                             id="modal-block-popout">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-popout')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-popout')" size="sm" variant="light">Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-popout')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Pop Out Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Slide Up -->
                    <base-block content-full title="Slide Up">
                        <p class="font-size-sm text-muted">
                            Sliding from up animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-slideup variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Slide Up -->

                    <!-- Slide Up Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-slideup" hide-footer hide-header
                             id="modal-block-slideup">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-slideup')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-slideup')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-slideup')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Slide Up Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Slide Right -->
                    <base-block content-full title="Slide Right">
                        <p class="font-size-sm text-muted">
                            Sliding from right animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-slideright variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Slide Right -->

                    <!-- Slide Right Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-slideright" hide-footer
                             hide-header id="modal-block-slideright">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-slideright')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-slideright')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-slideright')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Slide Right Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- Slide Left -->
                    <base-block content-full title="Slide Left">
                        <p class="font-size-sm text-muted">
                            Sliding from left animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-slideleft variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END Slide Left -->

                    <!-- Slide Left Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-slideleft" hide-footer
                             hide-header id="modal-block-slideleft">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-slideleft')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-slideleft')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-slideleft')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END Slide Left Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- From Right -->
                    <base-block content-full title="From Right">
                        <p class="font-size-sm text-muted">
                            Coming from right with rotation animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-fromright variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END From Right -->

                    <!-- From Right Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-fromright" hide-footer
                             hide-header id="modal-block-fromright">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-fromright')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-fromright')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-fromright')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END From Right Block Modal -->
                </b-col>
                <b-col md="6">
                    <!-- From Left -->
                    <base-block content-full title="From Left">
                        <p class="font-size-sm text-muted">
                            Coming from left with rotation animation
                        </p>
                        <b-button size="sm" v-b-modal.modal-block-fromleft variant="primary">
                            Launch Modal
                        </b-button>
                    </base-block>
                    <!-- END From Left -->

                    <!-- From Left Block Modal -->
                    <b-modal body-class="p-0" dialog-class="modal-dialog-fromleft" hide-footer hide-header
                             id="modal-block-fromleft">
                        <div class="block block-themed block-transparent mb-0">
                            <div class="block-header bg-primary-dark">
                                <h3 class="block-title">Modal Title</h3>
                                <div class="block-options">
                                    <button @click="$bvModal.hide('modal-block-fromleft')" class="btn-block-option"
                                            type="button">
                                        <i class="fa fa-fw fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="block-content font-size-sm">
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                                <p>
                                    Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet
                                    adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est
                                    ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst
                                    proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit
                                    metus mi.
                                </p>
                            </div>
                            <div class="block-content block-content-full text-right border-top">
                                <b-button @click="$bvModal.hide('modal-block-fromleft')" size="sm" variant="light">
                                    Close
                                </b-button>
                                <b-button @click="$bvModal.hide('modal-block-fromleft')" size="sm" variant="primary">
                                    <i class="fa fa-check mr-1"></i> Ok
                                </b-button>
                            </div>
                        </div>
                    </b-modal>
                    <!-- END From Left Block Modal -->
                </b-col>
            </b-row>
            <!-- END Bootstrap Modals Animations -->
        </div>
        <!-- END Page Content -->
    </div>
</template>
