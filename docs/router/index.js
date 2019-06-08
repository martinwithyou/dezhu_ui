import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
Vue.use(Router)

const requireRouter = require.context('./', true, /\.js/)

let routes = []

requireRouter.keys().forEach(fileName => {
  if (fileName === './index.js') return
  const requireConfig = requireRouter(fileName)
  const routerArr = requireConfig.default || requireConfig
  routes = [ ...routes, ...routerArr ]
})

const router = new Router({
  routes: [
    {
      path: '/zh-cn',
      component: () => import('../components/document'),
      children: routes
    },
    {
      path: '/home',
      component: () => import('../components/home')
    },
    {
      path: '/example',
      component: () => import('../components/example')
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/')
  } else {
    next()
  }
})

export default router