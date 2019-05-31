import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend/recommend'
import Singer from '@/pages/singer/singer'
import Search from '@/pages/search/search'
import Rank from '@/pages/rank/rank'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})
