import Vue from 'vue'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//sweetAlert2
import SweetAlert from 'vue-sweetalert2'
Vue.use(SweetAlert);
//axios
import axios from '@/http'
Vue.prototype.$http = axios
//progress bar
import VueProgressBar from 'vue-progressbar'
const options = {
    color: '#5c80d1',
    failedColor: '#d26a5c',
    thickness: '3px',
}
Vue.use(VueProgressBar, options)

import '@/filters'
