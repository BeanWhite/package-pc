import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },  
  {
    path:'/view',
    component:()=>import('../components/SWindow.vue'),
    children:[
      {
        path:'a',
        component:Home
      },
      {
        path:'home',
        component:()=>import('../views/Shome.vue')
      }
    ]
  },
  {
    path: '/about/:id?',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, 
  {
    path:'/test',
    component:()=>import('../views/Test.vue')
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'*',
    component: () => import('../views/Error.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
