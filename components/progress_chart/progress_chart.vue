<template>
	<view class="charts-box">
		<qiun-data-charts type="column" :opts="opts" :chartData="chartData" />
	</view>
</template>

<script>
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
  mounted() {  // 注意这里使用的是mounted钩子，因为onReady是一个小程序的生命周期函数，并不适用于Vue
    this.getServerData();
  },
  methods: {
    getServerData() {
      let res = {
          categories: ["2016","2017","2018","2019","2020","2021"],
          series: [
            {
              name: "超越用户百分比",
              data: [12,27,21,24,6,48]
            }
          ]
        };
      this.chartData = res;  // 直接赋值，不需要深拷贝
    },
  }
};
</script>

<style>
	.charts-box {
	    height: 250px;
	}
</style>