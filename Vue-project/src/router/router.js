import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login.vue'
import register from '../components/register.vue'
import success from '../components/success.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        {path: '/',redirect: '/login'},
        {path: '/login',component: login},
        {path: '/register',component: register},
        {path: '/success',component: success}
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path==='/login') return next()
    if(to.path === '/register') return next()
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})


export default router