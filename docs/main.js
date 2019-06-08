import 'babel-polyfill'
import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import Drawer from '../packages/drawer'

Vue.use(Drawer)

new Vue({
  el: '#docs',
  router,
  store,
  components: { App },
  template: '<App/>'
})