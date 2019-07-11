import ToastComponent from './toast'

const Toast = {}

Toast.install = Vue => {
  const ToastConstructor = Vue.extend(ToastComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.prototype.$toast = (msg,duration = 2000) => {
    instance.msg = msg
    instance.status = true
    setTimeout(()=>{
      instance.msg = ''
      instance.status = false
    },duration)
  }
}

export default Toast
