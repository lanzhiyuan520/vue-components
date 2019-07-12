import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import LanButton from '../components/lan-button-view'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path : '/lan-button',
      name : 'lan-button-view',
      component : LanButton
    }
  ]
})
