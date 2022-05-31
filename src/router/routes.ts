import { RouteRecordRaw } from 'vue-router'

// 配置路由
const routes: Array<RouteRecordRaw> = [
  // 首页路由
  // {
  //   path: '/home',
  //   component: ()=>import('@/views/Home/index.vue'),
  //   meta: { show: true }
  // },
  // 联系路由
  // {
  //   // 指定参数可传可不传，则在这个参数后面加个?
  //   path: '/contact',
  //   component: ()=>import('@/views/Contact/index.vue'),
  //   meta: { show: true },
  // },

  // 重定向到首页
  {
    path: '/',
    redirect: '/home'
  }
]
export  default routes
