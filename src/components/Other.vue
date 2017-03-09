<template>
  <div>
    <p>this is another component in Bottom</p>
    <input type="text" v-model="otherTxt">
  </div>
</template>

<script>
export default {
  name: 'other',
  stores: {
    otherTxt: 'state.global.txt'
  }
}
</script>
