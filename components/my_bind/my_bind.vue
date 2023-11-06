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
  		    <nut-button size="large" type="primary" color="#E74343" @click="bind(code)">
  		        登录
  		    </nut-button>
  		  </div>
  
  
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js'
  import axios from '../../utils/http.js'
import my_loginVue from '../my_login/my_login.vue';
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
        code: "",
		
      }
    },
  	methods: {
  		bind: function(inviteCode) {
			console.log(inviteCode);
			uni.login({
			  onlyAuthorize: true,
			  complete(resp) {
			    const err = resp.errMsg;
			    if(!err || err !== 'login:ok') return uni.$showMsg("登录失败！");
			    let token = resp.code;
			    //console.log("baseUrl: " + axios.baseUrl);
			    console.log(resp)
			    axios({
			      method: 'POST',
			      headers: {
			        'Content-Type': 'application/json'
			      },
			      url: "children/login",
			      params: {
			        'code': token,
					'inviteCode' : inviteCode,
			      }
			    }).then(res =>{
			      if(res.code === 400){
					
				  }//登录失败
			        else{
			          user.setToken(res.data.token);
			          if (res.code === 200){//登录成功
					  console.log(200);
					  console.log(res);
			            user.setType(res.data.role);
			            user.setBind(true);
			            let user_detail = res.data;
			            user.setDetail(user_detail);
						uni.$emit("updateState", {});
						uni.reLaunch({
							url:"../../pages/main/main"
						})
			          } 
					  
			        }
			    })
			  }
			})
			
  		}
  	}
  }
</script>

<style>
</style>