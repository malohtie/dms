/*
 * Default Router
 */
// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import landing from "./landing"
import error from "./error"
import auth from "./auth";

// Router Configuration
const router =new Router({
    mode: 'history',
    base: process.env.MIX_URL_BASE,
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [
        ...landing,
        ...auth,
        ...error
    ]
})

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
    return next();
});

router.afterEach(() => {

});

export default router;
