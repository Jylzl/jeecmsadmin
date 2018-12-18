import Vue from 'vue'
import Vuex from 'vuex'

import user from "./module/user"
Vue.use(Vuex)
export const store = new Vuex.Store({

  modules: {
    user
  }

})