/*
 * Main file
 */

// Vue, Vue Router, App and Vuex store
import Vue from 'vue'
import router from './router'
// You can use the following starter router instead of the default one as a clean starting point
// import router from './router/starter'
import App from './App.vue'
import store from './store'
// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import './globalComponents'
import './globalDirectives'
// Register global plugins
Vue.use(BootstrapVue)

// Disable tip shown in dev console when in development mode
Vue.config.productionTip = false
//Vue.config.devtools = true
// Craft new application
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')