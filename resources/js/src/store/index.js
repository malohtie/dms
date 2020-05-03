/*
 * VueX - State Management
 */

import Vue from 'vue'
import Vuex from 'vuex'
// Register Vuex
Vue.use(Vuex)

import getters from "./getters"
import mutations from "./mutations"
import state from "./state"
import actions from "./actions"
import config from "@/../config"

// Vuex Store
export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    strict: !config.appDebug,
    modules : {

    }
})
