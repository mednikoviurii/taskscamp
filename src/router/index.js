import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: () => import( '../views/Signup.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
