import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import MemberLogin from '@/components/member/MemberLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'Test',
      component: Test
    },
    {
      path: '/member/login',
      name: 'login',
      component: MemberLogin
    }
  ]
})
