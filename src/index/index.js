import Button from '../../packages/button'
import ButtonGroup from '../../packages/button-group'

const components = [
  Button,
  ButtonGroup
]

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name,component)
  })
}

export default install
