<template>
	<view class="charts-box">
		<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
	</view>
</template>

<script>
	import axios from '../../utils/http.js'
	import user from '../../store/user.js'
	
	export default {
		data() {
			return {
				chartData: {},
				opts: {
					color:["#FAC858"],
					yAxis: {data: [{ min: 0, max: 100}]},
					enableScroll:false,
					extra:{
						column: {
							barBorderRadius: [3,3,0,0],
							activeBgColor: "#0a0099"
						}
					}
				}
			};
		},
	
		mounted() {  
			// 发送请求获取数据
			this.getServerData();
		},
		
		methods: {
			getServerData(){
				
	  
					  
				setTimeout(() => {
				        
				        axios({
				        	method: 'GET',
				        	headers: {
				        		'Content-Type': 'application/json',
				        		//'token': user.getToken(),
				        		'token': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzgyZDBkMWVmZmE0MDgxYThmZGMyNTE2MWUwMjk4MCIsInN1YiI6IjY2NiIsImlzcyI6InNnIiwiaWF0IjoxNjk5MzQ4OTMxLCJleHAiOjE3MDE5NDA5MzF9.O0767hXEEZ627Ae07hMTYqRpmwms7089DPePx2pPf6Q",
				        	},
				        	url: "point/getPointRankPercentage",
				        	params: {
				        		//'token': user.getToken(),
				        		//'token': "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzNzgyZDBkMWVmZmE0MDgxYThmZGMyNTE2MWUwMjk4MCIsInN1YiI6IjY2NiIsImlzcyI6InNnIiwiaWF0IjoxNjk5MzQ4OTMxLCJleHAiOjE3MDE5NDA5MzF9.O0767hXEEZ627Ae07hMTYqRpmwms7089DPePx2pPf6Q",
				        		'x': 4,
				        	}
				        }).then(res => {							
				            if (res.code === 200) {
							
							let response = {
							    //categories: this.recordTimeArray,
								categories: [res.data.rankPercentageList[0].recordTime,res.data.rankPercentageList[1].recordTime,res.data.rankPercentageList[2].recordTime,res.data.rankPercentageList[3].recordTime],
							    series: [
							      {
							        name: "超越人数百分比",
							        data: [res.data.rankPercentageList[0].rankPercentage,res.data.rankPercentageList[1].rankPercentage,res.data.rankPercentageList[2].rankPercentage,res.data.rankPercentageList[3].rankPercentage]
							      }
							    ]
							};
							
							this.chartData = JSON.parse(JSON.stringify(response));
				        	
				            } else {
				        		console.error(res.msg);
				            }
				        });	
						
						
						
				        
				}, 5000);
						
			},
		}
	};
	
	

</script>

<style>
	.charts-box {
	    height: 250px;
	}
</style>