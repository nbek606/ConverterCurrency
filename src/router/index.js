import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import CurrencyList from '@/views/CurrencyList.vue'
import CurrencyConverter from '@/views/CurrencyConverter.vue'

import { RouteName } from './utils'

const routes = [
  {
    path: '/',
    name: RouteName.Home,
    component: Home
  },
  {
    path: '/list',
    name: RouteName.CurrencyList,
    component: CurrencyList
  },
  {
    path: '/converter',
    name: RouteName.CurrencyConverter,
    component: CurrencyConverter
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
