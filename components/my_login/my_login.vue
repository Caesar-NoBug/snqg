<template>
  <div class="login_view">
    <nut-cell size="large">
      <div class="login_container">
        <view class="text" style="height: 30%;">请您登录，以免影响正常使用</view>
        <!-- <view class="line"></view> -->
		<nut-divider hairline="false"/>
        <view class="login_button">
          <nut-button plain type="primary">
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
</script>

<style>
	.login_container {
		/* min-height: 215px; */
		width: 100%;
		margin: 10px;
		/* display: flex; */
	}
  .login_view{
    /* margin:0 auto; */
    width: 86%;
    position: absolute;
    margin-top: 32%;
    margin-left: 7%
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
    /* position: absolute; */
	
	/* align-items: center; */
	margin-top: 10px;
	margin-left: 25%;
    /* top: 50%;
    left: 25%; */
  }
  .img{
    width: 20px;
    height: 20px;
  }
</style>