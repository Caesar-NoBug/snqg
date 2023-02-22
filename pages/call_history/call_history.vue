<template>
	<top-bar-container :returnAble="true" title="通话历史">
		<template #content>
			<view>
				<template>
				  <nut-cell-group >
					<nut-cell v-for="call in calls" :title="call.name" :desc="getCallDateString(call.start_time) + getCallMomentString(call.start_time)"></nut-cell>
				  </nut-cell-group>
				</template>
			</view>
		</template>
	</top-bar-container>
		
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import TimeUtil from '../../utils/TimeUtil';
import user from '../../store/user.js';
import axios from 'axios';

	export default {
		
		data() {
			return {
				 
				// call_count: 1,
				// call_time: 14263,
				// calls: [{
				// 	id: "2931830120A",
				// 	start_time: 1665814186,
				// 	duration: 14263,
				// 	completed: 1,
				// 	name: "张三",
				// 	// 加入name进行尝试，待data完成后进行删除
				// }, {
				// 	id: "293183012AD",
				// 	start_time: 1665814192,
				// 	duration: 14261,
				// 	completed: 1,
				// 	name: "李四",
				// }]
			}
		},
		methods: {
			
			 history: function(){
				
				axios.request({
					method: 'GET',
					url: "https://ystrength-api.hokago.eu.org/call/history",
          token: user.getToken(),
				}).then(res =>{
					if (res.code === 403) return;//参数错误或token失效
					else{
						if (res.code === 200){//操作成功
							//这里把数据存进来
						}
					}
					

				})
				}

				//return ApiUtil.get("localhost:3000/call/history",query);
			 },
			
			getCallDateString(time) {
				return TimeUtil.getDateString(time);
			},
			navigateToCallDetail(call) {
				console.log(call);
			},
			getCallMomentString(time) {
				return TimeUtil.getMomentString(time);
			}
		}
	
</script>

<style>
.history_times{
	/* margin-top: 20%; */
}
.text_detail{
	text-align: center;
}
</style>
