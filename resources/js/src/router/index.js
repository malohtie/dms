/*
 * Default Router
 */
// Vue and Vue Router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from "@/store"
import landing from "./landing"
import error from "./error"
import admin from "./admin"
import user from "./user"
import auth from "./auth"

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
        ...admin,
        ...user,
        ...error
    ]
})

router.beforeEach((to, from, next) => {
    //set document title
    document.title = `${to.meta.title} - ${store.getters['appName']}`
    //show page loader
    store.commit('pageLoader', { mode: 'on' })
    //to admin or user section if already Logged
    if(to.name === 'Login' && store.getters["auth/isLogged"]) {
        if(store.getters["auth/isAdmin"]) {
            return next("/admin")
        }
        return next("/user")
    }
    //check if page require auth and user is connected
    if(to.matched.some(route => route.meta.auth) && !store.getters["auth/isLogged"]) {
        return next('/401')
    }
    //check if page require admin user and user is admin
    if(!store.getters["auth/isAdmin"] && to.matched.some(route => route.meta.adminOnly)) {
        return next('/401')
    }
    return next()
});

router.afterEach(() => {
    //hide page loader
    store.commit('pageLoader', { mode: 'off' })
});

export default router;
