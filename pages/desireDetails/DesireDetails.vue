<template>
	<view class="container">
		<view class="title">
			<text style="font-weight: bold;padding-right: 80rpx;">标题</text>
			<input type="text" class="desireTitle" disabled :value="title" name="title">
		</view>
		<view class="details">
			<text style="font-weight: bold;padding-right: 20rpx;">愿望详情</text>
			<input type="text" class="desireDesc" disabled :value="desc" name="desc">
		</view>
		<view class="state">
			<text style="font-weight: bold;padding-right: 20rpx;">当前状态</text>
			<text class="desireProgress" name="progress">{{desire.progress?"已完成":"等待完成"}}</text>
		</view>
		<view class="btn">
			<button class="change" @click="changeDesire"
				style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#66e400 ;text-align: right ;display: inline-block;float: left;">修改</button>
			<button class="delete" @click="deleteDesire"
				style="height: 55rpx;line-height: 50rpx;font-size: 35rpx;color:white;background-color:#66e400 ;text-align: right:;display: inline-block;float: right;">删除</button>
		</view>

		<form @submit="onchange">
			<view :class="{pop:!userFeedbackHidden}">
				<view :hidden="userFeedbackHidden" class="popup_content">
					<input type="text" name="id" style="display: none;">
					<view class="test">
						<label for="desire">请告诉我们你想要什么：</label>
						<input name="title" id="desire" type="text" :value="title">
					</view>
					<view class="test">
						<label for="reason">我们也需要听一下你的理由：</label>
						<textarea name="desc" id="reason" placeholder=" " :value="desc"></textarea>
					</view>
					<picker class="pickers" @change="bindPickerChange" :value="type" :range="array" range-key="name"
						name="type">
						<view style="padding: 20rpx;background-color: white;display: inline-block;">
							{{ array[type].name }}
						</view>
					</picker>
					<button form-type="submit"
						style="text-align: center;color: white;background-color: rebeccapurple;">确认修改！</button>
				</view>
			</view>

		</form>

		</form>
	</view>
</template>

<script>
	import {
		removeDesire,
		changeDesire
	} from '../../utils/api';
	export default {
		data() {
			return {
				id: "",
				title: "",
				desc: "",
				progress: false,
				userFeedbackHidden: true
			}
		},
		onLoad() {
			uni.$on('desireInfo', (data)=> {
				this.id = data.desireDetails.id,
				this.title = data.desireDetails.title,
				this.desc = data.desireDetails.desc,
				this.progress = data.desireDetails.progress;
			}),
			uni.$emit('before')
		},
		onUnload() {
			//移除监听事件
			uni.$off('desireInfo')
		},
		methods: {
			//删除愿望
			deleteDesire() {
				uni.showModal({
					title: '提示',
					content: '确认删除该愿望？',
					success: function(res) {
						if (res.confirm) {
							removeDesire(this.id).then(res => {
								if (res.code == 200) {
									uni.showModal({
											title: '成功删除',
											icon: 'success',
											duration: 1000
										}),
										//删除成功后返回心愿列表
										uni.navigateTo({
											url: '/pages/desireList/DesireList'
										});
								}
							})
						} else if (res.cancel) {
							console.log('用户删除取消');
						}
					}
				});
			},
			//表单修改愿望
			onchange(e) {
				modifyDesire(e.detail.value).then(res => {
						if (res.code == 200) {
							uni.showToast({
								title: '成功修改',
								icon: 'success',
								duration: 1000
							}),
							this.title = e.detail.value.title;
							this.desc = e.detail.value.desc;
							this.progress = e.detail.value.progress;
							this.userFeedbackHidden = true;
						}

					})
			},
			//点击修改按钮，弹出修改框
			changeDesire(){
				this.userFeedbackHidden = false
			}
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

	.title {
		padding-bottom: 20rpx;
	}

	.details {
		padding-bottom: 20rpx;
	}

	.btn {
		text-align: center;
	}

	.pop {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 9998;
	}

	.popup_content {
		position: fixed;
		width: 550upx;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 30upx;
		padding: 40upx;
		border-radius: 20upx;
		background-color: #fff;
		z-index: 9999;
	}
</style>