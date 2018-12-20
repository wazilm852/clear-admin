import Vuex from 'vuex'
import Vue from 'vue'
import userlogin from './userlogin'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userlogin
      }
  })