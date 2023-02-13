<template>
	<!-- <top-bar title="我的"></top-bar> -->
	<top-bar-container title="我的">
		<template #content>
      <my_detail></my_detail>
		</template>
	</top-bar-container>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js';
  
  export default {
    data() {
      return {
        
      }
    },
  	methods: {
  		
  	}
  }
  
  user.getState()
</script>

<style>
</style>