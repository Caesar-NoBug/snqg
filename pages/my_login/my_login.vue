<template>
  <div class="login_view">
    <nut-cell size="large">
      <div style="height: 215px; margin-left: 17%;">
        <view class="text" style="height: 30%;">请您登录，以免影响正常使用</view>
        <nut-divider :hairline="false"/>
        <view class="login_button">
          <nut-button plain type="primary" @click="change01()">
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
    
    export default {
    	methods: {
    		change01: function() {
    			NavigateUtil.navigateTo('/pages/my_bind/my_bind');
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