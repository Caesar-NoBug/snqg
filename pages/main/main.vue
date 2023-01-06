<template>
  <nut-divider style="color: #6666FF;"/>
  <nut-button @click="change01">通话详情 
  </nut-button>
  <nut-button @click="change02">通话历史
  </nut-button>
</template>

<script>
	export default{
		methods: {
			change01: function(){uni.navigateTo({
		url: '/pages/call_detail/call_detail'
			});},
			change02: function(){
        uni.$jump("/pages/call_detail/call_detail");
      }}
		    
	}
</script>

<style>
	
</style>