/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters"
import mutations from "./mutations"
import state from "./state"
import actions from "./actions"
import auth from './modules/auth'
import axios from '@/http'
// Register Vuex
Vuex.Store.prototype.$http = axios
Vue.use(Vuex)

// Vuex Store
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    strict: false,
    modules: {
        auth: auth
    }
})
