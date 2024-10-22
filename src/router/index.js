import Syntaxe from '@/views/Syntaxe.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'Syntaxe', 
      component: Syntaxe
    }
  ]
})

export default router
