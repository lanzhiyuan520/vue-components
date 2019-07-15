import LanInput from './src/lan-input'
import Vue from 'vue'

LanInput.install = () => {
  Vue.component(LanInput.name,LanInput)
}

export default LanInput
