<template>
	<top-bar-container :returnAble="true" title="成就">
	</top-bar-container>
  <view class="achievements" >
    <view style="font-size:  4ex;">我的成就</view>
    <view class="badge-container">
      <view class="badge">
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OeiugN.png"   v-if="$data.point>=1000" style="  filter: grayscale(0%);" />
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OeiugN.png"   v-else />
		<view>初出茅庐</view>
		<view v-if="$data.point<=1000">（进度{{point}}/1000）</view>
		<view v-else>（完成1000/1000）</view>
      </view>
      <view class="badge">
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenTbU.png"   v-if="$data.point>=5000" style="filter: grayscale(0%);" />
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenTbU.png"   v-else />
		<p>稳步上升</p>
		<view v-if="$data.point<=5000">（进度{{point}}/5000）</view>
		<view v-else>（完成5000/5000）</view>
      </view>
      <view class="badge">
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OeniiG.png"   v-if="$data.point>=10000" style="filter: grayscale(0%);" />
        <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OeniiG.png"   v-else />
		<p>锐意进取</p>
		<view v-if="$data.point<=10000">（进度{{point}}/10000）</view>
		<view v-else>（完成10000/10000）</view>
      </view>
	  <view class="badge">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oenxrc.png"   v-if="$data.point>=20000" style="filter: grayscale(0%);" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oenxrc.png"   v-else />
		<p>日臻成熟</p>
		<view v-if="$data.point<=20000">（进度{{point}}/20000）</view>
		<view v-else>（完成20000/20000）</view>
	  </view>
	  <view class="badge">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oenn41.png"   v-if="$data.point>=30000" style="filter: grayscale(0%);" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oenn41.png"   v-else />
		<p>乘风破浪</p>
		<view v-if="$data.point<=30000">（进度{{point}}/30000）</view>
		<view v-else>（完成30000/30000）</view>
	  </view>
	  <view class="badge">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenzQr.png"   v-if="$data.point>=50000" style="filter: grayscale(0%);" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenzQr.png"   v-else />
		<p>一马当先</p>
		<view v-if="$data.point<=50000">（进度{{point}}/50000）</view>
		<view v-else>（完成50000/50000）</view>
	  </view>
	  <view class="badge">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenFCM.png"   v-if="$data.point>=80000" style="filter: grayscale(0%);" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenFCM.png"   v-else />
		<p>创意无限</p>
		<view v-if="$data.point<=80000">（进度{point}}/80000）</view>
		<view v-else>（完成80000/80000）</view>
	  </view>
	  <view class="badge">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oen12I.png"   v-if="$data.point>=150000" style="filter: grayscale(0%);" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/Oen12I.png"   v-else />
		<p>雄心勃勃</p>
		<view v-if="$data.point<=150000">（进度{{point}}/150000）</view>
		<view v-else>（完成150000/150000）</view>
	  </view>
	  <view class="badge" style="margin-left: 17%;">
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenNbD.png"   v-if="$data.point>=200000" style="filter: grayscale(0%); width: 250px;height: 70px;" />
	    <img  class="achieveimg" src="https://ooo.0x0.ooo/2023/11/09/OenNbD.png"   v-else style="width: 250px; height:70px ;" />
		<p>登峰造极</p>
		<view v-if="$data.point<=200000">（进度{{point}}/200000）</view>
		<view v-else>（完成200000/200000）</view>
	  </view>
      <!-- 添加更多的成就徽章 -->
    </view>
  </view>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import axios from '../../utils/http.js';

export default {
  name: 'achievement',
  data(){
	  return{
		  point:90000
	  }
  },
  methods:{
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
	        this.point=res.data.totalPoints; // 将获取的排名值赋给对应的变量
	        console.log("hhhhhhhhhhh")
	  	}
	    });
	  }
  },
  mounted(){
	  this.GetTotalPoint()
  }
  

};
</script>

<style>
.achievements {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  
  
}

.badge-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.badge {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 10px; */
  margin-top:20px;
  margin-left: 2%;
  margin-right: 2%;
  

}

.badgeimg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.achieveimg {
	width: 100px; 
	height: 100px;
	filter: grayscale(100%);
}
</style>
