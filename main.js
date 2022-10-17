
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from 'store/store.js'

//import { $http } from '@escook/request-miniprogram'
//import axios from 'utils/https.js'
import md5 from 'js-md5'

Vue.config.productionTip = false
Vue.prototype.$store = store;
//Vue.prototype.$axios = axios;
Vue.prototype.$md5 = md5;
App.mpType = 'app'

//uni.$http = $http

/*
$http.baseUrl = 'localhost:3000/api/'

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
}*/

// 封装弹框的方法
uni.$showMsg = function(title = '数据请求失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

uni.$getAuth = function(info){
  var time = new Date()
  //var time = 1665814186
  var tail = time % 100
  var auth = tail + md5(time + info)
  return auth
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