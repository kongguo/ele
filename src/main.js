//引入vue
import Vue from 'vue'
//引入路由
import router from './router'
//引入根组件app
import app from './app.vue'

import './mock/mockServer'

import "./common/styuls/index.styl"


new Vue({
  el:'#app',
  render: h => h(app),
  router
})
