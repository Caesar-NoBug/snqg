<template>  
	<view  class="whole-component"  >
		<view style="display: flex;justify-content: space-between; padding-top:3%;  align-items: center;">
			<view style="padding-left: 5%;">累计积分</view>
			<view style="padding-right: 10% ; font-size: 30px; color: #F5FFFA;  " >{{TotalPoint}}</view>
		</view>
		<view style="display: flex;justify-content: space-between; padding-top:0%; align-items: center;">
			<view style="padding-left: 5%;">学习评级</view>
			<view class="star-rating">
			   <!-- <input type="radio" id="star5" name="rating" value="5"  /> -->
			   <label v-if="$data.TotalPoint>=0"  title="1 stars"></label>
				
			   <label v-if="$data.TotalPoint>500"  title="2 stars"></label>
			  
			   <label v-if="$data.TotalPoint>1500"  title="3 stars"></label>
			
			   <label v-if="$data.TotalPoint>3000"  title="4 stars"></label>
			
		       <label v-if="$data.TotalPoint>5000"  title="5 star"></label>
			   
			   <label v-if="$data.TotalPoint>8000"  title="6 star"></label>
			   
			   <label v-if="$data.TotalPoint>12000" title="7 star"></label>
			   
			   <label v-if="$data.TotalPoint>20000" title="8 star"></label>
			 </view>
		</view>
	</view>

</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import axios from '../../utils/http.js';
	
	export default {
		name:"totalpoint",
		data() {
			return {
				TotalPoint:6666,
				selectedRating: null
				
			}
		},
		methods: {
			GetTotalPoint() {
			  return axios({
			    method: 'GET',
			    params: {
			      calculationType: 'accumulated'
			    },
			    headers: {
			      'Content-Type': 'application/json',
			      'token': user.getToken() 
			    },
			    url: 'point/getTotalPoints'
			  }).then(res => {
			    console.log(res);
			    if (res.code === 400) {
			      console.log(400);
			    }
			    if (res.code === 200) {
			      console.log(200);
			      this.TotalPoint=res.data.totalPoints; // 将获取的排名值赋给对应的变量
			      console.log("hhhhhhhhhhh")
				}
			  });
			}
		},
		mounted(){
		this.GetTotalPoint()
		}
	}
</script>

<style>
.star-rating {
  font-size: 3;
}
.star-rating input {
  display: none;
}
.star-rating label {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin: 0 2px;
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFD700"><path d="M12 17.27l-5.29 3.22 1.12-6.16-4.75-4.62 6.59-.98L12 3l2.33 5.73 6.59.98-4.75 4.62 1.12 6.16z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
.whole-component {
  height: 110px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 添加阴影 */
  /* font-family:  cursive; *//* '宋体', sans-serif; */
  /* font-style: italic; */ /* 设置全局字体为宋体 */
  background-color: #808000;
  width: 96%;
  margin: 0 auto; /* 水平居中 */
  border-radius: 10px; /* 添加圆角 */
  
}

</style>
