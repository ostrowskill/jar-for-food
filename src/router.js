import Vue from 'vue'
import Router from 'vue-router'

// component imports
import Home from './components/core/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/views/about.vue')
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('./components/views/comment.vue')
    },
  ]
})
