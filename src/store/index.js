import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [],
    currentColor:null
  },
  mutations: {
    updateList: (state, payload) => {
      state.cardList = payload;
    },
    updateCurrentColor: (state, payload) =>{
      state.currentColor = payload
    }
  },
  actions: {
    updateList: ({ commit }, payload) => {
      commit("updateList", payload);
    },
    getRandomColor({commit}){
      const colors = [
        "F088D6",
        "49B6FF",
        "A480CF",
        "00497A",
        "80498C",
        "80498C",
        "C04995",
      ];
      let randomColor;
      randomColor = "#" + colors[Math.floor(Math.random() * colors.length)];
      commit("updateCurrentColor", randomColor )
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
