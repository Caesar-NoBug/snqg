<template>
  <view class="charts-box">
    <qiun-data-charts 
      type="line"
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
      //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#5487E8","#70BAC3"],
        legend: {},
        xAxis: {
          disableGrid: true,
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
				'timeRange': 'day'
			}
		}).then(res => {				
		    if (res.code === 200) {
			
			let response = {
			    //categories: this.recordTimeArray,
				categories: [res.data.pointStatusVOList[0].recordTime,res.data.pointStatusVOList[1].recordTime,res.data.pointStatusVOList[2].recordTime],
			    series: [
			      {
			        name: "我的数据",
			        data: [res.data.pointStatusVOList[0].childPoint,res.data.pointStatusVOList[1].childPoint,res.data.pointStatusVOList[2].childPoint]
			      },
				  {
					  name: "平均数据",
					  data: [parseInt(res.data.pointStatusVOList[0].systemAverage),parseInt(res.data.pointStatusVOList[1].systemAverage),parseInt(res.data.pointStatusVOList[2].systemAverage)]
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