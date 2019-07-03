import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import User from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"首页"
      }
    },
    {
      path:"/user/:id",
      name:'User',
      component: User,
      meta:{
        title:"个人主页"
      }
    }
  ]
})
