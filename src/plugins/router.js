import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/About.vue')
  },
  {
    path: '/docs/:language',
    name: 'Documentation',
    component: () => import('../views/Documentation')
  },
  {
    path: '/docs',
    name: 'Choose A Language',
    component: () => import('../views/ChooseLanguage')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
