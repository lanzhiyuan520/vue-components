import Vue from 'vue'
import '../css/icon.css'
import Button from '../../packages/button'
import ButtonGroup from '../../packages/button-group'
import Loading from '../../packages/loading'
import Toast from '../../packages/toast'
import Input from '../../packages/input'
import Swiper from '../../packages/swiper'
import SwiperItem from '../../packages/swiper-item'
import Radio from '../../packages/radio'
import Checkbox from '../../packages/checkbox'
import CheckboxGroup from '../../packages/checkbox-group'
import Switch from '../../packages/switch'
import Rate from '../../packages/rate'

const components = [
  Button,
  ButtonGroup,
  Input,
  Swiper,
  SwiperItem,
  Radio,
  Checkbox,
  CheckboxGroup,
  Switch,
  Rate
]

const install = (Vue) => {
  Vue.use(Loading)
  Vue.use(Toast)
  components.forEach((component) => {
    Vue.component(component.name,component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  lanButton : Button,
  lanButtonGroup : ButtonGroup,
  lanInput : Input,
  lanSwiper : Swiper,
  lanSwiperItem : SwiperItem,
  lanRadio : Radio,
  lanCheckbox : Checkbox,
  lanCheckboxGroup : CheckboxGroup,
  lanSwitch : Switch,
  lanRate : Rate
}
