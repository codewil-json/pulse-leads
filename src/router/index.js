import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Leads from '../pages/Leads.vue'
import Settings from '../pages/Settings.vue'
import Reports from '../pages/Reports.vue'
import Integrations from '../pages/Integrations.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/leads', name: 'Leads', component: Leads },
  { path: '/settings', name: 'Settings', component: Settings },
  { path: '/reports', name: 'Reports', component: Reports },
  { path: '/integrations', name: 'Integrations', component: Integrations },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
