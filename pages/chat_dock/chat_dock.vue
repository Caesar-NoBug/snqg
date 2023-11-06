<template>
  <top-bar-container :returnAble="true" :title="child_name" >
	<template #content>
		<div class="top">
			
			<span style="margin-left: 46.5%;font-weight: 200;font-size: 80%;">
				{{state}}
			</span>
			<span style="margin-left: 15%;">
				<span style="margin-right:15px ;font-size: 0;"><img src="/static/date.png" @click="change01()" class="img" style="width: 26px;height: 26px"></span>
				<span style="margin-right:10px ;font-size: 0;"><img src="/static/video.png" class="img" @click="change02()" style="width: 26px;height: 26px"></span>
				<span style="margin-right:5px ;font-size: 0;"><img src="/static/more.png" class="img" @click="change03()" style="width: 26px;height: 26px"></span>
			</span>
			<div class="middle-div">
			<span style="font-weight: 200;font-size: 80%;font-size: 16px;">
				{{volunteer_name}}
			</span>
			</div>
			<div>
			<nut-divider hairline></nut-divider>
			<nut-dialog :title="title" :close-on-click-overlay="false" :content="appointment" v-model:visible="visible"></nut-dialog>
			</div>
		</div>
		<scroll-view class="chat" scroll-y="true" scroll-with-animation="true" :scroll-into-view="scrollToView">
		  <view class="chat-ls" v-for="msg in msgs">
		    <div class="chat-time" v-if="msg.time != ''">{{changeTime(msg.time)}}</div>
		    <div class="msg-left" v-if="!msg.fromMe">
		      <nut-avatar :icon="hisAvatar"></nut-avatar>
		      <span class="msg-text-left">{{msg.content}}</span>
		    </div>
		    <div class="msg-right" v-if="msg.fromMe">
		      <span class="msg-text-right">{{msg.content}}</span>
		      <span class="avatar-right">
		        <nut-avatar :icon="myAvatar"></nut-avatar>
		      </span>
		    </div>
		  </view>
		</scroll-view>
		<template >
		<div class="input">
		  <nut-input v-model="message.buttonVal" placeholder="请输入您想说的话"  center>
		    <template #button>
		      <nut-button @click="sendMessage(message.buttonVal,formatTime())" size="small" type="primary">发送</nut-button>
		    </template>
		  </nut-input>
		</div>	
		</template>
	</template>
  </top-bar-container>
</template>

<script>
	//import ApiUtil from '../../utils/ApiUtil';
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import { ref } from 'vue';
	import { reactive } from 'vue';
	var updatedTime = 0;
	export default{
		name:"chat_test",
		
		setup() {
		    const message = reactive({
		        text: ''
		      });
			const visible = ref(false);
			const title = '最近预约';
			const content = '';
			const componentClick = () => {
			      visible.value = true;
			    };
		      return {
		        message,
				visible,
				title,
				content,
				componentClick,
		      };
		    },
		data(){
			
			return{
			state: "在线",	//数字，0为下线，1为上线
			child_name: "卞文静",
			volunteer_name: "张三",
			appointment: "04/20 6:20",
			myAvatar: "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
			hisAvatar: "https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png",
			msgs: [{
			  fromMe: true,//true为发送的信息， false为接收的信息
			  time: 1665814186,
			  type: 0,//信息类型： 0，文字
			  content: "42"
			}, {
			  fromMe: true,
			  time: 1666914186,
			  type: 0,
			  content: "是一个神奇的数字" 
			}, {
			  fromMe: false,
			  time: new Date().getTime() / 1000 - 130,
			  type: 0,
			  content: "为什么"
			}, {
			  fromMe: false,
			  time: new Date().getTime() / 1000,
			  type: 0,
			  content: "你是小傻子"
			}]
			}
		
		},
		onLoad(param) {
			const option = NavigateUtil.getNavigateData(param);
			this.volunteer_name = option.data;
		},
    methods: {

		sendMessage(text,time) {
			
			
			this.msgs.push({
			  fromMe: true,
			  time: time, // 使用当前时间戳作为消息时间
			  type: 0,
			  content: text,
			});
			
			this.message.buttonVal=""
			
		},
		formatTime() {
		  const now = new Date();
		  let hours = now.getHours();
		  let minutes = now.getMinutes();
		
		 
		
		  // 如果分钟小于10，前面加上0
		  minutes = minutes < 10 ? '0' + minutes : minutes;
		
		
		  const formattedTime =  hours + ':' + minutes 
		  return formattedTime;
		},
      change02: function(){
        console.log(123)
        let param = {
          data: "caller",
        };
        NavigateUtil.navigateTo("/pages/chat_call/chat_call", param);
      },
			changeTime: function(time){
			  const updateInterval = 120;//超过两分钟则视为一段新的对话，显示新的对话开始时间
			  let res = '';
			  if(time - updatedTime > updateInterval) res = TimeUtil.getExactTimeString(time);
			  updatedTime = time;
			  return res;
		  }
	}
}
</script>

<style>
	/* .child_name{ */
		/* margin-top: 20px; */
		/* text-align: center; */
	/* } */
	.top_text{
		text-align: center;
	}

	.input{
		position: fixed;
    width: 90%;
    left: 5%;
    right: 5%;
    bottom: 2%;
    border: 1px solid lightgray;
    border-radius: 14px;
	}
	.chat{
	  height: 100%;
	}
	
	.chat-ls{
	  width: 94%;
	  margin-left: 3%;
	  margin-right: 3%;
	}
	
	.chat-time{
	  color: darkgray;
	  text-align: center;
	  font-size: 14px;
	  margin-bottom: 10px;
	}
	
	.msg-left{
	  display: flex;
	  justify-content: flex-start;
	  margin-bottom: 10px;
	}
	
	.msg-right{
	  display: flex;
	  justify-content: flex-end;
	  margin-bottom: 10px;
	}
	
	.avatar-left{
	  
	}
	
	.avatar-right{
	  
	}
	
	.msg-text-left{
    text-align: center;
	  margin-top: 10px;
	  margin-left: 6px;
	  background-color: #fff;
	  border-color: lightgray;
	  padding: 5px 8px;
	  border: 1px solid lightgray;
	  border-radius: 14px;
	}
	.volunteer-name {
		display: flex; /* 使用 Flex 布局 */
		justify-content: center; /* 水平居中 */
		
		 
		  background-color: #f0f0f0; /* 背景颜色 */
		  border: 1px solid #000000; /* 边框线，1像素宽，黑色 */
		  display: inline-block; /* 将容器设置为内联块元素 */
		 padding: 10px; /* 可选：为内容添加内边距 */
		 border-radius: 10px; /* 圆角半径为10像素 */
		background-color: #f0f0f0; /* 背景颜色 */
		
		  
	}
	.middle-div{
		display: flex; /* 使用 Flex 布局 */
		justify-content: center; /* 水平居中 */
	}
	.msg-text-right{
    text-align: center;
	  margin-top: 10px;
	  margin-right: 6px;
	  background-color: lightgray;
	  border-color: lightgray;
	  padding: 5px 8px;
	  border: 1px solid lightgray;
	  border-radius: 14px;
	}
</style>