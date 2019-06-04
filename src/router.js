import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageNotFound from '@/views/PageNotFound'
import EditPage from '@/views/EditPage'
import Profile from '@/views/Profile'

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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'page-not-found',
      component: PageNotFound
    },
    {
      path: '/add',
      name: 'add',
      component: EditPage
    },
    {
      path: '/edit/:id',
      name: 'editPage',
      component: EditPage
    },
    {
      path: '/profile',
      name: 'profilePage',
      component: Profile
    }

  ]
})
