import Vue from 'vue'
import Button from '../../packages/button'
import ButtonGroup from '../../packages/button-group'
import Loading from '../../packages/loading'
import Toast from '../../packages/toast'
import Input from '../../packages/input'
const components = [
  Button,
  ButtonGroup,
  Input
]

const install = (Vue) => {
  Vue.use(Loading)
  Vue.use(Toast)
  components.forEach((component) => {
    Vue.component(component.name,component)
  })
}

export default install
