//用户登录状态： 0，未登录  1，登录但未绑定 2，登录成功
var state = 0;

function setToken(newToken){
  uni.setStorageSync('token', newToken);
};

function getToken(){
  uni.getStorageSync('token') || '{}';
};

function setBind(isBind){
  uni.setStorageSync('isBind', isBind);
}

function getState(){
  let token = uni.getStorageSync('token') || '{}';
  let isBind = uni.getStorageSync('isBind') || false;
  if(token === '{}') return 0;
  else if(!isBind) return 1;
  else return 2;
}

function setType(type){
  uni.setStorageSync('type', type);
}

function getType(){
  return uni.getStorageSync('type') || 0;
}

export default {
  setToken,
  getToken,
  setBind,
  setType,
  getType,
  getState,
  }

// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state:{
//     token: uni.getStorageInfoSync('token') || '{}',
//     isBind: uni.getStorageInfoSync('isBind') || false
//   },
//   mutations:{
//     setToken(state, token) {
//       state.token = token;
//       uni.setStorageSync('token', state.token);
//     },
//     setBind(isBind) {
//       state.isBind = isBind;
//       uni.setStorageSync('isBind', isBind);
//     }
//   }
// })



// //   namespaced: true,
  
// //   state:() => ({
// //     token: uni.getStorageInfoSync('token') || '{}',
// //     isBind: uni.getStorageInfoSync('isBind') || false
// //   }),
  
// //   mutations: {
// //     setToken(state, token) {
// //       state.token = token;
// //       uni.setStorageSync('token', state.token);
// //     },
// //     setBind(isBind) {
// //       state.isBind = isBind;
// //       uni.setStorageSync('isBind', isBind);
// //     }
// //   }
// // }