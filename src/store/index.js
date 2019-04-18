import Vue from 'vue'
import Vuex from 'vuex'

import sys from '@/store/module/system'
import user from "@/store/module/user"
import perms from "@/store/module/perms"

import getters from '@/store/getters'
Vue.use(Vuex)
export const store = new Vuex.Store({

  modules: {
    sys,
    user,
    perms
  },
  getters
})