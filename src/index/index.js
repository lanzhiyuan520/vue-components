import Vue from 'vue'
import Button from '../../packages/button'
import ButtonGroup from '../../packages/button-group'
import Loading from '../../packages/loading'
const components = [
  Button,
  ButtonGroup,
]

const install = (Vue) => {
  Vue.use(Loading)
  components.forEach((component) => {
    Vue.component(component.name,component)
  })
}

export default install
