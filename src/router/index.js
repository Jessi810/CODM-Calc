import { createRouter, createWebHistory } from 'vue-router'
import Changelog from '../components/Changelog.vue'
import Cheatsheet from '../components/Cheatsheet.vue'
import Credits from '../components/Credits.vue'
import Node from '../components/CWNode/Node.vue'
import STTK from '../components/STTK.vue'
import Validate from '../components/Validate.vue'

const routes = [
    {
        path: '/changelog',
        name: 'Changelog',
        component: Changelog
    },
    {
        path: '/cheatsheet',
        name: 'Cheatsheet',
        component: Cheatsheet
    },
    {
        path: '/credits',
        name: 'Credits',
        component: Credits
    },
    {
        path: '/',
        name: 'Home',
        redirect: '/cheatsheet',
        component: Cheatsheet
    },
    {
        path: '/node',
        name: 'Node',
        component: Node
    },
    {
        path: '/sttk',
        name: 'STTK',
        component: STTK
    },
    {
        path: '/validate',
        name: 'Validate',
        component: Validate
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
