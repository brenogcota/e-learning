import * as VueRouter from 'vue-router'

import Home from './components/Home.vue'
import LessonPage from './components/LessonPage.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/course/:course/lessons/:lesson/:id', component: LessonPage },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router