import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import LanButton from '../components/lan-button-view'
import LanLoading from '../components/lan-loading-view'
import LanToast from '../components/lan-toast-view'
import LanInput from '../components/lan-input-view'
import LanSwiper from '../components/lan-swiper-view'
import LanRadio from '../components/lan-radio-view'
import LanCheckbox from '../components/lan-checkbox-view'
import LanSwitch from '../components/lan-switch-view'

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
    },
    {
      path : '/lan-loading',
      name : 'lan-loading-view',
      component : LanLoading
    },
    {
      path : '/lan-toast',
      name : 'lan-toast-view',
      component : LanToast
    },
    {
      path : '/lan-input',
      name : 'lan-input-view',
      component : LanInput
    },
    {
      path : '/lan-swiper',
      name : 'lan-swiper-view',
      component : LanSwiper
    },
    {
      path : '/lan-radio',
      name : 'lan-radio-view',
      component : LanRadio
    },
    {
      path : '/lan-checkbox',
      name : 'lan-checkbox-view',
      component : LanCheckbox
    },
    {
      path : '/Lan-switch',
      name : 'lan-switch-view',
      component : LanSwitch
    }
  ]
})
