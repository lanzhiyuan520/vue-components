// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import componentsIndex from './index'
import bus from './utils/bus'

Vue.use(componentsIndex)

import 'markdown-it-vue/dist/markdown-it-vue.css'

Vue.prototype.$bus = bus
Vue.config.productionTip = false




new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
