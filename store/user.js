import axios from '../utils/http.js'
//用户登录状态： 0，未登录  1，登录但未绑定 2，登录成功
var state = 0; 

function setToken(newToken){
  uni.setStorageSync('token', newToken);
};

function getToken(){
  return uni.getStorageSync('token') || '{}';
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

function check(){
  let token =  uni.getStorageSync("token");
  if(token){
    axios({
      method: "GET",
      url: "https://ystrength-api.hokago.eu.org/account/detail/min",
      params: {
        "token": token,
      }
    }).then(res => {
      if(res.code === 200){
        if(getDetail())
          setDetail(res.data.user_detail);
      }else if(res.code === 403){
        setToken("");
        setBind(false);
      } 
    })
  } 
}

function getDetail(){
  return JSON.parse(uni.getStorageSync("detail") || null);
}

function setDetail(user_detail){
  uni.setStorageSync("detail", JSON.stringify(user_detail));
}

export default {
  setToken,
  getToken,
  setBind,
  setType,
  getType,
  getState,
  getDetail,
  setDetail,
  check,
  }