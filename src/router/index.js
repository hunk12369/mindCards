import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})
export default router
