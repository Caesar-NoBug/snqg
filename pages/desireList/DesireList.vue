<template>
	<view class="container">
		<!-- <navigator url="/pages/taskList/TaskList">测试一下任务界面！</navigator> -->
		<view class="btn">
			<button class="add" @click="addDesire"
				style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#66e400 ;text-align: right:;display: inline-block;float: right;">添加愿望</button>
		</view>
		<view class="desireList" v-for="item in desireList" @click="desireDetails" :data-index='item'>
			<view class="deisreDesc">
				<text class="desireTitle">{{item.title}}</text>
			</view>
			<view class="desireState">
				<text class="desireProgress">{{item.progress?"已完成":"等待完成"}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getDesire } from '../../utils/api';
	export default {
		data() {
			return {
				desireList: []
			}
		},
		onLoad() {
			//页面刷新获取数据
			getDesire().then(res=>{
				this.desireList = res.data.desireVoList || []
			})
		},
		methods: {
			//跳转到对应的心愿详情
			desireDetails(event) {
				uni.$on('before',()=>{
					uni.$emit('desireInfo', {
					        id: event.currentTarget.dataset.index.id,
							title: event.currentTarget.dataset.index.title,
							desc: event.currentTarget.dataset.index.desc,
							progress: event.currentTarget.dataset.index.progress
					            })
				});
				uni.navigateTo({
					url: '/pages/desireDetails/DesireDetails'
				})
			},
			//跳转到添加心愿页面
			addDesire() {
				uni.navigateTo({
					url: '/pages/desirePost/DesireDesc'
				})
			}
		},
		onUnload() {
			uni.$off('before')
		}
	}
</script>

<style>
	.container {
		display: grid;
		grid-gap: 1rpx;
		height: 400rpx;
		padding: 40rpx;
	}

	.desireList {
		border: 1rpx solid black;
		border-radius: 20rpx;
		padding: 10rpx;
		height: 60rpx;
		font-size: 45rpx;
	}

	.deisreDesc {
		display: inline-block;
	}

	.desireState {
		display: inline-block;
		float: right;
	}

	.btn {
		text-align: center;
	}
</style>