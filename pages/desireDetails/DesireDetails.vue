<template>
	<top-bar-container :returnAble="true" title="愿望详情">
		<template #content>
			<view class="title">
				<text style="font-weight: bold;padding-right: 80rpx;">标题</text>
				<input type="text" class="desireTitle" disabled :value="title" name="title" style="padding: 10rpx;">
			</view>
			<view class="details">
				<text style="font-weight: bold;padding-right: 20rpx;">愿望详情</text>
				<input type="text" class="desireDesc" disabled :value="desc" name="desc" style="padding: 10rpx;">
			</view>
			<view class="btn">
				<button class="change" @click="changeDesire"
					style="color:white;background-color:red;text-align: center;display: inline-block;float: left;width: 40%;border-radius: 40rpx;">修改</button>
				<button class="delete" @click="deleteDesire"
					style="color:white;background-color:red ;text-align: center:;display: inline-block;float: right;width: 40%;border-radius: 40rpx;">删除</button>
			</view>

			<form @submit="onchange">
				<view :class="{pop:!userFeedbackHidden}">
					<view :hidden="userFeedbackHidden" class="popup_content">
						<input type="text" name="id" style="display: none;">
						<view class="test">
							<label for="desire">标题</label>
							<input name="title" id="desire" type="text" :value="title" style="padding: 10rpx;">
						</view>
						<view class="test">
							<label for="reason">愿望详情</label>
							<textarea name="desc" id="reason" placeholder=" " :value="desc"
								style="padding: 10rpx;"></textarea>
						</view>
						<button form-type="submit" type="primary"
							style="color: white;background-color: red;border-radius: 40rpx;width: 100%;">确认修改</button>
					</view>
				</view>

			</form>
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
				id: "1",
				title: "想要一个书包",
				desc: "很想要一个书包",
				progress: false,
				userFeedbackHidden: true
			}
		},
		onLoad() {
			uni.$on('desireInfo', (res) => {
					this.title = res.title,
						this.desc = res.desc,
						this.progress = res.progress;
				}),
				uni.$emit('desireBefore')
		},
		onUnload() {
			//移除监听事件
			uni.$off('desireInfo')
		},
		methods: {
			//删除愿望
			deleteDesire() {
				//删除成功后返回心愿列表
				NavigateUtil.navigateTo('/pages/desireList/DesireList')
			},
			//表单修改愿望
			onchange(e) {
				this.title = e.detail.value.title;
				this.desc = e.detail.value.desc;
				this.userFeedbackHidden = true;
				// axios({
				// 	method: 'PUT',
				// 	params: {
				// 		"id": id,
				// 		"title": title,
				// 		"desc": desc,
				// 		'token': user.getToken() 
				// 	},
				// 	headers: {
				// 		'Content-Type': 'application/json',
				// 		'token': user.getToken() 
				// 	},
				// 	url: '/desire/modifyDesire'
				// }).then(res => {
				// 		console.log(res);
				// 		if (res.code === 400) return;
				// 		if (res.code === 200) {

				// 			this.title = e.detail.value.title;
				// 			this.desc = e.detail.value.desc;
				// 			this.userFeedbackHidden = true;
				// 		}
				// 	});
			},
			//点击修改按钮，弹出修改框
			changeDesire() {
				this.userFeedbackHidden = false
			}
		}
	}
</script>

<style scoped>
	.test {
		margin: 10rpx;
		padding: 40rpx;
	}

	.title {
		padding-bottom: 20rpx;
		margin: 20rpx;
		padding: 40rpx;
	}

	.details {
		padding-bottom: 20rpx;
		margin: 20rpx;
		padding: 40rpx;
	}

	.btn {
		text-align: center;
		padding: 40rpx;
	}

	nut-button {
		padding: 20rpx;
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