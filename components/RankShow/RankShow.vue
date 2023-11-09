<template>
	
<view class="whole-rank">
	<view style="margin-left: 3%;">积分排名情况</view>
	<view style="display: flex; justify-content: space-between; padding-top: 3% ; margin-bottom :20rpx;">
	    <view class="ranktext" style="margin-left:15% ;" >总排名:{{showTotal}}</view>
		<view class="ranktext" style="margin-right:15% ;" >组内排名:{{showGroup}}</view>
	</view>
	<view style="display: flex;justify-content: space-between; margin-top: 20rpx;" >
		<nut-button class="Rankbutton" type="info" @click="ClickTotalRank" >总榜单</nut-button>
		<nut-button class="Rankbutton" type="info" @click="ClickYeahRank">本年</nut-button>
		<nut-button class="Rankbutton" type="info" @click="ClickMonthRank">本月</nut-button>
		<nut-button class="Rankbutton" type="info" @click="ClickWeekRank">近七天</nut-button>
	</view>
	<!-- <view style="display: flex;justify-content: space-between;" >
	  <view style="margin-right: 20px;">总排名{{showTotal}}</view>
	  <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
	</view>
	<view> -->
	

	<!-- <view style="display: flex; justify-content: space-between; ;">
	    <view class="ranknum" style="  padding-left:15%;  " >{{showTotal}}</view>
		<view class="ranknum" style="  padding-right:15%;  " >{{showGroup}}</view>
	</view> -->
				<!-- <nut-tabs class="switchtable">
				 <nut-tab-pane title="总榜" @click="ClickTotalRank">
				   <view style="display: flex;justify-content: space-between;" >
				     <view style="margin-right: 20px;">总排名{{showTotal}}</view>
				     <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
				   </view>
				 </nut-tab-pane>
				 <nut-tab-pane title="本年" @click="ClickYeahRank">
				   <view style="display: flex;justify-content: space-between;" >
				     <view style="margin-right: 20px;">总排名{{showTotal}}</view>
				     <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
				   </view>
				 </nut-tab-pane>
				 <nut-tab-pane title="本月" @click="ClickMonthRank">
				   <view style="display: flex;justify-content: space-between;" >
				     <view style="margin-right: 20px;">总排名{{showTotal}}</view>
				     <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
				   </view>
				 </nut-tab-pane>
				 <nut-tab-pane title="近七天" @click="ClickWeekRank">
				   <view style="display: flex;justify-content: space-between;" >
				     <view style="margin-right: 20px;">总排名{{showTotal}}</view>
				     <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
				   </view>
				 </nut-tab-pane>
					</nut-tabs> -->
	
	<!-- <view style="display: flex;justify-content: space-between;" >
	  <view style="margin-right: 20px;">总排名{{showTotal}}</view>
	  <view style="margin-right: 20px;">组内排名{{showGroup}}</view>
	</view> -->
</view>
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import TimeUtil from '../../utils/TimeUtil';
import user from '../../store/user.js';
import axios from '../../utils/http.js';

