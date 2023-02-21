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
          v-model="code"
  		  />
  		  <div style="margin-top: 25%;">
  		    <nut-button size="large" type="primary" color="#E74343" @click="bind()">
  		        绑 定 账 号
  		    </nut-button>
  		  </div>
  
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js'
  import axios from '../../utils/http.js'
  // var userInfo = {
  //   id: "123456",
  //   name: "张三",
  //   type: 0,
  //   avatar: "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
  //   call_count: 13,
  //   call_time: 160
  // };
  
  export default {
    data(){
      return{
        code: ""
      }
    },
  	methods: {
  		bind: function() {
        console.log(this.code)
        console.log(user.getToken())
        axios({
          method: 'POST',
          url: 'https://ystrength-api.hokago.eu.org/account/bind/weixin',
          params: {
            "token": user.getToken(),
            "invite_code": this.code,
          }
        }).then(res =>{
          console.log(res)
          if(res.code === 200){//绑定成功
              user.setBind(true);
              let user_detail = res.data.user_detail_min;
              user.setDetail(user_detail);
              uni.$emit("updateState", {});
          }
        })
  		}
  	}
  }
</script>

<style>
</style>