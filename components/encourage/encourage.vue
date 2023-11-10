<template>
	<div class="big-box">
		  <div class="title-box">
			  <view style="padding-left: 2%;">继续加油哦！</view>
		  </div >
		  <div class="img-box">
			  <nut-avatar size="70">
			     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2ly1hjpz1llinhj309o09rabi.jpg" alt="图片"  @click="handleImageClick(1)">
				  </nut-avatar>
				 <nut-avatar size="70">
			     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq14ca6mnj30dp0g8gm3.jpg" alt="图片"  @click="handleImageClick(2)">
				 </nut-avatar>
				 <nut-avatar size="70">
				 <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq188lth8j308t08maat.jpg" alt="图片"  @click="handleImageClick(3)">
				  </nut-avatar>
				 
				 <nut-avatar size="70">
			     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq28hmfhuj306t05qglj.jpg" alt="图片"  @click="handleImageClick(4)">
				 </nut-avatar>
	<nut-avatar size="70">
			     <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq1fgi051j302p03m0si.jpg" alt="图片"  @click="handleImageClick(5)">
				  </nut-avatar>
				 <nut-avatar size="70">
				 <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq1ziq346j303l03mdfn.jpg" alt="图片"  @click="handleImageClick(6)">
				 </nut-avatar>
				<nut-avatar size="70">
				<img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq2cbqr77j305e078jr8.jpg" alt="图片"  @click="handleImageClick(7)">
				</nut-avatar>
				 <nut-avatar size="70">
				 <img class="image" src="https://tva1.sinaimg.cn/large/0063SUT2gy1hjq25neahuj305d0793yi.jpg" alt="图片"  @click="handleImageClick(8)">
				 </nut-avatar>
				 
				 
		  </div>
		  <div class="stereo-box">
		    <view class="text">{{ message }}</view>
			<view style="bottom: 2%;right: 0;text-align: right; ">--{{famous_person}}</view>
		  </div>
			</div>
		
</template>

<script>
	export default {
		name:"encourage",
		
		data() {
			return {
				message: '就是说我们不努力的话，我们就会死掉，这个世界就是这么残酷。',
				famous_person:'--刘强东'
				
			}
		},
		methods: {
			handleImageClick(i){
							if(i == 1)
							{	this.famous_person = "--刘强东"
								this.message = "就是说我们不努力的话，我们就会死掉，这个世界就是这么残酷。";
								}
							if(i == 2)
							{	this.famous_person = "--爱迪生"
								this.message = "失败也是我需要的，它和成功对我一样有价值。";
								}
							if(i == 3)
							{	this.famous_person = "--易卜生"
								this.message = "不因幸运而固步自封，不因厄运而一蹶不振。真正的强者，善于从顺境中找到阴影，从逆境中找到光亮，时时校准自己前进的目标。";
								}
							if(i == 4)
							{	this.famous_person = "--鲁 迅"
								this.message = "人生的旅途，前途很远，也很暗。然而不要怕，不怕的人的面前才有路。";
								}
							if(i == 5)
							{	this.famous_person = "--孙中山"
								this.message = "立志是读书人最要紧的一件事。";
								}
							if(i == 6)
							{	this.famous_person = "--安东尼·罗宾"
								this.message = "那些最能干的人，往往是那些即使在最绝望的环境里，仍不断传送成功意念的人。";
								}
							if(i == 7)
							{	this.famous_person = "毛泽东"
								this.message = "饭可以一日不吃,觉可以一日不睡,书不可以一日不读。";
							}
							if(i == 8)
							{	this.famous_person = "--鲁巴金"
								this.message = "读书是在别人思想的帮助下，建立起自己的思想。";
							}			
							}
		}
	}
</script>

<style>
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
.img-box {
 
  width: 92%; 
  overflow-x: auto; 
    white-space: nowrap; 
  height: auto;
  display: flex;
  flex: 0 0 100px;
 margin-top: 5px; 
   margin-bottom: 0px;
   
  
}
.image {

 border-radius: 50% ;
  position: relative;
    width: 100%;
    height: 100%; 
    object-fit: cover; 
display: flex;
  flex-direction: column;
  justify-content: center; 
 
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
	
	border-radius: 10px;
	 width: 100%;
	 height: 25px;
	background-color: #ff0004;
	text-align: left;
}
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
</style>
