<template>
	<view class="container">
		<form @submit="onsubmit">
		<input type="text" name="id" style="display: none;">
		<input type="text" name="changePoint" style="display: none;">
		<input type="text" name="childId" style="display: none;">
		<text class="introduction">任务说明：</text>
		<br>
		<text>{{detail}}</text>
		<br>
		<text class="introduction">已完成进度：</text>
		<br>
		<progress :percent="progression" show-info />
		<br>
		<view class="taskHelp">
			<view class="help">
				<text>遇到困难？</text>
			</view>
			<button @click="goHelp"
				class="help"
				style="height: 55rpx;line-height: 50rpx;font-size: 40rpx;color:red;background-color:#f4c900 ;">向志愿者求助</button>
		</view>
		<text style="font-weight: bold;">上传完成情况</text>
		<view class="introduction">
			<textarea name="detail" id="detail" cols="30" rows="6" placeholder="在此填写文字说明"></textarea>
		</view>
		<view class="picLoad">
			<button @click="chooseImage" class="choose" style="height: 180rpx;width: 200rpx;">
				<img src="/static/logo.png" alt="">
			</button>
		</view>
		<view class="imgBox" v-for="(item, index) in task.taskUrl" :key="index">
			<image :src="item" style="height: 180rpx;width: 200rpx;display: inline-block;"></image>
		</view>
		<view class="btnPosition">
			<button class="tijiao" form-type="submit"
				style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#66e400 ;text-align: right: ;">提交</button>
		</view>
		</form>
	</view>
</template>

<script>
	import {
		sendTask
	} from '../../utils/api';
	export default {
		data() {
			return {
					taskUrl: [],
					id: '',
					detail: '',
					progression: '',
					taskUrl: '',
					title: '',
					type: '',
					childId:'',
					changePoint:'',
					detail:''
			}
		},
		onLoad() {
			uni.$on('taskInfo', (data)=> {
					this.id = data.taskDetails.id,
					this.detail = data.taskDetails.detail,
					
			}),
			uni.$emit('front')
		},
		onUnload() {
			//移除监听事件
			uni.$off('taskInfo')
		},
		methods: {
			goHelp() {
				uni.navigateTo({
					url: '/pages/taskHelp/taskHelp'
				})
			},
			chooseImage() {
				uni.chooseImage({
					success: (res) => {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			onsubmit(e) {
				sendTask(e.detail.value).then(res => {
					if (res.code == 200) {
						uni.showToast({
								title: '任务提交成功',
								icon: 'success',
								duration: 1000
							}),
						//任务完成后进入任务完成界面
						uni.navigateTo({
							url: '/pages/taskFinish/TaskFinishCondition'
						})
					}
				})
			}
			
		}

	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-gap: 1rpx;
		background-color: #f8f8f8;
		height: 400rpx;
		padding: 40rpx;
	}

	.introduction {
		font-weight: bold;
	}

	.help {
		color: blue;
		font-size: 35rpx;
		font-weight: bold;
		text-align: right;
		display: inline-block;
	}

	.taskHelp {
		text-align: right;
	}

	.help {
		display: inline-block;
		margin-top: 50rpx;
		padding-right: 20rpx;
	}
	
	.btnPosition .picLoad{
		text-align: center;
	}
	.tijiao {
		float: right;
	}

	.choose{
		float: left;
	}
	.introduction {
		padding-left: 35rpx;
		padding-top: 25rpx;
	}
</style>