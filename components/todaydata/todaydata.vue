<template>
	<view class="todaydataframe">
		<view style="padding: 0%;">概览</view>
		<view style="padding-top: 2%;">
			<view style="display: flex;justify-content: space-between;">
				<nut-icon   name="JIMI40" size="26"></nut-icon>
				<nut-icon name="clock" size="26"></nut-icon>
			</view>
			<view style="display: flex;justify-content: space-between;">
				<view >累计完成任务{{totalrask}}</view>
				<view>今日积分{{todaypoint}}</view>
			</view>
		</view>	
		<view style="display: flex;justify-content: space-between;">
			<nut-icon name="order" size="26"></nut-icon>
			<nut-icon @click="GotoLookchart()" name="arrow-right" size="26"></nut-icon>
			
		</view>
		<view style="display: flex;justify-content: space-between; padding-bottom: 3%;">
			<view  >今日任务{{todayrask}}/5
			<nut-icon custom-color="#E0FFFF" v-if="todayrask>=5" name="checklist"  ></nut-icon>
			</view>
			<view @click="GotoLookchart()">近期图表概览</view>
		
		</view>
	</view>
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import TimeUtil from '../../utils/TimeUtil';
import user from '../../store/user.js';
import axios from '../../utils/http.js';

	export default {
		name:"todaydata",
		data() {
			return {
				totalrask:110,
				todaypoint:0,
				todayrask:11,
				
			}
		},
		methods: {
	//更新为跳转至图表查看
			GotoLookchart(){
				NavigateUtil.navigateTo('/pages/chart_fromLookRank/chart_fromLookRank');
			},
			//需要更新-----------
			Gettotalrask(){
				return axios({
				  method: 'GET',
				  params: {
				    // calculationType: 'accumulated'
				  },
				  headers: {
				    'Content-Type': 'application/json',
				    'token': user.getToken() 
				  },
				  url: 'task/getAllFinishedTask'
				}).then(res => {
				  console.log(res);
				  if (res.code === 400) {
				    console.log(400);
				  }
				  if (res.code === 200) {
				    console.log(200);
				    this.totalrask=res.data.taskFinishedVos.length; // 将获取的排名值赋给对应的变量
				    console.log("已获取到totalrask")
								}
				});
			},
			//更新到这---------------------
			Gettodaypoint(){
				return axios({
				  method: 'GET',
				  params: {
				    timeRange: 'day'
				  },
				  headers: {
				    'Content-Type': 'application/json',
				    'token': user.getToken() 
				  },
				  url: 'point/drawPointCount'
				}).then(res => {
				  console.log(res);
				  if (res.code === 400) {
				    console.log(400);
				  }
				  if (res.code === 200) {
				    console.log(200);
				    this.todaypoint=res.data.pointStatusVOList[0].childPoint; // 将获取的排名值赋给对应的变量
				    console.log("获取到todaypoint")
								}
				});
			},
			Gettodayrask(){
				return axios({
				  method: 'GET',
				  params: {
				    timeRange: 'day'
				  },
				  headers: {
				    'Content-Type': 'application/json',
				    'token': user.getToken() 
				  },
				  url: 'point/drawTaskCount'
				}).then(res => {
				  console.log(res);
				  if (res.code === 400) {
				    console.log(400);
				  }
				  if (res.code === 200) {
				    console.log(200);
				    this.todayrask=res.data.taskStatusVOList[0].userTaskCount; // 将获取的排名值赋给对应的变量
				    console.log("获取到todayrask")
								}
				});
			},
			
		},
		mounted() {
			this.Gettodayrask();
			this.Gettodaypoint();
			this.Gettotalrask()
		}	
	}
</script>

<style>
.todaydataframe{
	
	margin: 2%;
	margin-top: 4%;
	border: 1px solid #000; /* 边框，可以根据需求调整粗细和颜色 */
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* 阴影效果，可以根据需求调整阴影的偏移、模糊度和颜色 */
    padding: 10px; /* 内边距，可以根据需求调整 */
/* 	display: flex;
	justify-content: center;
	align-items: center; */
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 10px;
}


</style>
