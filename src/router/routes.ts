import { RouteRecordRaw } from 'vue-router'
import * as path from 'path'

// 配置路由
const routes: Array<RouteRecordRaw> = [
  // home路由
  {
    path: '/home',
    component: ()=>import('@/views/Home/index.vue'),
  },
  // info路由
  {
    path:'/info',
    component: ()=>import('@/views/Info/index.vue'),
    // meta: { show: true },
  },
  {
    path:'/paper',
    component: ()=>import('@/views/Paper/index.vue'),
  },
  // 重定向到首页
  {
    path: '/',
    redirect: '/home'
  }
]
export  default routes
