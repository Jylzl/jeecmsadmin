import Vue from 'vue'
import Vuex from 'vuex'

import user from "./module/user"
import perms from "./module/perms"

import getters from './getters'
Vue.use(Vuex)
export const store = new Vuex.Store({

  modules: {
    user,
    perms
  },
  getters
})