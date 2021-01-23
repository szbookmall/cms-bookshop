import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/index.vue'
import Reg from '../views/Reg/index.vue'
import User from '../views/User/user.vue'
import UserAdd from '../views/User/useradd.vue'
import Goods from '../views/Goods/goods.vue'
import GoodsAdd from '../views/Goods/goodsadd.vue'
import Order from '../views/Order/order.vue'
import Home from '../views/Home/index.vue'


Vue.use(VueRouter)

const routes = [
 {
    path: '/',
    redirect:'/login'
  },{
    path: '/home',
    name:'Home',
    component:Home,
    children:[
      {
        path: '/user',
        name: 'User',
        component: User
      },{
        path: '/useradd',
        name: 'UserAdd',
        component: UserAdd
      },{
        path: '/goods',
        name: 'Goods',
        component: Goods
      },{
        path: '/goodsadd',
        name: 'GoodsAdd',
        component: GoodsAdd
      },{
        path: '/order',
        name: 'Order',
        component: Order
      },
    ]
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/reg',
    name: 'Reg',
    component: Reg,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

export default router
