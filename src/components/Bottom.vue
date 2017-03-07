<template>
  <footer>
    <div>
      <input type="text" v-model="bottomTxt">
    </div>
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'top',
  stores: {
    bottomTxt: 'state.global.txt'
  }
}
</script>
