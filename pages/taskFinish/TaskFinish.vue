<template>
	<top-bar-container :returnAble="true" title="任务完成">
		<template #content>
			<text class="goalFinish">恭喜你！已达成目标!</text>
			<text class="goalConfiguration">继续努力完成其他任务吧!</text>
		</template>
	</top-bar-container>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// onLoad() {
		// 	uni.$on('taskInfo',function(data){
		// 	       　　 this.taskDesc = data.taskDesc   
		// 			    })
		// }
	}
</script>

<style scoped>

	.goalFinish {
		color: #f4c900;
		font-size: 60rpx;
		margin-bottom: 10rpx;
		padding: 40rpx;
		text-align: center;
	}


	.goalConfiguration {
		font-size: 50rpx;
		color: firebrick;
		margin-bottom: 10rpx;
		padding: 40rpx;
		text-align: center;
	}

	text {
		padding-top: 20rpx;
		display: block;
	}
</style>