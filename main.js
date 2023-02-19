import App from './App'

// #ifndef VUE3
import Vue from 'vue'
//import axios from './utils/http.js'
Vue.config.productionTip = false
App.mpType = 'app'

// uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
//   uni.showToast({
//     title,
//     duration,
//     icon: 'none'
//   })
// }

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif