<template>
	<top-bar-container :returnAble="true" title="对接">
		<template #content>
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
		
	</top-bar-container>
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import ApiUtil from '../../utils/ApiUtil';
import user from '../../store/user.js';

	let time = setInterval(()=>{
	    console.log("轮询中...")
	}, 5000);
	
	
	export default {
		
		data() {
			// timer: null,
			return {
				name:"卞文静",
			}
		},
		methods: {
			// talk: function(){
			// 	NavigateUtil.navigateTo('/pages/');
			// }
			static: function(){
				let query = {
					token: user.getToken()
				}
				return ApiUtil.get("localhost:3000/call/state",query);
			}
		},
		// onShow: function () {
		//       const _this = this
		//        //定时器  函数赋值给timer  方便clearInterval（）使用
		//        _this.data.timer = setInterval(
		//          function () {
		//         _this.toClock1();        
		//         }, 6000);
		
		// 	    _this.setData({
		// 	      timer:_this.data.timer
		// 	    });
		//   },
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
