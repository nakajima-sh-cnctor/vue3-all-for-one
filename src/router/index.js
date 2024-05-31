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
        },
        {
          path: 'password-update',
          name: 'PasswordUpdate',
          component: () => import('../views/Auth/PasswordUpdateView.vue')
        },
        {
          path: 'account-switching',
          name: 'AccountSwitching',
          component: () => import('../views/Auth/AccountSwitchingView.vue')
        }
      ]
    },
    {
      path: '/admin/line',
      name: 'Line',
      component: () => import('../views/LINE/IndexView.vue'),
      children: [
        {
          path: 'setting',
          name: 'Setting',
          component: () => import('../views/LINE/SettingView.vue')
        },
        {
          path: 'auto-response',
          name: 'AutoResponse',
          component: () => import('../views/LINE/AutoResponse/ListView.vue')
        },
        {
          path: 'auto-response/create',
          name: 'AutoResponseCreate',
          component: () => import('../views/LINE/AutoResponse/CreateView.vue')
        },
        {
          path: 'broadcast',
          name: 'Broadcast',
          component: () => import('../views/LINE/Broadcast/ListView.vue')
        },
        {
          path: 'broadcast/detail',
          name: 'BroadcastDetail',
          component: () => import('../views/LINE/Broadcast/DetailView.vue')
        },
        {
          path: 'broadcast/create',
          name: 'CreateBroadcast',
          component: () => import('../views/LINE/Broadcast/CreateView.vue')
        },
        {
          path: 'broadcast/campaign',
          name: 'Campaign',
          component: () => import('../views/LINE/Broadcast/CampaignView.vue')
        },
        {
          path: 'broadcast/campaign/create',
          name: 'CampaignCreate',
          component: () => import('../views/LINE/Broadcast/CampCreateView.vue')
        },
        {
          path: 'message-item/rich-message',
          name: 'RichMessage',
          component: () => import('../views/LINE/MessageItem/RichMessageView.vue')
        },
        {
          path: 'message-item/rich-message/create',
          name: 'RichMessageCreate',
          component: () => import('../views/LINE/MessageItem/RichMessageCreateView.vue')
        },
        {
          path: 'message-item/rich-video',
          name: 'Richvideo',
          component: () => import('../views/LINE/MessageItem/RichvideoView.vue')
        }
      ]
    }
  ]
})

export default router
