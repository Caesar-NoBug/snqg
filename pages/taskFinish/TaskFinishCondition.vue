<template>
	<view class="container">		
	<text class="goalFinish">恭喜你！已达成目标</text>
	<br>
	<text class="goalDesc">{{taskDesc}}</text>
	<br>
	<text class="goalConfiguration">继续努力完成其他任务吧!</text>	
	</view>	
</template>

<script>
	export default {
		data(){
			return{
				taskDesc:''
			}
		},
		mounted() {
			uni.$on('taskInfo',function(data){
			       　　 this.taskDesc = data.taskDesc   
					    })
		}
	}
</script>

<style scoped>
	.container {
		display: grid;
		padding: 40rpx;
		background-color:#f8f8f8 ;
		text-align: right;
		font-weight: bold;
	}

	.goalFinish {
		color: #f4c900;
		font-size: 40rpx;
		margin-bottom: 10rpx;
	}
	.goalDesc {
		font-size: 30rpx;	
		padding-right: 40rpx;	
		margin-bottom: 10rpx;
	}
	.goalConfiguration {
		font-size: 30rpx;
		color: firebrick;
		margin-bottom:  10rpx;
	}
	text {
		padding-top: 20rpx;
	}
</style>