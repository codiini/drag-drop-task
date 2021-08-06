import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.directive("color", {
  bind(el) {
    var colors = ["F088D6", "49B6FF", "A480CF", "00497A", "80498C", "80498C", "C04995" ]
    el.style.background = "#" + colors[Math.floor(Math.random() * colors.length)];
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
