import { createRouter, createWebHistory } from 'vue-router';
import LoginPageView from '../views/LoginPageView/LoginPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: LoginPageView,
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: () => import('../views/LobbyView/LobbyView.vue'),
    },
  ],
});

export default router;
