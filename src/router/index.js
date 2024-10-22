import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import MessageContact from '@/views/MessageContact.vue'
import NotFound from '@/views/NotFound.vue'
import Profil from '@/views/Profil.vue'
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
      path: '/login', 
      name: 'Login', 
      component: Login, 
      meta: {
        titrePage: 'Se connecter'
      }
    },
    {
      path: '/profil', 
      name: 'Profil',
      component: Profil, 
      meta: {
        titrePage: 'Mon Profil'
      }
    },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound
    }
  ]
})

router.beforeEach((to, _, next) => {
  const titlePages = ['Login', 'Profil'];

  if(titlePages.includes(to.name)) {
    document.title = to.meta.titrePage;
  }
  else {
    document.title = 'Vue Initiation';
  }

  if(to.name === 'Profil' && (!localStorage.connecte || localStorage.connecte === 'false')) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
