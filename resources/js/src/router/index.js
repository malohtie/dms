/*
 * Default Router
 */
// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import landing from "./landing";

// Router Configuration
export default new Router({
    mode: 'history',
    base: process.env.MIX_URL_BASE,
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        ...landing
    ]
})
