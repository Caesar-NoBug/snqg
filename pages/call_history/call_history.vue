<template>
	<top-bar-container :returnAble="true" title="通话历史">
		<template #content>
			<view class="history_times">
				<nut-cell center title='通话次数' sub-title='您的总通话次数' :desc="call_count + ' 次'">
				</nut-cell>
				<nut-cell center title='通话时长' sub-title='您的总通话时长' :desc="getCallTimeString(call_time)">
				</nut-cell>
			</view>
			<view class="text_detail">
				<view>通话详情</view>
			</view>
			<view>
				<template>
				  <nut-cell-group >
				   <!-- <nut-cell title="2022年11月14日" is-link></nut-cell>
				    <nut-cell title="2022年11月20日" is-link></nut-cell>
				    <nut-cell title="2022年11月26日" is-link></nut-cell>
				    <nut-cell title="2022年12月2日" is-link></nut-cell>
					<nut-cell title="2022年12月8日" is-link></nut-cell> -->
					<nut-cell v-for="call in calls" :title="getCallDateString(call.start_time)" @click="navigateToCallDetail(call)"></nut-cell>
				  </nut-cell-group>
				</template>
			</view>
			<!--留出进行调用数据空间-->
		</template>
	</top-bar-container>
	
	
</template>

<script>
import NavigateUtil from '../../utils/NavigateUtil';
import TimeUtil from '../../utils/TimeUtil'
	export default {
		data() {
			return {
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
			}
		},
		methods: {
			getCallTimeString(time) {
				return TimeUtil.getTimeString(time);
			},
			getCallDateString(time) {
				return TimeUtil.getDateString(time);
			},
			navigateToCallDetail(call) {
				console.log(call);
				NavigateUtil.navigateTo("/pages/call_detail/call_detail", call);
			},
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
