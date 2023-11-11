<template>
	<view class="container">
		<view class="btn">
			<button class="add" @click="addTask"
				style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#66e400 ;text-align: right:;display: inline-block;float: right;">添加任务</button>
		</view>
		<view class="taskList" v-for="item in taskList" @click="taskDetails" :data-index='item'>
			<view class="taskDesc">
				<text class="taskTitle">{{item.title}}</text>
			</view>
			<view class="taskState">
				<!-- <text class="taskProgress">{{item.progress?"已完成":"等待完成"}}</text> -->
			</view>
		</view>
	</view>
</template>

<script>
import { getTask } from '../../utils/api';
	export default {
		data() {
			return {
				id:'',
				detail:'',
				taskFinishTime:'',
				taskUrl:'',
				title:'',
				type:'',
				childId:1
			}
		},
		onload() {
			//页面刷新获取数据
			getInfo(){
				getTask(childId).then(res=>{
					this.taskList = res.data.taskVoList
				})
			}
		},
		methods: {
			//跳转到对应的任务详情
			taskDetails(event) {
				uni.$on('front',()=>{
					uni.$emit('taskInfo', {
					        id: event.currentTarget.dataset.index.id,
							title: event.currentTarget.dataset.index.title,
							detail: event.currentTarget.dataset.index.detail,
							
					            })
				});
				uni.navigateTo({
					url: '/pages/taskDetails/TaskDesc'
				})
			},
			//跳转到任务列表（暂无）
			addDesire() {
				uni.navigateTo({
				});
			},
		
		},
		onUnload() {
			uni.$off('front')
		}
	}
</script>

<style scoped>
	.container {
		display: grid;
		grid-gap: 1rpx;
		height: 400rpx;
		padding: 40rpx;
	}
	
	.taskList {
		border: 1rpx solid black;
		border-radius: 20rpx;
		padding: 10rpx;
		height: 60rpx;
		font-size: 45rpx;
	}
	.taskDesc {
		display: inline-block;
	}
	.taskState {
		display: inline-block;
		float: right;
	}
	.btn{
		text-align: center;
	}
</style>