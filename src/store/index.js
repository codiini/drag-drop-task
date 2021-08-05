import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userList: [
      {
        id: 1,
        name: "Notion Tab",
      },
      {
        id: 2,
        name: "Google Docs",
      },
      {
        id: 3,
        name: "Youtube Tab",
      },
      {
        id: 4,
        name: "Google search tab",
      },
      {
        id: 5,
        name: "Spotify",
      },
    ],
  },
  mutations: {
    updateList: (state, payload) => {
      state.userList = payload;
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
