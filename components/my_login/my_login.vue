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
  import ApiUtil from '../../utils/ApiUtil';
  import user from '../../store/user.js';
  
    export default {
    	methods: {
        
    		login: function() {
          let _this = this;
          uni.login({
            onlyAuthorize: true,
            complete(resp) {
              const err = resp.errMsg;
              if(!err || err !== 'login:ok') return uni.$showMsg("登录失败！");
              let query = {
                token: resp.code
              }
      
              user.setToken("token");
              uni.$emit("updateState", {});
              //调api时打开下面的代码并删除上两行代码
              // let res = ApiUtil.post("localhost:3000/account/login/weixin", query);
              // if(res.code === 400) return;//登录失败
              // else{
              //   user.setToken(res.data.token);
              //   user.setType(res.data.type);
              //   if (res.code === 200) user.setBind(true); //登录成功
              // }
          
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