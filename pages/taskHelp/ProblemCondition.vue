<template>
	<view class="container">
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
		<view class="problemContent">
			<text>{{problemContent}}</text>
		</view>
		<view class="picLoad">
			<button @click="chooseImage" class="choose" style="height: 180rpx;width: 200rpx;" >
				<img src="/static/logo.png" alt="">
			</button>
		</view>
		<br>
		<view class="btnPosition">
		<button 
		class="send"
		@click="goHelp" 
		style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#0055ff ;text-align: right: ;" >发送</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: [{ name: '数学任务' }, { name: '英语任务' }, { name: '语文任务' }, { name: '物理任务' }],
				index: 0,
				problemContent:''
			};
		},
		mounted() {
			uni.$once('taskDesc',function(data){
			         　　 this.problemContent=data.detail
					    });
		},
		methods: {
			bindPickerChange: function(e) {
				this.index = e.detail.value;
			}
		}
	};
</script>

<style scoped>
	.container{
		padding: 40rpx;
	}
	.pickers {
		margin-top: 10rpx;
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
	}
	
</style>