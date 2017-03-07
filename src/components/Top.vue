<template>
  <header>
    <p v-if="topTxt">{{topTxt}}</p>
    <p v-else>delete all</p>
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'top',
  stores: {
    topTxt: 'state.global.txt'
  }
}
</script>
