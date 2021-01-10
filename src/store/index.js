import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import modules from './modules'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules,
  plugins: [
    createPersistedState()
  ]
})
