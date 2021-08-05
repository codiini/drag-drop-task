import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.directive("color", {
  bind(el) {
    el.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
