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
				<span class="favorite">关注</span>
				<span class="date" @click="date()">日程</span>
			</div>
			<scroll-view>
				<div class="introduction">
					<nut-avatar size="large" icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" class="picture">
					</nut-avatar>
					<view class="name"> 
						{{name}}
					</view>
					<view class="address">
						{{address}}
					</view>
				</div>
			</scroll-view>
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
				name:"方家毅",
				address:"长山完小三年级",
			}
		},
		methods: {
			recommend: function() {
				NavigateUtil.navigateTo('/components/main_recommend/main_recommend');
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
	font-weight: 300;
}
.favorite{
	margin-left: 20%;
	color:#fa2c19;
}
.date{
	margin-left: 20%;
	font-weight: 300;
}
.introduction{
	width:40%;
	border-radius: 10px;
	background-color: #fabcb1;
	height: 250px;
	position: relative;
}
.name{
	text-align: center;
	font-weight: 700;
	bottom:20px;
	
}
.address{
	text-align: center;
	font-size: 50%;
	font-weight: 300;
	bottom: 0px;
	
}
.picture{
	position: center;
}
</style>
