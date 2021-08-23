import { createRouter, createWebHistory } from 'vue-router'
import STTK from '../components/STTK.vue'
import Cheatsheet from '../components/Cheatsheet.vue'
import Node from '../components/CWNode/Node.vue'

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
  },
  {
    path: '/node',
    name: 'Node',
    component: Node
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
