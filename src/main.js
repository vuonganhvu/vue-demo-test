// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import constant from './shared/constant'
import Header from './components/Header'
import Footer from './components/Footer'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root = constant.apiEndpoint
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)

// Register toaster plugin
Vue.use(Toasted, {
  position: 'bottom-center',
  duration: 1500,
  closeOnSwipe: true
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
