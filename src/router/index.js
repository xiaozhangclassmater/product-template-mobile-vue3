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
                meta:{
                    pageLevel: 1
                },
                name: 'AppHome',
                component: () => import('@/views/Home/index.vue')
            },
            {
                path: 'productList',
                meta:{
                    pageLevel: 2
                },
                name: 'productList',
                component: () => import('@/views/Home/views/productList/index.vue')
            }
        ]
    },
    {
        path: '/Details',
        meta:{
            pageLevel: 1
        },
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
