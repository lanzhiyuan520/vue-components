import lanRate from './src/lan-rate'

lanRate.install = Vue => {
  Vue.component(lanRate.name,lanRate)
}

export default lanRate
