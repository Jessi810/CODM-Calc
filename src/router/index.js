import { createRouter, createWebHistory } from 'vue-router'
import STTK from '../components/STTK.vue'
import Cheatsheet from '../components/Cheatsheet.vue'

const routes = [
  {
    path: '/',
    name: 'STTK',
    component: STTK
  },
  {
    path: '/cheatsheet',
    name: 'Cheatsheet',
    component: Cheatsheet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
