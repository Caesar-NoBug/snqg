import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
import request from './utils/http.js'
Vue.prototype.$request = request

// #ifdef VUE3
import { createSSRApp } from 'vue'
import request from '/utils/http.js'
Vue.prototype.$request = request
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif