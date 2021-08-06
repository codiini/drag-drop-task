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
        "49B6FF",
        "A480CF",
        "00497A",
        "80498C",
        "BA2D0B",
        "003E1F",
        "A1E8AF",
        "104547",
        "931621",
        "F2542D",
        "0E9594",
        "494850",
        "F05365"
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