export default {
  name: 'RankShow',
  data() {
    return {
      // TT为总榜，总排名；TG为组内排名，总榜;TW为总榜，周排名;YT月榜总排名
      TT: 111,
      TY: 111,
      TM: 111,
      TW: 111,
      GT: 111,
      GY: 111,
      GM: 111,
      GW: 111,
      showTotal : null, // 实际总排名展示数据
      showGroup : null, // 实际组内排名展示数据
      rank:777
    };
  },
  methods: {
    GetRank(rankingRange, timeRange, variable) {
		
      let self = this; // 保存 this 指向
      return axios({
        method: 'GET',
        params: {
          "rankingRange": rankingRange,
          "timeRange": timeRange
        },
        headers: {
          'Content-Type': '	application/json',
          'token': user.getToken() 
        },
        url: 'point/getPointRank'
      }).then(res => {
        console.log(res);
        if (res.code === 400) {
          console.log(400);
        }
        if (res.code === 200) {
          console.log(200);
          self[variable] = res.data.pointRank; // 将获取的排名值赋给对应的变量
        }
      });
    },

    
 //    GetTotalRank() {
 //      this.GetRank('system', 'total').then(rank => {
 //        this.TT = rank; // 在成功时将获取的排名值赋给 TT
 //      });
 //      this.GetRank('group', 'total').then(rank => {
 //        this.GT = rank; // 在成功时将获取的排名值赋给 GT
 //      });
 //    },
 //    GetYeahRank() {//ty，gy
 //      this.GetRank('system', 'year').then(rank => {
 //        this.TT = rank; // 在成功时将获取的排名值赋给 TT
 //      });
 //      this.GetRank('group', 'year').then(rank => {
 //        this.GT = rank; // 在成功时将获取的排名值赋给 GT
 //      });
 //    },
 //    GetMonthRank() {//tm，gm
 //     this.GetRank('system', 'month').then(rank => {
 //       this.TT = rank; // 在成功时将获取的排名值赋给 TT
 //     });
 //     this.GetRank('group', 'month').then(rank => {
 //       this.GT = rank; // 在成功时将获取的排名值赋给 GT
 //     });
 //    },
 //    GetWeekRank() {//tw，gw
 //      this.GetRank('system', 'week').then(rank => {
 //        this.TT = rank; // 在成功时将获取的排名值赋给 TT
 //      });
 //      this.GetRank('group', 'week').then(rank => {
 //        this.GT = rank; // 在成功时将获取的排名值赋给 GT
 //      });
 //    },
	ClickTotalRank(){
		this.showTotal = this.TT;
		this.showGroup = this.GT
		console.log('hhh');
	},
	ClickYeahRank(){
		this.showTotal = this.TY;
		this.showGroup = this.GY
	},	
	ClickMonthRank(){
		this.showTotal = this.TM;
		this.showGroup = this.GM
	},
	ClickWeekRank(){
		console.log("点我")
		this.showTotal = this.TW;
		this.showGroup = this.GW
	}
  },
  mounted() {
    this.GetRank('system', 'total', 'TT').then(() => {
  console.log(this.TT); 
});
    this.GetRank('group', 'total', 'GT').then(() => {
  console.log(this.GT); 
});
    this.GetRank('system', 'year', 'TY').then(() => {
  console.log(this.TY); 
});
    this.GetRank('group', 'year', 'GY').then(() => {
  console.log(this.GY); 
});
    this.GetRank('system', 'month', 'TM').then(() => {
  console.log(this.TM); 
});
    this.GetRank('group', 'month', 'GM').then(() => {
  console.log(this.GM); 
});
    this.GetRank('system', 'week', 'TW').then(() => {
  console.log(this.TW); 
});
    this.GetRank('group', 'week', 'GW').then(() => {
  console.log(this.GW); 
}).then(() =>{this.ClickTotalRank();});
	
  }
};
</script>


<style>
.Rankbutton{
		color: white;
		background: #007FFF;
		 padding: 10px 20px; /* 设置按钮的内边距 */
		  border: none; /* 移除边框 */
		  border-radius: 5px; /* 设置边框的圆角 */
		  cursor: pointer; /* 鼠标悬停时显示手型光标 */
		 display: flex; /* 使用 Flex 布局 */
		   justify-content: center; /* 水平居中 */
		   align-items: center; /* 垂直居中 */
	}
.ranktext{
	padding-top: 20%;
	color: black;
	background: #FFFFF0;
	 padding: 10px 20px; /* 设置按钮的内边距 */
	 border: none;/* 移除边框 */
	  border-radius: 30%; /* 设置边框的圆角 */
	  cursor: pointer; /* 鼠标悬停时显示手型光标 */
	 display: flex; /* 使用 Flex 布局 */
	   justify-content: center; /* 水平居中 */
	   align-items: center; /* 垂直居中 */
}
.ranknum{
	
	font-size: 20px;
	border: 1px ;
}
.whole-rank {
  /* font-family:  cursive; *//* '宋体', sans-serif; */
  /* font-style: italic; */ /* 设置全局字体为宋体 */
  margin-top: 3% ;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  border: 1px solid rgba(0, 0, 0, 0.1); /* 添加边框 */
  border-radius: 10px; /* 添加圆角 */
  margin-left: 2%;
  margin-right: 2%;
} 
</style>
