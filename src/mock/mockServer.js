//使用mockjs 模拟的数据接口的模块

import Mock from 'mockjs'
import data from './data.json'

//注册路由
///api2/goods 路由器对应的路径
Mock.mock('/api/goods',{
  code:0,
  data:data.goods
})
Mock.mock('/api/ratings',{
  code:0,
  data:data.ratings
})
Mock.mock('/api/seller',{
  code:0,
  data:data.seller
})

