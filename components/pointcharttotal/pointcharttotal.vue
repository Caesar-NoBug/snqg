<template>
	<top-bar-container :returnAble="true" title="概览图表">
	</top-bar-container>

	<view >
	<view style="display: flex; justify-content: center;align-items: center; ">
	<nut-icon name="star" custom-color="#e6e522"></nut-icon>
	<view style="font-size: 3ch;"> 积分情况</view>
	</view>
<nut-tabs v-model="state.tab1value">
  <nut-tab-pane title="按天查看">
    <point-chart-date></point-chart-date>
  </nut-tab-pane>
  <nut-tab-pane title="按月查看">
    <point-chart></point-chart>
  </nut-tab-pane>
</nut-tabs>
</view>

</template>

<script>
import { reactive } from 'vue';
import pointcharttotalVue from './pointcharttotal.vue';
	export default {
		name:'pointcharttotal',
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
