<template>
	<top-bar-container title="主页">
		<template #content>
			<nut-button @click="func1()">个人信息</nut-button>
      <nut-button @click="func2()">通话历史</nut-button>
      <nut-button @click="func3()">通话详情</nut-button>
      <nut-button @click="func4()">通话界面</nut-button>
      <nut-button @click="func5()">拨入提醒界面</nut-button>
	
      <nut-button @click="func6()">主页-日程界面</nut-button>
	  <nut-button @click="func7()">主页-关注界面</nut-button>
	  <nut-button @click="func8()">主页-推荐界面</nut-button>
	  
	 //鼓励任务 -->
	 <div class="big-box">
	  <div class="title-box">
		  <p>&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;继续加油哦！</p>
	  </div >
	  <!-- <div class="img-box">
		  <nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_19-41-05.png" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_21-06-19.png" alt="图片"  @click="handleImageClick(1)">
			 </nut-avatar>
<nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_19-41-05.png" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_21-06-19.png" alt="图片"  @click="handleImageClick(1)">
			 </nut-avatar>
<nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_19-41-05.png" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="large">
		     <img class="image" src="../../test-wh/Snipaste_2023-11-02_21-06-19.png" alt="图片"  @click="handleImageClick(1)">
			 </nut-avatar>
			 
			 
	  </div> -->
	  <div class="stereo-box">
	    <p class="text">{{ message }}</p>
	  </div>
		</div>
		
		
	<!-- 	//成就任务 -->
		<!-- <div class="infoBody">
		  <nut-cellgroup>
		    <nut-cell @click="func9()" title="我的成就和荣誉" center sub-title="继续坚持完成学习任务获得更多荣誉勋章" desc="进入" is-link="true">
		      <template v-slot:icon>
		          <img src="../../test-wh/Snipaste_2023-11-03_11-45-08.png" style="width: 50px; height: 50px; margin-right: 10px;"/>
		      </template>
		    </nut-cell>
		  </nut-cellgroup>
		</div> -->
		</template>
		
	</top-bar-container>
	
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	//import {APIUtil} from '../../api/APIUtils'
  import axios from '../../utils/http.js'
  import ApiUtil from '../../utils/ApiUtil'
  
	export default {
		data() {
		    return {
		      message: '6',
		    };
		  },
		onLoad() {
		
		  // uni.$on("refresh", function(data) {
		  //   console.log(12)
		  //   const pages = getCurrentPages()
		  //           // 声明一个pages使用getCurrentPages方法
		  //           const curPage = pages[pages.length - 1]
		  //           // 声明一个当前页面
		  //           curPage.onLoad(curPage.options) // 传入参数
		  //           curPage.onShow()
		  //           curPage.onReady()
		   
		  // });
		},
		methods: {
			func1: function() {
				NavigateUtil.navigateTo('/pages/my_information/my_information');
			},
			func2: function() {
				NavigateUtil.navigateTo('/pages/call_history/call_history');
			},
			func3: function() {
				NavigateUtil.navigateTo('/pages/call_detail/call_detail');
			},
			func4: function() {
				NavigateUtil.navigateTo('/pages/chat_call/chat_call');
			},
			func5: function() {
				NavigateUtil.navigateTo('/pages/call_state/call_state');
			},
			func6: function() {
				NavigateUtil.navigateTo('/components/main_date/main_date');
			},
			func7: function() {
				NavigateUtil.navigateTo('/components/main_favorite/main_favorite');
			},
			func8: function() {
				NavigateUtil.navigateTo('/components/main_recommend/main_recommend');
			},
			func9: function() {
				NavigateUtil.navigateTo('/pages/achievement/achievement');
			},
			handleImageClick(i){
				if(i == 0)
				{this.message = "对我们来说，不是把一块肉割出来给大家分，而是大家互助互利、共赢。如果我切给你，这是零和游戏，不叫共赢。大家只有共赢，才能长远共同走下去。";}
				if(i == 1)
				{
				this.message = "我是谁呀！";
				}
				else{
					
				}
			},	
		}

	}

</script>

<style>
.stereo-box {
  width: 92%;
  height: 150px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  /* line-height: 100px; */
  
  border: 1px solid #2980b9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  margin-top: 5px; /* 子元素上边距为10像素 */
    margin-bottom: 30px; /* 子元素下边距为10像素 */
}
.big-box {
	
	width: 98vw;
	 margin-top: 20px; /* 外部上边距为20像素 */
	  margin-bottom: 20px; /* 下外部边距为20像素 */
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 margin-left: 1%;
  
  background-color: #ffffff;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); */
}
.img-box {
  /* height:100px; */
   /* justify-content: space-around; */
  width: 92%; 
  overflow-x: auto; /* 水平溢出时显示滚动条 */
    white-space: nowrap; /* 防止图片换行显示 */
  height: auto;
  display: flex;
  flex: 0 0 100px;
 margin-top: 10px; /* 子元素上边距为10像素 */
   margin-bottom: 5px; /* 子元素下边距为10像素 */
   
  
}
.image {
	flex: 0 0 auto;
  width: 80px; /* 设置图片的宽度
  height: auto; /* 高度自适应，保持宽高比例 */
  border-radius: 50% */
}
.text {
overflow-wrap: break-word;
 margin-left: 20px; /* 设置左边距为10像素 */
  margin-right: 20px; /* 设置右边距为10像素 */
 text-align: left; /* 文本向左对齐 */
  font-size: 16px; /* 调整字号 */
  line-height: 1.5; /* 设置行高，相对于字体大小的倍数，例如 1.5 表示 1.5 倍字体大小的行高 */
  margin: 10px 
}
.title-box{
	 width: 100%;
	 height: 25px;
	background-color: #ff0004;
	text-align: left;
}
.infoBody{
	border: 1px solid #000000;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 94%;
  margin-left: 1%;
}
</style>
