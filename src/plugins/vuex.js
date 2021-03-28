import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: true
  },
  mutations: {
    toggleDarkMode(state, toggle) {
      state.darkMode = toggle
    }
  },
  actions: {
    toggleDarkMode(context, toggle) {
      context.commit('toggleDarkMode', toggle)
    }
  },
  getters: {
    darkMode (state) {
      return state.darkMode
    }
  }
})
