<template>
	<top-bar-container :returnAble="true" title="查看排名">
	</top-bar-container>
	<div class="shehuiliu666">
	<view>
		<totalpoint></totalpoint>
		<achivemententrance></achivemententrance>
		<RankShow></RankShow>
		<todaydata></todaydata>
		<encourage></encourage>

	
		
	</view>
	</div>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import axios from '../../utils/http.js';
	import RankShow from '../../components/RankShow/RankShow.vue';
	import totalpoint from '../../components/totalpoint/totalpoint.vue';
	import todaydata from '../../components/todaydata/todaydata.vue';
	import encourage from '../../components/encourage/encourage.vue';
	import achivement from '../../components/achivement/achivement.vue';
	import achivemententrance from '../../components/achivemententrance/achivemententrance.vue';
	
	export default {
		data() {
			return {
				
			}
		},
		components() {
			todaydata
		},
		methods: {
			
		}
	}
</script>

<style>
.shehuiliu666{
	position: absolute;
	top: 96px;
	bottom: 0;
	overflow-y:auto;
}
</style>
