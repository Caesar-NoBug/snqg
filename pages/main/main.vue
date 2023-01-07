<template>
	<top-bar-container title="主页">
		<template #content>
			<nut-divider style="color: #6666FF;" />
			<nut-button @click="change01">通话详情
			</nut-button>
			<nut-button @click="change02">通话历史
			</nut-button>
		</template>
	</top-bar-container>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	
	export default {
		methods: {
			change01: function() {
				NavigateUtil.navigateTo('/pages/call_detail/call_detail');
			},
			change02: function() {
				NavigateUtil.navigateTo('/pages/call_history/call_history');
			}
		}

	}
</script>

<style>

</style>
