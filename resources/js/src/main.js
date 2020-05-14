/*
 * Main file
 */

// Vue, Vue Router, App and Vuex store
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

// Register global
import './globalPlugins'
import './globalComponents'
import './globalDirectives'


// Disable tip shown in dev console when in development mode
Vue.config.productionTip = false
//Vue.config.devtools = true
// Craft new application
new Vue({
    store,
    router,
    render: h => h(App),
    created() {
        //setup sanctum crsf cookie when creating vue instance
        this.$http({ url: '/${store.getters.appName.toLowerCase()}/crsf-cookie', baseURL: '' });
    }
}).$mount('#app')
