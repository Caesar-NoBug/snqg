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
				<span class="recommend">推荐</span>
				<span class="favorite" @click="favorite()">关注</span>
				<span class="date" @click="date()">日程</span>
			</div>
		</template>
	</top-bar-container>
</template>

<script>
	import { toRefs, reactive } from 'vue';
	import NavigateUtil from '../../utils/NavigateUtil';
	export default {
		// setup(){
		// 	const state = reactive({
		// 		searchValue: ""
		// 	});
		// },
		data() {
			return {
				// ...toRefs(state),
			}
		},
		methods: {
			favorite: function() {
				NavigateUtil.navigateTo('/components/main_favorite/main_favorite');
			},
			date: function() {
				NavigateUtil.navigateTo('/components/main_date/main_date');
			},
		}
	}
</script>

<style>
.recommend{
	margin-left: 19%;
	color:#fa2c19;
}
.favorite{
	margin-left: 20%;
	font-weight: 300;
}
.date{
	margin-left: 20%;
	font-weight: 300;
}
</style>
