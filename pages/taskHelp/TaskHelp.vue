<template>
	<top-bar-container :returnAble="true" title="任务求助">
		<template #content>
		<text style="font-weight: bold;">选择任务类型</text>
		<picker class="pickers" @change="bindPickerChange" :value="index" :range="array" range-key="name">
			<view style="padding: 20rpx;background-color: white;display: inline-block;">{{ array[index].name }}</view>
			<view class="icons">
				<!-- <nut-icon name="dongdong" style="display: inline-block;"></nut-icon> -->
			</view>
		</picker>
		<view class="shuru">
			<textarea name="questionHelp" id="questionHelp" cols="40" rows="15" placeholder="在此处说明详细问题"></textarea>
		</view>
		<text style="font-weight: bold;padding-bottom: 10rpx;">任务描述</text>
		<text>{{detail}}</text>
		<view class="picLoad">
			<button @click="chooseImage" class="choose" style="height: 180rpx;width: 194rpx;display: inline-block;float: left;">
				<img src="../../static/add.png" style="height: 193rpx;width: 193rpx;">
			</button>
		</view>
		<view class="imgBox" >
			<image :src="taskUrl" style="height: 180rpx;width: 200rpx;"></image>
		</view>
		<view class="btnPosition">
		<button type="primary"
			style="color: white;background-color: red;border-radius: 40rpx;width: 100%;">发送</button>
		</view>
	</template>
	</top-bar-container>
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import axios from '../../utils/http.js';
import user from '../../store/user.js';
	export default {
		data() {
			return {
				array: [{ name: '数学任务' }, { name: '英语任务' }, { name: '语文任务' }, { name: '物理任务' }],
				index: 0,
				detail:'完成20道数学题',
				taskUrl:''
			}
		},
		methods:{
			chooseImage() {
				uni.chooseImage({
					success: (res) => {
						this.taskUrl = res.tempFilePaths
					}
				})
			},
			bindPickerChange: function(e) {
				this.index = e.detail.value;
			}
		},
		onLoad() {
			uni.$on('taskDetail', (res)=>{
				// console.log(res)	
					 this.detail = res.detail
			});
			uni.$emit('taskBefore')
		},
		onUnload() {
			uni.$off('taskDetail');
		}
	}
</script>

<style scoped>
	text{
		margin: 20rpx;
		padding: 20rpx;
		font-size: 40rpx;
		display: block;
	}
	.pickers {
		margin: 40rpx;
		border: 1rpx solid black;
			
	}
	.icons {
		display: inline-block;
		float: right;
		padding-top: 18rpx;
		padding-right: 10rpx;
		
	}
	.shuru {
		padding: 20rpx;
		margin: 20rpx;
	}
	.choose {
		margin: 30rpx;
	}
</style>