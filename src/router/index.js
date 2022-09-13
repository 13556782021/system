
import { createRouter, createWebHashHistory } from "vue-router"

import Login from "../components/Login.vue"
import Home from "../components/Home.vue"

import User from "../components/menus/Users.vue"
import Rights from "../components/menus/Rights.vue"
import Goods from "../components/menus/Goods.vue"
import Orders from "../components/menus/Orders.vue"
import Settings from "../components/menus/Settings.vue"

import Userinfo from "../components/user/MyUserDetail.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home, children:[
            { path: '', component: User},
            { path: 'rights', component: Rights},
            { path: 'goods', component: Goods},
            { path: 'orders', component: Orders},
            { path: 'settings', component: Settings},
            { path: 'userinfo/:id', component: Userinfo, props: true},
        ]},
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path === '/home'){
        const token = localStorage.getItem('token')
        if(token) {
            next()
        }else{
            next('/login')
        }   
    }else (
        next()
        
    )
})

export default router


