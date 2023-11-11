<template>
	<top-bar-container :returnAble="true" title="添加愿望">
		<template #content>
			<form @submit="onsubmit">
				<view class="test">
					<label for="desire">请告诉我们你想要什么：</label>
					<input name="title" type="text">
				</view>
				<view class="test">
					<label for="reason">我们也需要听一下你的理由：</label>
					<textarea name="desc" placeholder=" "></textarea>
				</view>
				<button form-type="submit" type="primary"
					style="color: white;background-color: red;border-radius: 40rpx;width: 100%;">让愿望起飞！</button>
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
				title: '',
				desc: ''
			}
		},
		methods: {
			//添加心愿
			onsubmit() {
				axios({
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'token': user.getToken() 
					},
					url: "/desire/addDesire",
					params: {
						'desc':this.desc,
						'title': this.title,
						'token': user.getToken() 
					}
				}).then(res => {
					console.log(res);
					if (res.code === 400) {
						console.log(400);
					}
					if (res.code === 200) {
						console.log(200);
						//添加心愿成功，跳转回心愿列表
						NavigateUtil.navigateTo('/pages/desireList/DesireList')
					}
				});
			}
		}

	}
</script>

<style scoped>
	.image {
		text-align: center;
	}

	.test {
		padding: 40rpx;
		border: 1rpx solid #f8f8f8;
	}

	label {
		font-weight: bold;
	}
</style>