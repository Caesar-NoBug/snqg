<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="line"
      :opts="opts"
      :chartData="chartData"
      :ontouch="true"
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
      //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#5487E8","#70BAC3"],
        enableScroll: true,
        legend: {},
        xAxis: {
          disableGrid: true,
          scrollShow: true,
          itemCount: 4
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2
        },
        extra: {
          line: {
            type: "curve",
            width: 2,
            activeType: "hollow"
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
      
      setTimeout(() => {
        
		axios({
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'token': user.getToken()
				
			},
			url: "point/drawPointCount",
			params: {
				//'token': user.getToken(),
				'timeRange': 'month',
			}
		}).then(res => {				
		    if (res.code === 200) {
			
			let response = {
			    //categories: this.recordTimeArray,
				categories: [res.data.pointStatusVOList[0].recordTime,res.data.pointStatusVOList[1].recordTime,res.data.pointStatusVOList[2].recordTime,res.data.pointStatusVOList[3].recordTime,res.data.pointStatusVOList[4].recordTime,res.data.pointStatusVOList[5].recordTime,res.data.pointStatusVOList[6].recordTime,res.data.pointStatusVOList[7].recordTime,res.data.pointStatusVOList[8].recordTime,res.data.pointStatusVOList[9].recordTime,res.data.pointStatusVOList[10].recordTime,res.data.pointStatusVOList[11].recordTime],
			    series: [
			      {
			        name: "我的数据",
			        data: [res.data.pointStatusVOList[0].childPoint,res.data.pointStatusVOList[1].childPoint,res.data.pointStatusVOList[2].childPoint,res.data.pointStatusVOList[3].childPoint,res.data.pointStatusVOList[4].childPoint,res.data.pointStatusVOList[5].childPoint,res.data.pointStatusVOList[6].childPoint,res.data.pointStatusVOList[7].childPoint,res.data.pointStatusVOList[8].childPoint,res.data.pointStatusVOList[9].childPoint,res.data.pointStatusVOList[10].childPoint,res.data.pointStatusVOList[11].childPoint]
			      },
				  {
					  name: "平均数据",
					  data: [parseInt(res.data.pointStatusVOList[0].systemAverage),parseInt(res.data.pointStatusVOList[1].systemAverage),parseInt(res.data.pointStatusVOList[2].systemAverage),parseInt(res.data.pointStatusVOList[3].systemAverage),parseInt(res.data.pointStatusVOList[4].systemAverage),parseInt(res.data.pointStatusVOList[5].systemAverage),parseInt(res.data.pointStatusVOList[6].systemAverage),parseInt(res.data.pointStatusVOList[7].systemAverage),parseInt(res.data.pointStatusVOList[8].systemAverage),parseInt(res.data.pointStatusVOList[9].systemAverage),parseInt(res.data.pointStatusVOList[10].systemAverage),parseInt(res.data.pointStatusVOList[11].systemAverage)]
				  }
			    ]
			};
			
			this.chartData = JSON.parse(JSON.stringify(response));
			
		    } else {
				console.error(res.msg);
		    }
		});
      }, 500);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸,这里一般调一下高度就好*/
  .charts-box {
    width: 100%;
    height: 300px;
  }
</style>