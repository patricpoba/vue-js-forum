import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import PageThreadShow from '@/pages/PageThreadShow'
import NotFound from '@/pages/NotFound'
import Forum from '@/components/Forum'
import ForumList from '@/components/ForumList'
import Category from '@/pages/PageCategory'
import Profile from '@/pages/PageProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/threads/:id',
      name: 'PageThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '/forum',
      name: 'ForumList',
      component: ForumList
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
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
