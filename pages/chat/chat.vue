<template>
  <top-bar-container :returnAble="true" :title="child_name">
	<template #content>
		<div class="top">
		<view class="icon">
		    <nut-icon @click="change01" name="date" color="#fa2c19"></nut-icon>
			<nut-icon @click="change02" name="dongdong" color="#fa2c19"></nut-icon>
			<nut-icon @click="change03" name="more-x" color="#fa2c19"></nut-icon>
		</view>
		
		</div>
		<template >
		<div class="input">
		  <nut-input v-model="state.buttonVal" placeholder="请输入您想说的话" clearable center >
		    <template #button>
		      <nut-button size="small" type="primary">发送</nut-button>
		    </template>
		  </nut-input>
		</div>	
		</template>
	</template>
  </top-bar-container>
</template>

<script>
	import ApiUtil from '../../utils/ApiUtil';
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import { ref } from 'vue';
	import { reactive } from 'vue';
	
	export default{
		setup() {
		      const state = reactive({
		        buttonVal: ''
		      });
		      return {
		        state
		      };
		    },
		data(){
			
			return{
				
			child_name: "卞文静",
			}
		
		},
	}
	
</script>

<style>
	/* .child_name{ */
		/* margin-top: 20px; */
		/* text-align: center; */
	/* } */
	.icon{
		margin-left: 85%;
	}
	
	.input{
		margin-top: 625px;
	}
</style>