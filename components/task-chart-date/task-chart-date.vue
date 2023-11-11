<template>
	<view class="charts-box">
	  <qiun-data-charts 
	    type="column"
	    :opts="opts"
	    :chartData="chartData"
	  />
	</view>
</template>

<script>
	import axios from '../../utils/http.js';
	import user from '../../store/user.js';
	
	export default {
		data() {
		  return {
		    chartData: {},
		    //您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
		    opts: {
		      color: ["#5487E8","#70BAC3"],
		      enableScroll: false,
		      legend: {},
		      xAxis: {
		          disableGrid: true,
				},
		          yAxis: {
		              data: [
		                  {
		                    min: 0
		                  }
		              ]
		          },
		      extra: {
		        column: {
		        	type: "group",
					barBorderRadius: [2,2,0,0],
		        	activeBgColor: "#0a0099"
		        }
		      }
		    }
		  };
		},
		
		mounted() {
		  this.getServerData();
		},
		
		methods: {
		  getServerData() {
		    //模拟从服务器获取数据时的延时
		    setTimeout(() => {
		      //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
		      
				
				axios({
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'token': user.getToken()
						
					},
					url: "point/drawTaskCount",
					params: {
						//'token': user.getToken(),
						'timeRange': 'day',
					}
				}).then(res => {				
				    if (res.code === 200) {
					
					let response = {
					    //categories: this.recordTimeArray,
						categories: [res.data.taskStatusVOList[0].recordTime,res.data.taskStatusVOList[1].recordTime,res.data.taskStatusVOList[2].recordTime],
					    series: [
					      {
					        name: "我的数据",
					        data: [res.data.taskStatusVOList[0].userTaskCount,res.data.taskStatusVOList[1].userTaskCount,res.data.taskStatusVOList[2].userTaskCount]
					      },
						  {
							  name: "平均数据",
							  data: [parseInt(res.data.taskStatusVOList[0].systemAverageTaskCount),parseInt(res.data.taskStatusVOList[1].systemAverageTaskCount),parseInt(res.data.taskStatusVOList[2].systemAverageTaskCount)]
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
	}
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸,这里一般调一下高度就好*/
  .charts-box {
    width: 100%;
    height: 300px;
  }
</style>