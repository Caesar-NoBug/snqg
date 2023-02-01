<template>
	<!-- <top-bar title="我的"></top-bar> -->
	<top-bar-container title="我的">
		<template #content>
      <view>token</view>
			<my_login v-if="!token || token === '{}'"></my_login>
      <my_bind v-else-if="!isBind"></my_bind>
      <my_detail v-else></my_detail>
		</template>
	</top-bar-container>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js';
  
  export default {
    data() {
      return {
        token: user.getToken(),
        isBind: user.getBind()
      }
    },
  	methods: {
  		
  	}
  }
  
  
</script>

<style>
</style>