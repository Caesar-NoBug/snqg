<template>
	<view style="display: flex; justify-content: center;align-items: center;  ">
<nut-icon name="footprint" custom-color="#a7eaaf"></nut-icon>
<view style="font-size: 3ch;">任务情况</view>
</view>
<nut-tabs v-model="state.tab1value">
	
  <nut-tab-pane title="按天查看">
    <task-chart-date></task-chart-date>
  </nut-tab-pane>
  <nut-tab-pane title="按月查看">
    <task-chart></task-chart>
  </nut-tab-pane>
</nut-tabs>
</template>

<script>
import { reactive } from 'vue';
import taskcharttotalVue from './taskcharttotal.vue';
	export default {
		name:'taskcharttotal',
		 setup() {
		    const state = reactive({
		      tab1value: '0',
		    });
		    return { state };
		  },
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
