const plugin = function(Vue) {
  return Vue.mixin({
    beforeCreate() {
      return initStore(this)
    }
  });
}
const initStore = function(vm) { 
  if (vm.$options.stores != null) {
    if (vm.$options.computed == null) {
      vm.$options.computed = {}
    }
    if (Array.isArray(vm.$options.stores)) {
      return vm.$options.stores.forEach(function(property) {
        return vm.$options.computed[property] = new Computer(property)
      })
    } else {
      const states = []
      for (let key in vm.$options.stores) {
        if (typeof vm.$options.stores[key] === 'function') {
          states.push(vm.$options.computed[key] = new Computer(vm.$options.stores[key]()))
        } else if (typeof vm.$options.stores[key] === 'string') {
          states.push(vm.$options.computed[key] = new Computer(vm.$options.stores[key]))
        } else {
          states.push(null)
        }
      }
      return states
    }
  }
}
const Computer = function(key) {
  return {
    get() {
      return key.split('.').reduce( (k, v) => {
        return k[v]
      }, this.$root)
    },
    set(val) {
      const objArr = key.split('.')
      const len = objArr.length - 1
      let i = 0
      let j = 0
      let root = this.$root
      for (; 0 <= len ? j < len : j > len; i = 0 <= len ? ++j : --j) {
        if (root.hasOwnProperty(objArr[i])) {
          root = root[objArr[i]]
        }
      }
      return root[objArr[i]] = val
    }
  }
}
export default plugin