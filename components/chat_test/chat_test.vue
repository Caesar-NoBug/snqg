<template>
  <top-bar-container title="我的">
  	<template #content>
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
  	</template>
  </top-bar-container>
</template>

<script>
  import TimeUtil from '../../utils/TimeUtil'
  
  var updatedTime = 0;
  
  export default {
    name:"chat_test",
    data() {
      return {
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
          content: "?"
        }]
      };
    },
    methods: {
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
.chat{
  height: 500px;
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
  margin-top: 10px;
  margin-left: 6px;
  background-color: #fff;
  border-color: lightgray;
  padding: 5px 8px;
  border: 1px solid lightgray;
  border-radius: 14px;
}

.msg-text-right{
  margin-top: 10px;
  margin-right: 6px;
  background-color: lightgray;
  border-color: lightgray;
  padding: 5px 8px;
  border: 1px solid lightgray;
  border-radius: 14px;
}
</style>