<template>
	<!-- <top-bar title="我的"></top-bar> -->
	<top-bar-container title="我的">
		<template #content>
			<my_login></my_login>
		</template>
	</top-bar-container>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  
  export default {
  	methods: {
  		change01: function() {
  			NavigateUtil.navigateTo('/pages/my_login/my_login');
  		}
  	}
  }
</script>

<style>
</style>