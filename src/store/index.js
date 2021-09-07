import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [],
    controlCardList: [],
    currentColor: null,
    addedState: {},
    presentIndex: null,
    navState:true,
    cardHoverState: false,
    cardMoveState:false,
  },
  mutations: {
    updateControlList: (state, payload) => {
      state.controlCardList = payload;
    },
    updateCurrentColor: (state, payload) => {
      state.currentColor = payload
    },
    updateAddState: (state, payload) => {
      state.addedState = payload
    },
    deleteCard: (state, payload) => {
      state.controlCardList.splice(payload, 1)
    },
    addCard: (state, payload) => {
      state.controlCardList.push(payload);
    },
    cardHover: (state, payload) =>{
      state.cardHoverState = payload
      state.cardMoveState = !payload;
    },
    cardMove: (state, payload) =>{
      state.cardMoveState = payload;
      state.cardHoverState = !payload
    }
  },
  actions: {
    updateControlList: ({ commit }, payload) => {
      commit("updateControlList", payload);
    },
    deleteCard: ({ commit }, payload) => {
      commit("deleteCard", payload);
    },
    addCard: ({ commit }, payload) => {
      commit("addCard", payload);
    },
    cardHover: ({commit}, payload) =>{
      commit("cardHover", payload)
    },
    cardMove: ({commit}, payload) =>{
      commit("cardMove", payload)
    },
    getRandomColor({ commit }) {
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
      commit("updateCurrentColor", randomColor)
    }
  },
  modules: {
  },
})
