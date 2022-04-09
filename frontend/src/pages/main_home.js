import Vue from 'vue'
import AppHome from './AppHome.vue'
import router from '../router'
import store from '../store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AppHome)
}).$mount('#app')
