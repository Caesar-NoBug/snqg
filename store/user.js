
function setToken(newToken){
  uni.setStorageSync('token', newToken);
};

function getToken(){
  return uni.getStorageSync('token') || '{}';
}

function setBind(isBind){
  uni.setStorageSync('isBind', isBind);
}

function getBind(){
  return uni.getStorageSync('isBind') || false;
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
  getBind,
  setType,
  getType,
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