import Vue from 'vue'
import Router from 'vue-router'
import Terminal from '@/view/terminal/Terminal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Terminal',
      component: Terminal
    }
  ]
})
