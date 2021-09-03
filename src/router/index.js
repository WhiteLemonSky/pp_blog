import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import About from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/music',
    name: 'music',
    component: ()=>import('../views/music.vue')
  },
  {
    path: '*',

 component:()=>import('../views/error.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
