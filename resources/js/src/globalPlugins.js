import Vue from 'vue'
//bootstrap
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
//sweetAlert2
import SweetAlert from 'vue-sweetalert2'
const optionsSweetAlert = {
    buttonsStyling: false,
    customClass: {
        confirmButton: 'btn btn-success m-1',
        cancelButton: 'btn btn-danger m-1',
        input: 'form-control'
    }
}
Vue.use(SweetAlert, optionsSweetAlert);
//axios
import axios from '@/http'
Vue.prototype.$http = axios
