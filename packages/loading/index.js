import lanLoadind from './src/lan-loading'
import Vue from 'vue'

let instance;

var LanLoadingConstructor = Vue.extend(lanLoadind);

instance = new LanLoadingConstructor({
  el : document.createElement('div')
})

// console.log(instance)

const $loading = (options = {}) => {
  if (instance.visible) return
  instance.visible = true
  if (typeof options === 'string') {
    instance.text = options
  }else if (typeof options === 'object') {
    instance.text = options.text
  }
  instance.background = options.background
  document.body.appendChild(instance.$el)
  return instance
}

const close = () => {
  instance.visible = false
}

instance.$loading = $loading
instance.close = close


const install = (Vue) => {
  if (!Vue.loading) {
    Vue.$loading = $loading
    Vue.close = close
  }
  Vue.mixin({
    created () {
      this.$loading = Vue.$loading
      this.close = Vue.close
    }
  })
}


export default install
