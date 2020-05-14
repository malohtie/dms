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
