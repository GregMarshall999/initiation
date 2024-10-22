import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import MessageContact from '@/views/MessageContact.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'Home', 
      component: Home
    }, 
    {
      path: '/contact', 
      name: 'Contact', 
      component: Contact
    },
    {
      path: '/messageContact/:message', 
      name: 'Message', 
      component: MessageContact, 
      props: true
    }
  ]
})

export default router
