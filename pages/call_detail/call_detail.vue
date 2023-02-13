<template>
	<top-bar-container :returnAble="true" title="信息统计">
		<template #content>
			<div class="text_date">
			</div>
			<view>
				<nut-cell center title='通话次数' :desc="call_count + '次'">
				</nut-cell>
				<nut-cell center title='通话时长' :desc="getCallTimeString(call_time)"> 
				</nut-cell>
				<nut-cell center title='累计对接儿童人数' :desc="child + '人'">
				</nut-cell>
				<nut-cell center title='通话平均时长' :desc="getAverageString(call_count,call_time)">
				</nut-cell>
				<nut-cell center title='通话成功率' :desc="getCallSuccessDate(call_count,total_counts)">
				</nut-cell>
				<nut-cell center title='志愿时长累计' :desc="getVolunteerTimeString(call_count)">
				</nut-cell>
			</view>
			<view>

			</view>
			<!--留出进行调用数据空间-->

		</template>
	</top-bar-container>
</template>

<script>
	//import ApiUtil from '../../utils/ApiUtil';
    import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	let data = {
		
	};
	
	export default {
		onLoad(option) {
		    let data = NavigateUtil.getNavigateData(option);
			this.id = data.id;
			this.start_time = data.start_time;
			this.duration = data.duration;
			this.completed = data.completed;
			
			let detail = detail();
			this.id = detail.id;
			this.start_time = detail.start_time;
			this.duration = detail.duration;
			this.child = detail.child;
			this.call_count = detail.call_count;
			this.call_time = detail.call_time;
			
      
			//uni.showModal({})
			
		},
		data() {
			return {
				
				id: data.id,
				start_time: data.start_time,
				duration: data.duration,
				// completed: data.completed,
				// 加入child,以及total_counts通话总次数进行尝试，待data完成后进行删除
				child: 4,
				total_counts:2,
				call_count: 1,
				call_time: 14263,
				calls: [{
					id: "2931830120A",
					start_time: 1665814186,
					duration: 14263,
					completed: 1,
				}, {
					id: "293183012AD",
					start_time: 1665814192,
					duration: 14261,
					completed: 1,
				}]
			};
		},
		methods: {
			
			 detail: function(){
				 let query = {
					token: user.getToken()
				 }
				
				 //let dal = ApiUtil.get("localhost:3000/call/detail",query);
				 if(dal.code !== '200') return uni.$showMsg("参数错误或tokenSS失效");
			 },
			
			
			getCallTimeString(time) {
				return TimeUtil.getTimeString(time);
			},
			// getCallDateString(time) {
				// return TimeUtil.getDateString(time);
			// },
			getCallMomentString(time) {
				return TimeUtil.getMomentString(time);
			 },
			getAverageString(call_count,call_time){
				 return TimeUtil.getAverageString(call_count,call_time)
			 },
			getVolunteerTimeString(call_count){
				return TimeUtil.getVolunteerTimeString(call_count)
			},
			getCallSuccessDate(call_count, total_counts){
				return TimeUtil.getCallSuccessDate(call_count, total_counts)
			},
			
		}
	}
</script>

<style>
	.text_date {
		text-align: center;
		/* margin-top: 15%; */
	}
	.call_time {
		text-align: right;
	}
</style>