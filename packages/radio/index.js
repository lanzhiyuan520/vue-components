import lanRadio from './src/lan-radio'

lanRadio.install = Vue => {
  Vue.component(lanRadio.name,lanRadio)
}

export default lanRadio
