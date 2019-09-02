import Vue from 'vue'
import Router from 'vue-router'
import Install from '../components/install'
import Index from '@/components/index'
import LanButton from '../components/lan-button-view'
import LanLoading from '../components/lan-loading-view'
import LanToast from '../components/lan-toast-view'
import LanInput from '../components/lan-input-view'
import LanSwiper from '../components/lan-swiper-view'
import LanRadio from '../components/lan-radio-view'
import LanCheckbox from '../components/lan-checkbox-view'
import LanSwitch from '../components/lan-switch-view'
import LanRate from '../components/lan-rate-view'
import Lancalendar from '../components/lan-calendar-view'
import Lanprogress from '../components/lan-progress-view'
import Lanicon from '../components/lan-icon-view'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path:'/',
      redirect : '/components'
    },
    {
      path: '/components',
      name: 'index',
      component: Index,
      redirect : '/components/install',
      children : [
        {
          path : 'install',
          name : 'install',
          component : Install
        },
        {
          path : 'lan-button',
          name : 'lan-button-view',
          component : LanButton
        },
        {
          path : 'lan-loading',
          name : 'lan-loading-view',
          component : LanLoading
        },
        {
          path : 'lan-toast',
          name : 'lan-toast-view',
          component : LanToast
        },
        {
          path : 'lan-input',
          name : 'lan-input-view',
          component : LanInput
        },
        {
          path : 'lan-swiper',
          name : 'lan-swiper-view',
          component : LanSwiper
        },
        {
          path : 'lan-radio',
          name : 'lan-radio-view',
          component : LanRadio
        },
        {
          path : 'lan-checkbox',
          name : 'lan-checkbox-view',
          component : LanCheckbox
        },
        {
          path : 'lan-switch',
          name : 'lan-switch-view',
          component : LanSwitch
        },
        {
          path : 'lan-rate',
          name : 'lan-rate-view',
          component : LanRate
        },
        {
          path : 'lan-calendar',
          name : 'lan-calendar-view',
          component : Lancalendar
        },
        {
          path : 'lan-progress',
          name : 'lan-progress-view',
          component : Lanprogress
        },
        {
          path : 'lan-icon',
          name : 'lan-icon-view',
          component : Lanicon
        }
      ]
    }
  ]
})
