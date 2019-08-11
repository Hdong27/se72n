import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/views/HomePage'
import Portfoliopage from '@/views/PortfolioPage'
import Postpage from '@/views/PostPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/portfolio',
      name: 'Portfoliopage',
      component: Portfoliopage
    },
    {
      path: '/post',
      name: 'Post',
      component: Postpage
    }
  ]
})
