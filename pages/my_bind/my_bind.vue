<template>
  <div style="margin-top: 10%; color: #E74343; font-size: 24px; text-align: center; font-weight: bold;">
    账 号 绑 定
  </div>
  <div style="margin: 10%;color: gray; font-size: 18px; text-align: center;">
     检测到您还没有绑定明光守护账号 为了确保服务正常，请输入提供给您的邀请码 
  </div>
  <nut-divider></nut-divider>
  <nut-input 
      label="邀请码" 
      placeholder="请输入邀请码" 
      max-length="6"
    />
    <div style="margin-top: 25%;">
      <nut-button size="large" type="primary" color="#E74343" @click="change01()">
          绑 定 账 号
      </nut-button>
    </div>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  var userInfo = {
    id: "123456",
    name: "张三",
    type: 0,
    avatar: "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
    call_count: 13,
    call_time: 160
  };
  
  export default {
  	methods: {
  		change01: function() {
  			NavigateUtil.navigateTo('/pages/my_detail/my_detail', userInfo);
  		}
  	}
  }
</script>

<style>
</style>