<template>
	<login-check>
		<template #content>
			<div class="banner">
				<div class="banner-bg"></div>
			</div>
			<div class="avatar">
				<nut-avatar size="large">
				<img :src="avatar" />
				</nut-avatar>
			</div>
			<div class="my_info">
				<div class="text-large">{{username}}</div>
				<div class="text-small">{{address}}</div>
			</div>
			<div class="my_point_background"></div>
			<div class="my_point">
				<div class="point_number">{{point}}</div>
				<div class="point_text">积分</div>
			</div>
			<div class="split_line"></div>
			<div class="point_detail">
				<div class="blank_container1"></div>
				<div class="point_container">
					<div class="point_bills">
						<view @click="change01()" class="bill_image">
							<image style="width: 40px; height: 40px;" mode="aspectFit" src="./../static/bill.png"></image>
						</view>
						<div class="bill_text">积分明细</div>
					</div>
					<div class="point_store">
						<view @click="change02()" class="store_image">
							<image style="width: 40px; height: 40px;" mode="aspectFit" src="./../static/store.png"></image>
						</view>
						<div class="store_text">积分商城</div>
					</div>
					<div class="point_ranking">
						<view @click="change03()" class="ranking_image">
							<image style="width: 40px; height: 40px;" mode="aspectFit" src="./../static/ranking.png"></image>
						</view>
						<div class="ranking_text">积分排名</div>
					</div>
				</div>
				<div class="blank_container2"></div>
			</div>
			<div class="my_ranking_background">
				<div class="ranking_progress_text">排名进步</div>
			</div>
			<div class="progress_chart">
				<view>
					<progress_chart></progress_chart>
				</view>
			</div>
			<div class="exit">
				<nut-button block type="primary" @click="change04()">退出登录</nut-button>
			</div>
		</template>
	</login-check>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js';
  
  export default{
    data() {
    	return {
    	username: "lisi",
        avatar: "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
		address: "翻斗花园牛爷爷家",
		point: "520"
    	}
    },
	
	methods: {
	  change01: function() {
	  	NavigateUtil.navigateTo('/pages/my_information/my_information');
	  },
	  change02: function() {
	  	NavigateUtil.navigateTo('/pages/call_history/call_history');
	  },
	  change03: function() {
	  	NavigateUtil.navigateTo('/pages/call_detail/call_detail');
	  },
	  change04: function() {
	  	//退出登录
		uni.removeStorageSync('token');
		uni.removeStorageSync('isBind');
		uni.removeStorageSync('detail');
		uni.removeStorageSync('type');
		uni.$emit("updateState", {});
		NavigateUtil.switchTab('/pages/main/main');
	  }
	},
	
	onLoad(){
		let user_detail = user.getDetail();
		console.log(user_detail)
		this.username = user_detail.username;
		this.address = user_detail.address;
		this.avatar = user_detail.avatar;
		this.point = user_detail.point;
	},
	
  }
  
</script>

