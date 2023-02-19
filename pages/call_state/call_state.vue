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
						<nut-button type="primary"  size="large" plain>查看详情</nut-button>
					</view>
			</view>			
		</template>
		
	</top-bar-container>
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import axios from 'axios';
import user from '../../store/user.js';

	
	worker.onmessage = e =>{
		if(data.calling === 1){
			let time = setInterval(()=>{
				
			}, 5000);
		}
		else{
			return 0;
		}
	};
	
	
	export default {
		
		data() {
			// timer: null,
			return {
				
			}
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
	background-color: #fabcb1;
	border: 3rpx solid #fa2c19;
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
