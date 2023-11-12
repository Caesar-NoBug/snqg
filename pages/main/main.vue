<template>
	<top-bar-container title="主页">
		</top-bar-container>
		<template #content>
			<nut-button @click="func1()">个人信息</nut-button>
      <nut-button @click="func2()">通话历史</nut-button>
      <nut-button @click="func3()">通话详情</nut-button>
      <nut-button @click="func4()">通话界面</nut-button>
      <nut-button @click="func5()">拨入提醒界面</nut-button>
      <nut-button @click="func6()">主页-日程界面</nut-button>
	  <nut-button @click="func7()">主页-关注界面</nut-button>
	  <nut-button @click="func8()">主页-推荐界面</nut-button>
	   <nut-button @click="lookRank()">主页-查看排名</nut-button>
	   <nut-button @click="lookTask()">主页-查看任务</nut-button>
	   <nut-button @click="lookDesire()">主页-查看心愿</nut-button>

	  
	 
	 <div class="big-box">
	  <div class="title-box">
		  <p>&nbsp;|&nbsp;|&nbsp;|&nbsp;&nbsp;继续加油哦！</p>
	  </div >
	  <div class="img-box">
		  <nut-avatar size="small" >
		     <img src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" style="width: 30px; height: 30px; margin-right: 0px;"/>
		  			  </nut-avatar>
		  <nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(1)">
			 </nut-avatar>
<nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(1)">
			 </nut-avatar>
<nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(0)">
			  </nut-avatar>
			 <nut-avatar size="70">
		     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(1)">
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
		          <img src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpzlzrndhj303u0433yl.jpg" style="width: 50px; height: 50px; margin-right: 10px;"/>
		      </template>
		    </nut-cell>
		  </nut-cellgroup>
		</div> -->
		</template>
		
	
	
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
			lookRank: function() {
				NavigateUtil.navigateTo('/pages/LookRank/LookRank');
			},
			lookTask: function(){
				NavigateUtil.navigateTo('/pages/taskList/TaskList');
			},
			lookDesire:function(){
				NavigateUtil.navigateTo('/pages/desireList/DesireList');
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
  height: 130px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  /* line-height: 100px; */
  
  border: 1px solid #2980b9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.4);
  margin-top: 5px; /* 子元素上边距为10像素 */
    margin-bottom: 15px; /* 子元素下边距为10像素 */
}
.big-box {
	
	width: 98vw;
	 margin-top: 20px; 
	  margin-bottom: 20px; 
	display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 margin-left: 1%;
  
  background-color: #ffffff;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 10px;
 
}

.text {
overflow-wrap: break-word;
 margin-left: 20px; /* 设置左边距为10像素
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
