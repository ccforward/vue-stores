# vue-stores

Share the root states and methods in every component.

[详细说明](https://github.com/ccforward/cc/issues/62)

## GitHub

[https://github.com/ccforward/vue-stores](https://github.com/ccforward/vue-stores)

## NPM

[![npm](https://img.shields.io/npm/v/vue-stores.svg)](https://www.npmjs.com/package/vue-stores)

## Demo

[https://ccforward.github.io/vue-stores/](https://ccforward.github.io/vue-stores/)

## Usage

### install

``` shell
$ npm install vue-stores --save

$ yarn add vue-stores

```

### Root Component
[main.js](https://github.com/ccforward/vue-stores/blob/master/src/main.js)

```js
import stores from 'vue-stores'
Vue.use(stores)

new Vue({
  ...  
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
  ...
})
```

### Child Component

[App.vue](https://github.com/ccforward/vue-stores/blob/master/src/App.vue)

```js
export default {
  ...
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
  ...
}
```

