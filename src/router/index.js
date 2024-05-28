import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginView from '@/views/LoginView.vue'
import CreateAccountView from '@/views/CreateAccountView.vue'
import AboutView from '@/views/AboutView.vue'
import HowWorkView from '@/views/HowWorkView.vue'
import PlansView from '@/views/PlansView.vue'
import PublicView from '@/views/PublicView.vue'
import HomeAppView from '@/views/HomeAppView.vue'
import DecksView from '@/views/DecksView.vue'
import StadisticsView from '@/views/StadisticsView.vue'
import HelpView from '@/views/HelpView.vue'
import SettingsView from '@/views/SettingsView.vue'



const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/login', name: 'LoginView', component: LoginView },
  { path: '/signup', name: 'CreateAccountView', component: CreateAccountView },
  { path: '/plans', name: 'PlansView', component: PlansView },
  { path: '/about', name: 'AboutView', component: AboutView },
  { path: '/howworks', name: 'HowWorkView', component: HowWorkView },
  { path: '/public', name: 'PublicView', component: PublicView },
  { path: '/login/home', name: 'HomeAppView', component: HomeAppView },
  { path: '/login/decks', name: 'DecksView', component: DecksView },
  { path: '/login/stadistics', name: 'StadisticsView', component: StadisticsView },
  { path: '/login/help', name: 'HelpView', component: HelpView },
  { path: '/login/settings', name: 'SettingsView', component: SettingsView },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
