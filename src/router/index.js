import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes= [
    {
        path: '/',
        name: 'HelloWorld',
        component: () => import('@/components/HelloWorld.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/page/login.vue'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/page/home.vue'),
        meta: {
            title: '用户登录'
        }
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/page/search.vue'),
        meta: {
            title: '用户登录'
        }
    }
]

export default new Router({
  routes: routes
})
