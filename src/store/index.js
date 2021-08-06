import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

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
  },
  plugins: [createPersistedState()],
})
