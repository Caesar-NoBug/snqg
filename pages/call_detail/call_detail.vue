<template>
	<top-bar-container :returnAble="true" title="通话详情">
		<template #content>
			<div class="text_date">
				<span>{{getCallDateString(start_time)}}</span>
			</div>
			<view>
				<nut-cell center title='通话时间' sub-title="本次通话在何时进行" :desc="getCallMomentString(start_time)">
				</nut-cell>
				<nut-cell center title='通话时长' sub-title='本次通话的通话时长' :desc='getCallTimeString(duration)'>
				</nut-cell>
				<nut-cell center title='通话是否完成' sub-title='本次通话是否正常完成' :desc='completed == 1 ? "是" : "否"'>
				</nut-cell>
			</view>
			<view>

			</view>
			<!--留出进行调用数据空间-->

		</template>
	</top-bar-container>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	let data = {
	};
	export default {
		onLoad(option) {
			let data = NavigateUtil.getNavigateData(option);
			this.id = data.id;
			this.start_time = data.start_time;
			this.duration = data.duration;
			this.completed = data.completed;
			//uni.showModal({})
		},
		data() {
			return {
				id: data.id,
				start_time: data.start_time,
				duration: data.duration,
				completed: data.completed,
			};
		},
		methods: {
			getCallTimeString(time) {
				return TimeUtil.getTimeString(time);
			},
			getCallDateString(time) {
				return TimeUtil.getDateString(time);
			},
			getCallMomentString(time) {
				return TimeUtil.getMomentString(time);
			}
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