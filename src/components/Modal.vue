<template>
  <div v-show="show" class="modal-mask profile-modal">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close">
          <span @click="show=false">X</span>
        </div>
        <p>show Modal: {{ show }}</p>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  stores: {
    show: 'state.showModal'
  }
}
</script>

<style lang="stylus">
.modal-mask {
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .8)
  display table
  -webkit-transition all .3s ease
  transition all .3s ease
}
.modal-wrapper {
  display table-cell
  vertical-align middle
}

.modal-container {
  width 70%
  min-height 100px
  margin 0 auto
  padding 0 30px 16px
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  -webkit-transition all .3s ease
  transition all .3s ease
  font-family Helvetica, Arial, sans-serif
}

.modal-close {
  height 28px
  span {
    padding 8px 12px 0 0
    float right
    font-size 20px
    color #b0b0b0
  }
}

</style>