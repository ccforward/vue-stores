<template>
  <div id="app">
    <button @click="toggle">toggle Modal</button>
    <Modal>
      <p slot="body">
        modal - body
      </p>
    </Modal>
  </div>
</template>

<script>
import Top from './components/Top'
import Modal from './components/Modal'

export default {
  name: 'app',
  components: {
    Modal,
    Top
  },
  data(){
    return {
      data: 0
    }
  },
  methods: {
    toggle(){
      this.modal = !this.modal
    }
  },
  stores: {
    modal: 'state.showModal'
  }
}
</script>

<style lang="stylus">
#app {
  margin-top 60px
  font-family 'Avenir', Helvetica, Arial, sans-serif
  text-align center
  color #2c3e50
  -webkit-font-smoothing antialiased
}
h1, h2 {
  font-weight normal
}

ul {
  list-style-type none
  padding 0
}

a {
  color #42b983
}

button {
  width 120px
  height 40px
  line-hright 40px
  background #f06
  color #fff
  font-size 16px
  border 0 none
}
</style>
