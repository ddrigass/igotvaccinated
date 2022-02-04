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
    path: '/stat',
    name: 'Statistic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Statistic.vue')
  },
  {
    path: '/vaccinated',
    name: 'Vaccinated',
    component: () => import(/* webpackChunkName: "Vaccinated" */ '../views/Vaccinated.vue'),
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "New" */ '../views/New.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
