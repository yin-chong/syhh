import Vue from 'vue'
import store from './stores'
import router from './router'
import App from './App.vue'
import processApiConfig from './api/api'
import apiConfig from './api/apiConfig/apiConfig'
import * as components from '@/components'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import './style/main.css'
import VueLazyload from 'vue-lazyload'

Vue.use(BootstrapVue)
Vue.use(VueLazyload)
Vue.prototype.$api = processApiConfig(apiConfig)

Object.values(components).forEach(compItem => {
  Vue.component(compItem.name, { ...compItem })
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
