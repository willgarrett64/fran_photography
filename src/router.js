import FaqsPage from '@/views/FaqsPage'
import LandingPage from '@/views/LandingPage'
import WorkPage from '@/views/WorkPage'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/:work',
    name: 'WorkPage',
    component: WorkPage
  },
  {
    path: '/faqs',
    name: 'FaqsPage',
    component: FaqsPage
  }
]

const router = createRouter({
  history: createWebHistory('/fran_photography/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router