import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/joke',
      component: () => import('@/views/JokePage.vue'),
    },
    // -------------------- 404 - Not Found --------------------
    {
      path: '*',
      redirect: '/',
    },
  ],
})

export default router
