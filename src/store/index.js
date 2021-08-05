import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [],
  },
  mutations: {
    updateList: (state, payload) => {
      state.cardList = payload;
    }
  },
  actions: {
    updateList: ({ commit }, payload) => {
      commit("updateList", payload);
    }
  },
  modules: {
  }
})
