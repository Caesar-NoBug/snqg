<template>
	<top-bar-container title="主页">
		<template #content>
			<div>
				<nut-searchbar v-model="searchValue">
					 <template v-slot:leftin>
					    <nut-icon size="14" name="search2" color="#fa2c19"></nut-icon>
					</template>
					<template v-slot:rightout>
					    搜索
					</template>
				</nut-searchbar>
			</div>
			<div>
				<span class="recommend" @click="recommend()">推荐</span>
				<span class="favorite" @click="favorite()">关注</span>
				<span class="date">日程</span>
			</div>
			<nut-cell-group>
				<nut-cell size="large" v-for="call in calls" :title="call.name+'（'+call.completed+'）'" :desc="getCallDateString(call.start_time) + getCallMomentString(call.start_time)"> 
					<template v-slot:icon>
						<img class="nut-icon" src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"/>
					</template>
				</nut-cell>
			</nut-cell-group>
		</template>
	</top-bar-container>
</template>

<script>
	import { toRefs, reactive } from 'vue';
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	export default {
		// setup(){
		// 	const state = reactive({
		// 		searchValue: ""
		// 	});
		// },
		data() {
			return {
				// ...toRefs(state),
				calls: [{
					id: "2931830120A",
					start_time: 1665814186,
					duration: 14263,
					completed: "未完成",
					name: "张三",
					icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
				}, {
					id: "293183012AD",
					start_time: 1665814192,
					duration: 14261,
					completed: "完成",
					name: "李四",
					icon:"https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
				}]
			}
		},
		methods: {
			getCallDateString(time) {
				return TimeUtil.getDateString(time);
			},
			navigateToCallDetail(call) {
				console.log(call);
			},
			getCallMomentString(time) {
				return TimeUtil.getMomentString(time);
			},
			recommend: function() {
				NavigateUtil.navigateTo('/components/main_recommend/main_recommend');
			},
			favorite: function() {
				NavigateUtil.navigateTo('/components/main_favorite/main_favorite');
			},
		}
	}
</script>

<style>
.recommend{
	margin-left: 19%;
	font-weight: 300;
}
.favorite{
	margin-left: 20%;
	font-weight: 300;
}
.date{
	margin-left: 20%;
	color:#fa2c19;
}
</style>
