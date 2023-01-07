<template>
	<view :style="{position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%'}">
		<top-bar :returnAble="returnAble" :title="title"></top-bar>
	</view>
	<view :style="{marginTop: navBarHeight + 55 + 'px'}">
		<slot name="content"></slot>
	</view>
</template>

<script>
	const app = getApp();

	export default {
		name: "top-bar-container",
		props: {
			returnAble: {
				type: Boolean,
				default: false
			}, //是否显示返回icon
			title: {
				type: String,
				default: ''
			}, //文字标题
		},
		data() {
			return {
				navBarHeight: app.globalData.navBarHeight,
			};
		},
	}
</script>

<style scoped>

</style>
