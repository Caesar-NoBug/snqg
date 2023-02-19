<template>
		<view class="mask">
				<view class="picture">
					<nut-avatar size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png">
					</nut-avatar>
				</view>	
				<view class="name">{{name}}邀请您视频通话</view>
				<view class="button">
					<nut-button type="primary"  size="large">查看详情</nut-button>
				</view>
		</view>			
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import axios from 'axios';
	import user from '../../store/user.js';
	
	export default {
		name:"call-state",
		data() {
			return {
				
			};
		},
		methods: {
			// talk: function(){
			// 	NavigateUtil.navigateTo('/pages/');
			// }
			state: function(){
				
				axios.request({
					method: 'GET',
					url: "https://ystrength.hokago.eu.org/call/state",
				}).then(res =>{
					if (res.code === 403) return;//参数错误或token失效
					else{
						if (res.code === 200){//操作成功
							return res.data;
						}
					}
					
				})
			}
		},
	}
</script>

<style>
.mask{
	margin:0 auto;
	width: 86%;
	position: absolute;
	top: 32%;
	left: 6.5%;
	background-color: cornsilk;
	border: 3rpx solid #faca82;
	border-radius: 10rpx;
}
.picture{
	margin-left: 39%;
}
.name{
	margin-left: 30%;
	margin-top: 5%;
}
.button{
	margin-left: 0%;
	margin-top: 5%;
}
</style>