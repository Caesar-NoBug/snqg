<template>
	<nut-overlay v-model:visible="show">
	    <div class="wrapper">
			<div class="content">
				<view class="picture">
					<nut-avatar size="large" :icon = "avatar">
					</nut-avatar>
				</view>	
				<view class="name">{{name}}邀请您视频通话</view>
				<view class="button">
					<div class="locaton">
						<nut-button type="danger" size="large" @click="goToCall()">查看详情</nut-button>
					</div>
				</view>
			</div>
		</div>
	</nut-overlay>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import axios from 'axios';
	import user from '../../store/user.js';
	import { reactive, toRefs } from 'vue';
	export default {
		name:"call-state",
		props: {},
		setup() {
		    const state = reactive({
				show: true
		    });
		    return { ...toRefs(state) };
		    },
		data() {
			return {
				// name:"张三",
				name,
				avatar
			};
		},
		methods: {
			// talk: function(){
			// 	NavigateUtil.navigateTo('/pages/');
			// }
      goToCall: function(){
        let param = {
          data: "callee"
        };
        NavigateUtil.navigateTo("/pages/chat_call/chat_call", param);
      },
			state: function(){
				
				axios.request({
					method: 'GET',
					url: "https://ystrength-api.hokago.eu.org/call/state",
					params: {
					  'token': user.getToken()
					},
				}).then(res =>{
					if (res.code === 403) return;//参数错误或token失效
					else{
						if (res.code === 200){//操作成功
							this.name = res.data.name;
							this.avatar = res.data.avatar;
						}
					}
					
				})
			}
		},
	}
</script>

<style>
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.content {
	/* display: flex; */
    width: 350px;
    height: 225px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: black;
  
}
.picture{
	margin-top: 2%;
	margin-left: 37%;
}
.name{
	margin-left: 30%;
	margin-top: 5%;
}
.locaton{
	width: 90%;
}
.button{
	margin-left: 9%;
	margin-top: 5%;
	margin-bottom: 3%;
}
</style>