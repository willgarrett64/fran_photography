import LandingPage from '@/views/LandingPage'
import GalleryCollection from '@/views/GalleryCollection'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/gallery/:collection',
    name: 'Gallery',
    component: GalleryCollection
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