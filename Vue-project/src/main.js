import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './assets/css/index.css'
import './element/element'
import './assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
