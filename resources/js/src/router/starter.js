/*
 * Starter Router
 */

// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import adminRoutes from './admin'
import landingRoutes from "./landing";

// Router Configuration
export default new Router({
    mode: 'history',
    //base: config.appUrl,
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        ...adminRoutes,
        ...landingRoutes
    ]
})
