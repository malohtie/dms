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
    async created() {
        //setup sanctum crsf cookie when creating vue instance
        this.$http({ url: `/${store.getters.appName.toLowerCase()}/crsf-cookie`, baseURL: '' });
        //check auth user every 1 min if still connected
        (function check() {
            // check user every 1 min
            if (store.getters["auth/isLogged"]) {
                store.dispatch('auth/check').catch(() => {});
            }
            setTimeout(check, 60000)
        })();
        //add event on window resize
        window.addEventListener('resize', () => {
            store.commit('setWindowWidth')
        })
    }
}).$mount('#app')
