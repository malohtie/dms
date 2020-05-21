<template>
    <!-- Footer -->
    <footer id="page-footer">
        <slot>
            <div class="content py-2">
                <b-row class="font-size-sm">
                    <b-col class="py-1 text-center text-sm-right" order-sm="2" sm="6">
                        Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600"
                                                                                   :href="appAuthorLink"
                                                                                   target="_blank">{{ appAuthor }}</a>
                    </b-col>
                    <b-col class="py-1 text-center text-sm-left" order-sm="1" sm="6">
                        <a class="font-w600" href="javascript:void(0)">{{ appName + ' ' +appVersion }}</a> &copy; {{ appCopyright }}
                    </b-col>
                </b-row>
            </div>
        </slot>
    </footer>
    <!-- END Footer -->
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'BaseFooter',
        computed: {
            ...mapGetters([
                'appName',
                'appVersion',
                'appCopyright',
                'appAuthorLink',
                'appAuthor',
            ])
        },
    }
</script>
