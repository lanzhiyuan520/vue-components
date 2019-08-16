import lanToast from './src/lan-toast'
import Vue from 'vue'

let instance;
let timer;
let lanToasrConstructor = Vue.extend(lanToast)

instance = new lanToasrConstructor({
  el : document.createElement('div')
})

const $toast = (options = {}) => {
  if (instance.visible) return
  // if (instance.visible) {
  //   instance.visible = false
  //   timer = null
  // }
  instance.visible = true
  switch (typeof options) {
    case 'string' :
      instance.text = options
      if (instance.icon) {
        instance.icon = ''
      }
      break
    case 'object' :
      instance.text = options.text
      instance.icon = options.icon
      break
  }
  document.body.appendChild(instance.$el)
  timer = setTimeout(()=>{instance.visible=false},options.duration || instance.duration)
}

instance.$toast = $toast

const install = Vue => {
  if (!Vue.$toast) {
    Vue.$toast = $toast
  }
  Vue.mixin({
    created () {
      this.$toast = $toast
    }
  })
}

export default install
