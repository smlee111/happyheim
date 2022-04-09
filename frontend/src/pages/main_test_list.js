import Vue from 'vue'
import AppTestList from './AppTestList.vue'
import router from '../router'
import store from '../store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AppTestList)
}).$mount('#app')
