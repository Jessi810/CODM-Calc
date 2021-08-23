import { createRouter, createWebHistory } from 'vue-router'
import STTK from '../components/STTK.vue'
import Cheatsheet from '../components/Cheatsheet.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/cheatsheet',
    component: Cheatsheet
  },
  {
    path: '/cheatsheet',
    name: 'Cheatsheet',
    component: Cheatsheet
  },
  {
    path: '/sttk',
    name: 'STTK',
    component: STTK
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
