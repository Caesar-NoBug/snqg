<template>
  <top-bar-container title="我的">
  	<template #content>
  		<div class="head">
  		  <nut-avatar
  		      size="large"
  		      icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png">
  		  </nut-avatar>
  		  <span style="display: flex; flex-wrap: wrap; width: 50%; margin-top: 5%; margin-left: 5%;">
  		    <span class="name">{{name}}</span>
  		    <span class="verticalLine"></span>
  		    <nut-tag plain>{{type}}</nut-tag>
  		    <span class="id">ID:{{id}}</span>
  		    <nut-icon name="eye"></nut-icon>
  		  </span>
  		  
  		</div>
  		<div class="phoneInfo">
  		  <span class="phoneItem">{{call_count}}次</span>
  		  <span class="phoneItem">{{call_time}}</span>
  		  <span class="phoneItem">通话次数</span>
  		  <span class="phoneItem">通话时长</span>
  		</div>
  		<div style="font-size: 0;">
  		  <img src="/static/my_background.png" class="img"><div class="line"></div>
  		</div>
  		
  		<div style="margin-top: 7%;">
  		   <nut-cell @click="change05()" center title="个人信息" icon="my" sub-title="查看或修改个人信息 " is-link="true"></nut-cell>
  		   <nut-cell @click="change02()" center title="通话历史" icon="comment" sub-title="查看您一年内的通话历史 " is-link="true"></nut-cell>
  		   <nut-cell @click="change03()" center title="信息统计" icon="horizontal" sub-title="统计所有通话时长及通话质量 " is-link="true"></nut-cell>
         <nut-cell @click="change04()" center title="设置" icon="setting" sub-title="设置相关功能 " is-link="true"></nut-cell>
  		</div>
  		
  	</template>
  </top-bar-container>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import TimeUtil from '../../utils/TimeUtil'
  
  export default{
    data() {
    	return {
        id: "123456",
    		name: "lisi",
        type: "志愿者",
        avatar: "https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png",
        call_count: 0,
        call_time: "0秒",
    	}
    },
    methods: {
      change01: function() {
      	NavigateUtil.navigateTo('/pages/my_login/my_login');
      },
      change02: function() {
      	NavigateUtil.navigateTo('/pages/call_history/call_history');
      },
	  change03: function() {
		NavigateUtil.navigateTo('/pages/call_detail/call_detail');
	  },
	  change04: function() {
	  	NavigateUtil.navigateTo('/pages/my_settings/my_settings');
	  },
	  change05: function() {
		NavigateUtil.navigateTo('/pages/my_information/my_information');
	  },
    },
    onLoad(options){
      options = NavigateUtil.getNavigateData(options);
      this.name = options.name;
      this.id = options.id;
      this.type = options.type == 0 ? "志愿者" : "家长";
      this.avatar = options.avatar;
      this.call_count = options.call_count;
      this.call_time = TimeUtil.getTimeString(options.call_time);
    }
  }
  

</script>

<style>
  .head{
    margin-left: 5%;
    display: flex;
  }
  .name{
    font-size: 20px;
    font-weight: bold;
    margin-left: 5%;
    letter-spacing: 5px;
  }
  .verticalLine{
    margin-left: 5%;
    margin-right: 8%;
    background-color: gray;
    height: 25px;
    width: 2px;
  }
  .id{
    margin-left: 5%;
    margin-right: 15%;
    font-size: 18px;
    color: dimgray;
  }
  .phoneInfo{
    margin-top: 5%;
    display: flex;
    flex-wrap: wrap;
  }
  .phoneItem{
    width: 50%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
  .img{
    margin-top: 5%;
    margin-left: 10%;
    height: 50px;
  }
  .line{
    background-color: lightgray;
    width: 100%;
    height: 3px;
  }
</style>