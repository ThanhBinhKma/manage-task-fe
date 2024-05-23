import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Auth/LoginView.vue'
import RegisterView from '../views/Auth/RegisterView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { isPublic: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { isPublic: true },
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.isPublic) {
    next();
    return;
  }
  next({ path: "/login" });
})
export default router
