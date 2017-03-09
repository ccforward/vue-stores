import Vue from 'vue'
import App from './App'

import stores from '../index'

Vue.use(stores)

Vue.config.productionTip = false

Vue.config.devtools = true

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    state: {
      showModal: false,
      global: {
        txt: 'shared Text'
      }
    }
  },
  methods: {
    toast(){
      alert(this.state.global.txt)
    }
  }
})
