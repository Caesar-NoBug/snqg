<template>
  <div class="login_view">
    <nut-cell size="large">
      <div style="height: 215px; margin-left: 17%;">
        <view class="text" style="height: 30%;">请您登录，以免影响正常使用</view>
        <nut-divider :hairline="false"/>
        <view class="login_button">
          <nut-button plain type="primary" @click="login()">
            <img 
              src="../../static/wechat_logo.png" 
              class="img">
              <view style="width: 20px;"></view>
              微信一键登录
          </nut-button>
        </view>
      </div>
    </nut-cell>
  </div>
 
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  
  import user from '../../store/user.js';
  import axios from '../../utils/http.js'

    export default {
    	methods: {
        
        login: function() {
          
          wx.login({
            onlyAuthorize: true,
            complete(resp) {
              const err = resp.errMsg;
              if(!err || err !== 'login:ok') return uni.$showMsg("登录失败！");
              let token = resp.code;
              console.log(resp)
              //console.log("baseUrl: " + axios.baseUrl);
              axios({
                method: 'POST',
                headers: {
                      'Content-Type': 'application/json'
                },
                url: "children/login",
                params: {
                  'code': token
                }
              }).then(res =>{
                console.log(res)
                if(res.code !== 400){
                  return;//登录失败
                } 
                else{
                    user.setToken(res.data.token);
                    if (res.code === 200){//登录成功
                      
                      user.setType(res.data.type);
                      user.setBind(true);
                      let user_detail = res.data;
                      user.setDetail(user_detail);
                    } 
                    uni.$emit("updateState", {});
                  }
              })
            }
          })
          
        
        }
    	}
    }
</script>

<style>
  .login_view{
    margin:0 auto;
    width: 86%;
    position: absolute;
    top: 32%;
    left: 7%
  }
  .text{
    text-align: center;
    line-height: 65px;
  }
  .line{
    width: 320px;
    height: 2px;
    background-color: gray;
  }
  .login_button{
    position: absolute;
    top: 50%;
    left: 25%;
  }
  .img{
    width: 20px;
    height: 20px;
  }
</style>