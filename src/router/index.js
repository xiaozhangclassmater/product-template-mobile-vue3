import AppLayout from '@/Layout/index.vue'
import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'
NProgress.configure({
    showSpinner: false
})
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
            pageLevel: 2
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

router.beforeEach((to , from , next) => {
    NProgress.start();
    next()
})

router.afterEach(() => {
    NProgress.done();
})
export default router
