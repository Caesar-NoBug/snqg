<template>
	<view class="container">
		<form @submit="onsubmit">
			<view class="test">
				<label for="desire">请告诉我们你想要什么：</label>
				<input name="title"type="text">
			</view>
			<view class="test">
				<label for="reason">我们也需要听一下你的理由：</label>
				<textarea name="desc" placeholder=" "></textarea>
			</view>
		<button form-type="submit" style="text-align: center;color: white;background-color: rebeccapurple;">让愿望起飞！</button>
		</form>
	</view>
</template>

<script>
import { addDesire } from '../../utils/api'
	export default {
		data(){
			return {
					title: '',
					desc:''	
			}
		},
		methods:{
			//添加心愿
			onsubmit(e){
				addDesire(e.detail.value).then(res=>{
					if(res.code==200){
						//添加心愿成功，跳转回心愿列表
						uni.showToast({
							title:'添加成功！',
							icon:'success'
						}),
						uni.navigateTo({
						url: '/pages/desireList/desireList'
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
		grid-gap: 30rpx;
		padding: 40rpx;
	}

	.image {
		text-align: center;
	}

	.test {
		padding: 10rpx;
		border: 1rpx solid #f8f8f8;
	}

	label {
		font-weight: bold;
	}
</style>