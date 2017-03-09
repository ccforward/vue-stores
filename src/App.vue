<template>
  <div id="app">
    <Top>
      <p>Top Component</p>
    </Top>
    <a href="https://github.com/ccforward/vue-stores/">vue-stores</a>
    <section class="content">
      <p class="desc">show Modal: <span><b>{{ modal }}</b></span></p>
      <button @click="toggle">toggle Modal</button>
      <Modal>
        <p slot="body">
          The Modal Component
        </p>
      </Modal>
      <div class="desc">
        <p>shared Method:</p>
        <button @click="alert">Method</button>
      </div>
      <p class="desc">This a global shared data which can be used in every component</p>
      <div>
        <input type="text" v-model="txt">
      </div>
    </section>
    <Bottom>
      <p>Bottom Component</p>
    </Bottom>
  </div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'
import Modal from './components/Modal'

export default {
  name: 'app',
  components: {
    Modal,
    Top,
    Bottom
  },
  methods: {
    toggle(){
      this.modal = !this.modal
    }
  },
  stores: {
    txt: 'state.global.txt',
    modal: 'state.showModal',
    alert(){
      return 'toast'
    }
  }
}
</script>

<style lang="stylus">
* {
  margin 0
  padding 0
}
#app {
  padding-top 100px
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
.content {
  margin-top 50px
}
.desc {
  margin 20px 0
  span {
    position relative
    color #f06
    font-size 20px
    z-index 10001
  }
}
button {
  margin 5px 0
  width 120px
  height 40px
  border 0 none
  outline 0 none
  background #f06
  color #fff
  font-size 16px
}
input {
  margin-bottom 10px
  height 30px
  padding 5px
  outline 0 none
  border 1px solid #ccc
}

header,
footer {
  position fixed
  top 0
  width 100%
  padding 10px 0
  background #444
  color #fff
  font-size 15px
}
footer {
  top auto
  bottom 0
  padding 30px 0
}
</style>
