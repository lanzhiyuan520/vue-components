import lanSwiper from './src/lan-swiper'

lanSwiper.install = Vue => {
  Vue.component(lanSwiper.name,lanSwiper)
}

export default lanSwiper
