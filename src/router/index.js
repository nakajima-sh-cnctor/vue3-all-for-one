import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signin',
      name: 'Auth',
      component: () => import('../views/Auth/IndexView.vue'),
      children: [
        {
          path: '',
          name: 'Signin',
          component: () => import('../views/Auth/SigninView.vue')
        },
        {
          path: 'authentication-code-sending',
          name: 'AuthenticationCodeSending',
          component: () => import('../views/Auth/AuthenticationCodeSendingView.vue')
        }
      ]
    }
  ]
})

export default router
