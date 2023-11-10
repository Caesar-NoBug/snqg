<template>
      <div class="background">
		  
        <div class="topBlock">
          <span class="topItem">
            <nut-icon name="checked" color="#696969" size="24px"></nut-icon>
          </span>
          <span class="topItem">
            <nut-icon name="add" color="#696969" size="24px"></nut-icon>
          </span>
          <span style="width: 96%; margin-left: 2%;">
            <nut-searchbar v-model="searchValue" background="#EFEFEF">
              <template v-slot:leftin>
                <nut-icon name="search2" color="#E74343"></nut-icon>
              </template>
            </nut-searchbar>
          </span>
        </div>
		
        <div class="infoBody">
          <nut-cellgroup>
            <nut-cell @click="gotoDock(info.username)" v-for="(info,index) in infos" :title="info.username" center :sub-title="LastMessages[index]" :desc="getTime(sendTime[index])" is-link="true">
              <template v-slot:icon>
				  <nut-avatar size="small" >
				     <img :src="info.avatar" style="width: 30px; height: 30px; margin-right: 0px;"/>
				  			  </nut-avatar>
              </template>
            </nut-cell>
          </nut-cellgroup>
        </div>
        <!-- <div>{{getTime1()}}</div> -->
      </div>
</template>

<script>
  import TimeUtil from '../../utils/TimeUtil'
  import NavigateUtil from '../../utils/NavigateUtil';
  import axios from '../../utils/http.js'
  import user from '../../store/user.js';
  
  export default {
    name:"chat_info",
	mounted() {
		
		console.log(1111);
		axios({	
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded',
			'token' : user.getToken(),
		  },
		  url: "/chat/friend/list",
		  
		}).then(res =>{
			console.log("好友列表");
			console.log(res);
		  if(res.code === 400)
		{
			console.log(400);
		}
		if (res.code === 200){
			this.infos = res.data;
		    console.log(200)
	  } 
		})
		
		let startTime_1 = 0
		
		axios({
				  method: 'GET',
				  headers: {
				    'Content-Type': 'application/x-www-form-urlencoded',
					'token' : user.getToken(),
				  },
				  url: `chat/pull/${startTime_1}`,
				  params: {
				    'startTime': startTime_1
				  }
				}).then(res =>{
					console.log("聊天记录");
					console.log(res);
				  if(res.code === 400)
				{
				}
				if (res.code === 200){
					this.records=res.data
					const child_id = user.getDetail().id
					// let lastSendTime
					
					for(let i=0;i<this.infos.length;i++)
					{
						 const row =[]
					
					for(let j=0;j<this.records.length;j++)
					{
						// console.log(this.records.length);
						//每一条聊天记录是否属于这个志愿者发送的
						if((this.records[j].sender == this.infos[i].username&&this.records[j].receiverId==child_id) 
						|| (this.records[j].receiver == this.infos[i].username&&this.records[j].senderId==child_id))
						{
							// console.log(j);
							row.push(this.records[j])
							
						}
						
					}
					this.records_one.push(row)
					}
					console.log(this.records_one.length);
					console.log(this.records_one);
					const maxSendTimes = [];
					const LastMessage = [];
					let lastmessage;
					// 外层循环遍历每一行
					for (let i = 0; i < this.records_one.length; i++) {
						
					
						
					  // 内层循环找到当前行的最大值
					  let maxInRow = new Date(this.records_one[i][0].sendTime).getTime();
					  let lastmessage = this.records_one[i][0].content;
					  
					  for (let j = 1; j < this.records_one[i].length; j++) {
					    if (new Date(this.records_one[i][j].sendTime).getTime() > maxInRow) {
							
					      maxInRow = new Date(this.records_one[i][j].sendTime).getTime();
						  lastmessage = this.records_one[i][j].content;
						  
						  // console.log(this.records_one[i][j].content);
						  
					    }
						
					  }
					 
					  
					  maxSendTimes.push(maxInRow);
					  LastMessage.push(lastmessage);
					}
					this.sendTime=maxSendTimes;
					this.LastMessages=LastMessage;
					
					
					
					
		} 
				})
				var _this = this;
		uni.$on("update", function() {
						_this.update();
					});
	},
	
	 beforeRouteEnter(to, from, next) {
	    // 执行重新加载的操作，例如重新获取数据
	    next(vm => {
	      vm.$options.methods.loadData.call(vm);
	    });
	  },
    data() {
      return {
		  infos : null,
		  records : [],
		  records_one : [],
		  LastMessages : [],
		  sendTime : [],
		  times : null,
      };
    },
    methods: {
		
		 loadData() {
		     console.log(123);
		    },
	  
		update: function() {
			console.log(11112222333);
			let startTime_1 = 0
				axios({
						  method: 'GET',
						  headers: {
						    'Content-Type': 'application/x-www-form-urlencoded',
							'token' : user.getToken(),
						  },
						  url: `chat/pull/${startTime_1}`,
						  params: {
						    'startTime': startTime_1
						  }
						}).then(res =>{
							console.log("聊天记录");
							console.log(res);
						  if(res.code === 400)
						{
						}
						if (res.code === 200){
							this.records=res.data
							const child_id = user.getDetail().id
							// let lastSendTime
							
							for(let i=0;i<this.infos.length;i++)
							{
								 const row =[]
							
							for(let j=0;j<this.records.length;j++)
							{
								// console.log(this.records.length);
								//每一条聊天记录是否属于这个志愿者发送的
								if((this.records[j].sender == this.infos[i].username&&this.records[j].receiverId==child_id) 
								|| (this.records[j].receiver == this.infos[i].username&&this.records[j].senderId==child_id))
								{
									// console.log(j);
									row.push(this.records[j])
									
								}
								
							}
							this.records_one.push(row)
							}
							console.log(this.records_one.length);
							console.log(this.records_one);
							const maxSendTimes = [];
							const LastMessage = [];
							let lastmessage;
							// 外层循环遍历每一行
							for (let i = 0; i < this.records_one.length; i++) {
								
							
								
							  // 内层循环找到当前行的最大值
							  let maxInRow = new Date(this.records_one[i][0].sendTime).getTime();
							  let lastmessage = this.records_one[i][0].content;
							  
							  for (let j = 1; j < this.records_one[i].length; j++) {
							    if (new Date(this.records_one[i][j].sendTime).getTime() > maxInRow) {
									
							      maxInRow = new Date(this.records_one[i][j].sendTime).getTime();
								  lastmessage = this.records_one[i][j].content;
								  
								  // console.log(this.records_one[i][j].content);
								  
							    }
								
							  }
							 
							  
							  maxSendTimes.push(maxInRow);
							  LastMessage.push(lastmessage);
							}
							this.sendTime=maxSendTimes;
							this.LastMessages=LastMessage;
							
							
							
							
				} 
						})	
			},
      getTime: function(time){
		  const originalDate = new Date(time);
		  
		  // 获取原始时间的年、月、日、时、分、秒（均按照UTC时间获取）
		  const year = originalDate.getUTCFullYear();
		  const month = originalDate.getUTCMonth() + 1; // 月份从0开始，需要加1
		  const day = originalDate.getUTCDate();
		  const hours = originalDate.getUTCHours();
		  const minutes = originalDate.getUTCMinutes();
		  const seconds = originalDate.getUTCSeconds();
		  
		  // 转换为中国时区的时间
		  const chinaTimezoneOffset = 8 * 60; // 中国时区偏移为8小时，换算为分钟
		  const chinaHours = (hours + chinaTimezoneOffset / 60) % 24;
		  const isSameDay = new Date().getUTCDate() === day; // 判断转换后的中国时间与当前时间是否为同一天
		  
		  // 格式化中国时区的时间
		  const formattedChinaTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${chinaHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
		  
		  // 如果转换后的中国时间与当前时间的日期相同，则不显示日期
		  const finalFormattedChinaTime = isSameDay ? formattedChinaTime.split(' ')[1] : formattedChinaTime;
        return finalFormattedChinaTime;
      },
      getTime1: function(){
        return TimeUtil.getMomentString(new Date().getTime() / 1000);
      },
      gotoDock: function(name){
		  let id
		  const child_id = user.getDetail().id
		  let contents = []
		  console.log(this.sendTime);
		  for(let i=0;i<this.records.length;i++)
		   {
			 //  console.log(this.records[i].sender);
			  if(this.records[i].sender == name)
			  {
				  id = this.records[i].senderId
			  }
		  }
		  
		  for(let j=0;j<this.records.length;j++)
		  {
		  	//每一条聊天记录是否属于这个志愿者发送的
		  	if((this.records[j].senderId == id && this.records[j].receiverId==child_id) 
		  	|| (this.records[j].receiverId == id && this.records[j].senderId==child_id))
		  	{
		  		contents.push(this.records[j]);
		  	}
		  	
		  }
		  
       
		let param = {
		  volunteer_name: name,
		  volunteer_id:id,
		  contents:contents,
		};
		NavigateUtil.navigateTo("/pages/chat_dock/chat_dock", param);
      }
    }
  }
</script>

<style>
.background{
  top: 0;
  height: 750px;
  background-color: #EFEFEF;
}
.topBlock{
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #EFEFEF;
}
.topItem{
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666666;
}
.infoBody{
  width: 94%;
  margin-left: 3%;
}
</style>