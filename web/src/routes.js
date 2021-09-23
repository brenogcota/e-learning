import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/course/:course/lessons/:lesson/:id', component: Home }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router