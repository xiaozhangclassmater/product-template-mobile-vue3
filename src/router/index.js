import AppLayout from '@/Layout/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: AppLayout,
    children:[
      {
        path: '',
        name: 'AppHome',
        component: () => import('@/views/Home/index.vue')
      }
    ]
  },
  {
    path: '/Details',
    children:[
      {
        path: '',
        name: 'Details',
        component: () => import('@/views/Details/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
