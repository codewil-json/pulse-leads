import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from './pages/DashboardPage.vue'
import LeadsPage from './pages/LeadsPage.vue'
import SettingsPage from './pages/SettingsPage.vue'
import ReportsPage from './pages/ReportsPage.vue'
import IntegrationsPage from './pages/IntegrationsPage.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: DashboardPage },
  { path: '/leads', name: 'Leads', component: LeadsPage },
  { path: '/settings', name: 'Settings', component: SettingsPage },
  { path: '/reports', name: 'Reports', component: ReportsPage },
  { path: '/integrations', name: 'Integrations', component: IntegrationsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
