import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import i18n from '@/i18n.js' 

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(require('vue-moment'));

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
