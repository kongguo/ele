//配置路由的路由器模块

import Vue from 'vue'
import Router from 'vue-router'
//引入路由组件
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(Router);
export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      redirect: goods
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ]
})
