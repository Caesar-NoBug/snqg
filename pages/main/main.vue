<template>
	<top-bar title="主页"></top-bar>
	<nut-divider style="color: #6666FF;" />
	<nut-button @click="change01">通话详情
	</nut-button>
	<nut-button @click="change02">通话历史
	</nut-button>
</template>

<script>
	import NavigateUtil from '../../utils/nvigation';
	export default {
		methods: {
			change01: function() {
				// uni.navigateTo({
				// 	url: '/pages/call_detail/call_detail'
				// });
				NavigateUtil.navigateTo('/pages/call_detail/call_detail');
			},
			change02: function() {
				// uni.navigateTo({
				// 	url: '/pages/call_history/call_history'
				// });
				NavigateUtil.navigateTo('/pages/call_history/call_history');
			}
		}

	}
</script>

<style>

</style>
