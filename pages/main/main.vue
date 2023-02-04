<template>
	<top-bar-container title="主页">
		<template #content>
			<nut-button @click="func1()">个人信息</nut-button>
      <nut-button @click="func2()">通话历史</nut-button>
      <nut-button @click="func3()">通话详情</nut-button>
		</template>
	</top-bar-container>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	
	export default {
		methods: {
			func1: function() {
				NavigateUtil.navigateTo('/pages/my_information/my_information');
			},
      func2: function() {
      	NavigateUtil.navigateTo('/pages/call_history/call_history');
      },
      func3: function() {
      	NavigateUtil.navigateTo('/pages/call_detail/call_detail');
      }
		}

	}
</script>

<style>

</style>
