<template>
    <!-- Footer -->
    <footer id="page-footer">
        <slot>
            <div class="content py-3">
                <b-row class="font-size-sm">
                    <b-col class="py-1 text-center text-sm-right" order-sm="2" sm="6">
                        Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600"
                                                                                   href="https://github.com/malohtie"
                                                                                   target="_blank">MALOHTIE</a>
                    </b-col>
                    <b-col class="py-1 text-center text-sm-left" order-sm="1" sm="6">
                        <a class="font-w600" href="https://1.envato.market/5Noyb" target="_blank">{{
                            $store.getters.appName + ' ' + $store.getters.appVersion }}</a> &copy; {{
                        $store.getters.appCopyright }}
                    </b-col>
                </b-row>
            </div>
        </slot>
    </footer>
    <!-- END Footer -->
</template>

<script>
    export default {
        name: 'BaseFooter',
        props: {
            classes: String
        }
    }
</script>
