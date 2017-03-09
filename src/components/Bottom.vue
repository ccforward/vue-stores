<template>
  <footer>
    <slot></slot>
    <div>
      <input type="text" v-model="bottomTxt">
    </div>
    <Other/>
  </footer>
</template>

<script>
import Other from './Other'
export default {
  name: 'bottom',
  components: {
    Other,
  },
  stores: {
    bottomTxt: 'state.global.txt'
  }
}
</script>