<style>
	.banner {
	    position: relative;
	    width: 100%;
	    height: 330px;
	    overflow: hidden;
	}
	.banner .banner-bg {
	    position: absolute;
	    left: -25%;
	    width: 150%;
	    height: 280px;
	    background-color: #C82519;
	    border-bottom-left-radius: 100%;
	    border-bottom-right-radius: 100%;
	    background-image: linear-gradient(0deg, #f1503b, #FF3838 50%);  /* 渐变 */
	}
	.avatar {
		position: absolute;
		top: 82px; /* 距离顶部的距离 */
		left: 18px; /* 距离左边的距离 */
	}
	/* my_info 组件样式 */
	.my_info {
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-start;
	  align-items: flex-start;
	  position: absolute;
	  top: 90px; /* 距离顶部的距离 */
	  left: 126px; /* 距离左边的距离 */
	  color: white; /* 文本颜色 */
	}
	
	/* my_info 内部的大文本框样式 */
	.my_info .text-large {
	  font-size: 30px; /* 字体大小 */
	  letter-spacing: 0; /* 字距 */
	  font-weight: bold;
	}
	
	/* my_info 内部的小文本框样式 */
	.my_info .text-small {
	  font-size: 14px; /* 字体大小 */
	  letter-spacing: 0; /* 字距 */
	}
	.my_point_background {
	  position: absolute;
	  top: 187px; /* 距离顶部的距离 */
	  left: 18px; /* 距离左边的距离 */
	  right: 18px; /* 距离右边的距离，配合left使得元素居中 */
	  height: 168px; /* 高度 */
	  opacity: 1; /* 不透明度 */
	  border-radius: 6px; /* 边框圆角 */
	  background: rgba(255, 255, 255, 1); /* 背景颜色 */
	  box-shadow: 0px 14px 40px rgba(0, 0, 0, 0.05); /* 阴影 */
	}
	.my_point {
		left:33px;
		top: 203px;
		display: flex;
		flex-direction: row;
		position: absolute;
		align-items: center;
		gap: 3px;
	}
	.point_number {
		font-size: 26px;
		font-weight: 700;
		letter-spacing: 0px;
		line-height: 34.48px;
		color: rgba(212, 48, 48, 1);
	}
	.point_text {
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0px;
		line-height: 18.56px;
		color: rgba(212, 48, 48, 1);
	}
	.split_line {
		position: absolute;
		top: 250px; 
		left: 33px; 
		right: 33px; 
		background:#E5E5E5;
		height: 1px; 
	}
	.point_detail {
		position: absolute;
		top: 266px;
		left: 33px;
		right: 33px;
		display: flex;
		flex-direction: row;
		gap: 0px;
	}
	.point_detail .blank_container1 {
		width: 22px;
	}
	.point_detail .blank_container2 {
		width: 22px;
	}
	.point_detail .point_container {
		display: flex;
		flex-direction: row;
		gap: calc(50vw - 145px);
	}
	.point_detail .point_container .point_bills {
		width: 60px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		align-items: center;
	}
	.point_detail .point_container .point_store {
		width: 60px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		align-items: center;
	}
	.point_detail .point_container .point_ranking {
		width: 60px;
		display: flex;
		flex-direction: column;
		gap: 3px;
		align-items: center;
	}
	.point_detail .point_container .point_bills .bill_text {
		left: 3px;
		top: 0px;
		width: 60px;
		height: 16px;
		opacity: 1;
		display: flex;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 18.56px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
	}
	.point_detail .point_container .point_store .store_text {
		left: 3px;
		top: 0px;
		width: 60px;
		height: 16px;
		opacity: 1;
		display: flex;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 18.56px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
	}
	.point_detail .point_container .point_ranking .ranking_text {
		left: 3px;
		top: 0px;
		width: 60px;
		height: 16px;
		opacity: 1;
		display: flex;
		font-size: 14px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 18.56px;
		color: rgba(0, 0, 0, 1);
		text-align: left;
	}
	.my_ranking_background {
		position: absolute;
		top: 368px; /* 距离顶部的距离 */
		left: 18px; /* 距离左边的距离 */
		right: 18px; /* 距离右边的距离，配合left使得元素居中 */
		height: 318px; /* 高度 */
		opacity: 1; /* 不透明度 */
		border-radius: 6px; /* 边框圆角 */
		background: rgba(255, 255, 255, 1); /* 背景颜色 */
		box-shadow: 0px 14px 40px rgba(0, 0, 0, 0.05); /* 阴影 */
	}
	.my_ranking_background .ranking_progress_text {
		position: absolute;
		top: 23px;
		left: 15px;
		font-size: 18px;
		font-weight: 600;
		letter-spacing: 0px;
		line-height: 23.87px;
		color: rgba(212, 48, 48, 1);
	}
	.progress_chart {
		position: absolute;
		left: 30px;
		right: 30px;
		width: calc(100vw-60px);
		top: 425px;
	}
	.exit {
		width: 70%;
		top: 700px;
		position: absolute;
		left: 15%;
	}
	
</style>