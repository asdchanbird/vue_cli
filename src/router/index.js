import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    // {
    //     path: '/news',
    //     name: 'news',
    //     component: () => import( '../views/NewsView.vue'),
    //     // children: [
    //     //     {
    //     //         path: 'info',
    //     //         component: ()=>import('@/views/NewsInfo.vue'),
    //     //     }
    //     // ]
    // },
    {
        path: '/news/:id',
        name: 'news',
        component: () => import( '../views/NewsView.vue'),
        // children: [
        //     {
        //         path: 'info',
        //         component: ()=>import('@/views/NewsInfo.vue'),
        //     }
        // ]
    },
    {
        path: '/product',
        name: 'product',
        component: () => import( '../views/ProductView.vue')
    },
    {
        path: '/exampleBtn',
        name: 'exampleBtn',
        component: () => import( '../views/ProductView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
