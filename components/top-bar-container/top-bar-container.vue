<template>
 <view :style="{position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%'}">
  <top-bar :returnAble="returnAble" :title="title"></top-bar>
 </view>
 <view :style="{marginTop: navBarHeight + 45 + 'px'}">
    <view v-if="!loading_visible">
      <my_login v-if="state === 0"></my_login>
      <my_bind v-else-if="state === 1"></my_bind>
      <slot name="content" v-else></slot>
    </view>
     <nut-dialog
           teleport="#app"
           title="加载中..."
           content="请稍后"
           noOkBtn="true"
           noCancelBtn="true"
           v-model:visible="loading_visible"
         >
         </nut-dialog>
 </view>
 <view>
 	<view v-if="calling === 1">
 		<call-state></call-state>
 	</view>
 </view>
</template>

<script>
  import user from '../../store/user.js';
 const app = getApp();
  
 export default {
  name: "top-bar-container",
  props: {
   returnAble: {
    type: Boolean,
    default: false
   }, //是否显示返回icon
   title: {
    type: String,
    default: ''
   }, //文字标题
  },
  data() {
   return {
    navBarHeight: app.globalData.navBarHeight,
        loading_visible: true,
        state: 0,
		calling: 1,
   };
  },
    mounted() {
      console.log(0)
      this.loading_visible = true;
      this.updateState();
      
      setTimeout(() => {
        this.loading_visible = false;
      }, 1000);
      
      let _this = this;
      uni.$on("updateState", function(data) {
        _this.updateState();
      });
      
      user.check();
	  
	  setInterval(() =>{
	  	this.calling = res.data.calling;
	  	console.log("轮询..");
	  });
    },
    methods: {
		updateState: function(){
			this.state = user.getState();
		},
		state: function(){
			
			axios.request({
				method: 'GET',
				url: "https://ystrength.hokago.eu.org/call/state",
			}).then(res =>{
				if(res.code === 200){
				 return res.data.calling;
				}else if(res.code === 403){
				 return 0;
				} 
			})
		},
    }
 }
  
  
</script>

<style scoped>

</style>
<!-- <template>
	<view :style="{position: 'fixed', zIndex: 9999, top: 0, left: 0, width: '100%'}">
		<top-bar :returnAble="returnAble" :title="title"></top-bar>
	</view>
	<view :style="{marginTop: navBarHeight + 55 + 'px'}">
    <view v-if="!loading_visible">
      <my_login v-if="state === 0"></my_login>
      <my_bind v-else-if="state === 1"></my_bind>
      <slot name="content" v-else></slot>
    </view>
     <nut-dialog
           teleport="#app"
           title="加载中..."
           content="请稍后"
           v-model:visible="loading_visible"
         >
         </nut-dialog>
	</view>
	<view>
		<view v-if="calling === 1">
			<call-state></call-state>
		</view>
	</view>
</template>

<script>
  import user from '../../store/user.js';
  import axios from 'axios';
	const app = getApp();
	
	export default {
		name: "top-bar-container",
		props: {
			returnAble: {
				type: Boolean,
				default: false
			}, //是否显示返回icon
			title: {
				type: String,
				default: ''
			}, //文字标题
		},
		data() {
			return {
				navBarHeight: app.globalData.navBarHeight,
        loading_visible: true,
        state: 2,
		calling: 1,
			};
		},
    onLoad() {
      
    },
	
    methods: {
      updateState: function(){
        this.state = user.getState();
      },
	  state: function(){
	  	
	  	axios.request({
	  		method: 'GET',
	  		url: "https://ystrength.hokago.eu.org/call/state",
	  	}).then(res =>{
	  		if(res.code === 200){
	  		 return res.data.calling;
	  		}else if(res.code === 403){
	  		 return 0;
	  		} 
	  	})
	  },
    },
	
	};
	this.loading_visible = true;
	
	this.updateState();
	
	setTimeout(() => {
		this.loading_visible = false;
	},1000);
	
	let_this = this;
	uni.$on("updateState", function(data){
		_this.updateState();
	});
	
	setInterval(() =>{
		this.calling = res.data.calling;
		console.log("轮询..");
	});
</script>

<style scoped>
</style>
 -->