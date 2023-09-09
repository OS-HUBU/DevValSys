import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/page',
    name: 'page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/homePage.vue')
  },
  {
    path:"/",
    redirect:"/page"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
