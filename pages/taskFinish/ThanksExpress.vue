<template>
	<view class="container">
		<text>发布感谢后可获得</text>
		<view class="jifen">
			<text class="credits">{{credit}} 积分</text>
		</view>
		<text>对捐助者说一些心里话：</text>
		<view class="shuru">
			<textarea name="thanks" id="thanks" cols="40" rows="15" placeholder=" "></textarea>
		</view>
		<button style="text-align: center;color: white;background-color: firebrick;font-weight: bold;" >发布感谢</button>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				credit:1300
			}
		}
	}
</script>

<style scoped>
	.container {
		display: grid;
		padding: 40rpx;
		font-weight: bold;
	}

	.credits {
		color: #f4c900;
		font-size: 40rpx;
	}

	.jifen {
		text-align: center;
		padding: 20rpx;
	}

	.shuru {
		padding: 20rpx;
		padding-left: 35rpx;
	}

	textarea {
		border: 1rpx solid #c5c5c5;
		height: 400rpx;
		width: 600rpx;
	}
	button {
		margin-top: 20rpx;
	}
</style>