<template>
	<view :style="{height: navBarHeight, background: 'black'}"></view>
	<view class="top-bar-container" :style="{marginTop: navBarHeight + 'px'}">
		<nut-navbar :left-show="false">
			<template #left>
				<view class="top-bar-content" style="font-size: 18px; line-height: 30px;">
					<nut-icon v-if="returnAble" name="left" @click="onBackClicked()"></nut-icon>
					<text v-if="title" class="top-bar-title">{{title}}</text>
				</view>
			</template>
		</nut-navbar>
	</view>
</template>

<script lang="ts">
	const  app = getApp();
	
	export default {
		name: "top-bar",
		props: {
		  returnAble: { type: Boolean, default: false }, //左侧  是否显示返回icon
		  title: { type: String, default: '' }, //中间  文字标题
		},
		data() {
			return {
				navBarHeight: app.globalData.navBarHeight,
			};
		},
		methods: {
			onBackClicked: function() {
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	.top-bar-content {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
	}
	.top-bar-title {
		flex:1 0 auto;
		margin-left: 20%;
		
	}
</style>
