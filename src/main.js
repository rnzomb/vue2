import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import i18n from '@/i18n.js' 
import axios from 'axios'
import VueAxios from 'vue-axios'

import moment from 'vue-moment'


Vue.use(BootstrapVue)
Vue.use(moment)
Vue.use(VueAxios, axios)

axios.defaults.headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
};

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
