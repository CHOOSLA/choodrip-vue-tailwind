import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Main from '@/views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: '/', name: 'Main', component: Main },
        {
          path: '/login',
          name: 'Login',
          component: Login,
        },
      ],
    },
  ],
})

// 여기서 프로필 설정이 들어가기 전 인증확인해야함

export default router
