import Vue from 'vue'
import App from './App'

import stores from '../index'

Vue.use(stores)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    state: {
      showModal: false
    }
  }
})
