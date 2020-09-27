import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'normal',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/alegre',
      name: 'alegre',
      component: () => import('@/views/JokePage.vue'),
    },
    {
      path: '/triste',
      name: 'triste',
      component: () => import('@/views/SadPage.vue'),
    },
    // -------------------- 404 - Not Found --------------------
    {
      path: '*',
      redirect: '/',
    },
  ],
})

export default router
