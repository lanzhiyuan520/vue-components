import lanSwitch from './src/lan-switch'

lanSwitch.install = Vue => {
  Vue.component(lanSwitch.name,lanSwitch)
}

export default lanSwitch
