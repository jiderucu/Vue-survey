import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/container/Main'
import Create from '@/container/Create'
import Result from '@/container/Result'
import Rice from '@/container/Rice'
import RiceStyle from '@/container/RiceStyle'
import Essay from '@/container/Essay'
import SettingUp from '@/container/SettingUp'
import Multi from '@/container/Multi'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/container/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/container/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/rice',
      name: 'Rice',
      component: Rice
    },
    {
      path: '/ricestyle',
      name: 'RiceStyle',
      component: RiceStyle
    },
    {
      path: '/essay',
      name: 'Rssay',
      component: Essay
    },
    {
      path: '/set',
      name: 'SettingUp',
      component: SettingUp
    },
    {
      path: '/multi',
      name: 'Multi',
      component: Multi
    }
  ]
})
global.router = router
global.Vue = Vue

export default router
