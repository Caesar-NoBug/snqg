
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from 'store/store.js'

//TODO: 确定请求网站
//import { $http } from '@escook/request-miniprogram'

Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'

/*
uni.$http = $http

//TODO: 登录Url需设置
$http.baseUrl = ''

$http.beforeRequest = function(options) {
  uni.showLoading({
    title: '数据加载中...'
  })
  
  if(options.url.indexof('/my/') != -1) {
    options.header = { 
      Authorization: store.state.m_user.token
    }
  }
}

$http.afterRequest = function(){
  uni.hideLoading()
}
*/

// 封装弹框的方法
uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif