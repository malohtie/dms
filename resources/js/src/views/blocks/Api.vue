<template>
    <div>
        <!-- Hero -->
        <base-page-heading subtitle="Powerful way to manipulate any block you want." title="Block API">
            <template #extra>
                <b-breadcrumb class="breadcrumb-alt">
                    <b-breadcrumb-item href="javascript:void(0)">Blocks</b-breadcrumb-item>
                    <b-breadcrumb-item active>API</b-breadcrumb-item>
                </b-breadcrumb>
            </template>
        </base-page-heading>
        <!-- END Hero -->

        <!-- Page Content -->
        <div class="content">
            <!-- Blocks API -->
            <base-block title="Usage with JS code">
                <p class="font-size-sm text-muted mb-0">
                    Using block API is easy. You will just have to use the ref property of your block to call the
                    related function. For example, to set the state of a block with ref set to
                    <strong>testBlock</strong> to loading, you will have to call:
                </p>
                <p>
                    <code>this.$refs.testBlock.stateLoading()</code>
                </p>
                <b-row class="items-push">
                    <b-col md="6">
                        <b-table-simple bordered responsive striped table-class="table-vcenter mb-0">
                            <b-thead>
                                <b-tr>
                                    <b-th style="width: 25%;">Live Test</b-th>
                                    <b-th style="min-width: 160px;">Method</b-th>
                                </b-tr>
                            </b-thead>
                            <b-tbody>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.contentToggle()" block size="sm"
                                                  variant="alt-primary">Toggle Content
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.contentToggle()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.contentHide()" block size="sm"
                                                  variant="alt-primary">Hide Content
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.contentHide()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.contentShow()" block size="sm"
                                                  variant="alt-primary">Show Content
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.contentShow()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.stateToggle()" block size="sm"
                                                  variant="alt-warning">Toggle State
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.stateToggle()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.stateLoading()" block size="sm"
                                                  variant="alt-warning">State Loading
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.stateLoading()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.stateNormal()" block size="sm"
                                                  variant="alt-warning">State Normal
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.stateNormal()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.fullscreenToggle()" block size="sm"
                                                  variant="alt-danger">Toggle Fullscreen
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.fullscreenToggle()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.fullscreenOn()" block size="sm"
                                                  variant="alt-danger">Fullscreen On
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.fullscreenOn()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.fullscreenOff()" block size="sm"
                                                  variant="alt-danger">Fullscreen Off
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.fullscreenOff()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.pinnedToggle()" block size="sm"
                                                  variant="alt-info">Toggle Pinned
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.pinnedToggle()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.pinnedOn()" block size="sm"
                                                  variant="alt-info">Pinned On
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.pinnedOn()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.pinnedOff()" block size="sm"
                                                  variant="alt-info">Pinned Off
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.pinnedOff()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.close()" block size="sm" variant="alt-dark">
                                            Close
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.close()</code>
                                    </b-td>
                                </b-tr>
                                <b-tr>
                                    <b-td>
                                        <b-button @click="$refs.testBlock.open()" block size="sm" variant="alt-dark">
                                            Open
                                        </b-button>
                                    </b-td>
                                    <b-td>
                                        <code>$refs.testBlock.open()</code>
                                    </b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-col>
                    <b-col md="6">
                        <!-- Test Block -->
                        <base-block bordered btn-option-content btn-option-fullscreen header-bg ref="testBlock"
                                    title="Test Block">
                            <p>
                                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad
                                feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis
                                ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing
                                risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet
                                consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis
                                quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor
                                enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id
                                leo dictum lorem, inceptos nibh orci.
                            </p>
                        </base-block>
                        <!-- END Test Block -->
                    </b-col>
                </b-row>
            </base-block>
            <!-- END Blocks API -->

            <!-- Interactive Options -->
            <h2 class="content-heading">Interactive Options</h2>
            <b-row>
                <b-col md="6">
                    <base-block btn-option-content title="Toggle Content">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block btn-option-close title="Close">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block btn-option-fullscreen title="Maximize">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block ref="textBlock2" title="Refresh">
                        <template #options>
                            <button @click="loadData('textBlock2')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block btn-option-pinned title="Pinned">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block btn-option-content mode-content-hide subtitle="Hidden by default" title="Content">
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col cols="12">
                    <base-block btn-option-close btn-option-content btn-option-fullscreen btn-option-pinned
                                ref="testBlock2" title="All Options">
                        <template #options>
                            <button @click="loadData('testBlock2')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat
                            magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna
                            molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero
                            condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat
                            nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas
                            vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi
                            suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh
                            orci.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Interactive Options -->

            <!-- Loading Indicators -->
            <h2 class="content-heading">Loading Indicators</h2>
            <b-row>
                <b-col md="6">
                    <base-block ref="blockLoadingGog" title="Gog">
                        <template #options>
                            <button @click="loadData('blockLoadingGog')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-location" ref="blockLoadingLocation" title="Location">
                        <template #options>
                            <button @click="loadData('blockLoadingLocation')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-energy" ref="blockLoadingEnergy" title="Energy">
                        <template #options>
                            <button @click="loadData('blockLoadingEnergy')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-refresh" ref="blockLoadingRefresh" title="Refresh">
                        <template #options>
                            <button @click="loadData('blockLoadingRefresh')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-sun" ref="blockLoadingSun" title="Sun">
                        <template #options>
                            <button @click="loadData('blockLoadingSun')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-repeat" ref="blockLoadingRepeat" title="Repeat">
                        <template #options>
                            <button @click="loadData('blockLoadingRepeat')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-dms" ref="blockLoadingdms" title="dms">
                        <template #options>
                            <button @click="loadData('blockLoadingdms')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
                <b-col md="6">
                    <base-block class="block-mode-loading-hourglass" ref="blockLoadingHourglass" title="Hourglass">
                        <template #options>
                            <button @click="loadData('blockLoadingHourglass')" class="btn-block-option" type="button">
                                <i class="si si-refresh"></i>
                            </button>
                        </template>
                        <p>
                            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing
                            luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis
                            tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti
                            vestibulum quis in sit varius lorem sit metus mi.
                        </p>
                    </base-block>
                </b-col>
            </b-row>
            <!-- END Loading Indicators -->
        </div>
        <!-- END Page Content -->
    </div>
</template>

<script>
    export default {
        methods: {
            loadData(ref) {
                // Set the block to loading state
                this.$refs[ref].stateLoading()

                // .. here you could load your data

                // Set a timeout for demo purposes
                setTimeout(() => {
                    // Set the block back to normal state
                    this.$refs[ref].stateNormal()
                }, 2000)
            }
        }
    }
</script>
