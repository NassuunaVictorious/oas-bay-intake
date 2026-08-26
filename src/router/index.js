import { createRouter, createWebHistory } from 'vue-router'

import Intake from '../views/IntakeView.vue'
import Bays from '../views/BaysView.vue'
import Parts from '../views/PartsView.vue'
import Reports from '../views/ReportsView.vue'
import Job from '../views/JobView.vue'
import NotFound from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/intake',
    name: 'Intake',
    component: Intake
  },
  {
    path: '/bays',
    name: 'Bays',
    component: Bays
  },
  {
    path: '/parts',
    name: 'Parts',
    component: Parts
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports
  },
  {
    path: '/job/:plate',
    name: 'Job',
    component: Job
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router