import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import NotFound from '@/pages/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/threads/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
