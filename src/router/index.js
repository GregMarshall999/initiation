import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import MessageContact from '@/views/MessageContact.vue'
import NotFound from '@/views/NotFound.vue'
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
    }, 
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound
    }
  ]
})




export default router
