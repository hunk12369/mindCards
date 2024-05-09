import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginView from '@/views/LoginView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'
import AboutView from '@/views/AboutView.vue'
import PlansView from '@/views/PlansView.vue'


const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginView', component: LoginView },
  { path: '/signup', name: 'CreateAccountView', component: CreateAccountView },
  { path: '/plans', name: 'PlansView', component: PlansView },
  { path: '/about', name: 'AboutView', component: AboutView },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
