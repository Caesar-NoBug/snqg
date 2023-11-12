<template>
	<top-bar-container :returnAble="true" title="任务列表">
		<template #content>

			<view class="" v-for="item in taskList" @click="taskDetails" :data-index='item'>
				<nut-cell :title="item.title" :desc="item.progression==100?'已完成':'等待完成'" round-radius="20px"
					size="large">
				</nut-cell>

			</view>
		</template>
	</top-bar-container>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import axios from '../../utils/http.js';
	import user from '../../store/user.js';
	export default {
		data() {
			return {
				id: '',
				detail: '',
				taskFinishTime: '',
				taskUrl: '',
				title: '',
				type: '',
				childId: 1,
				taskList: [{
					title: '20道乘法题',
					progression: 20
				}, {
					title: '10道英语题',
					progression: 100
				}, {
					title: '5道数学题',
					progression: 80
				}]
			}
		},
		onload() {
			//页面刷新获取数据
			axios({
				method: 'GET',
				params: {
					"childId": this.childId,
					'token': user.getToken()
				},
				headers: {
					'Content-Type': 'application/json',
					'token': user.getToken()
				},
				url: '/task/getTask'
			}).then(res => {
				console.log(res);
				if (res.code === 400) return;
				else {
					this.taskList = res.data.taskFinishiVos;
				}
			});

		},
		methods: {
			//跳转到对应的任务详情
			taskDetails(event) {
				uni.$on('front', () => {
					uni.$emit("taskInfo", {
						title: event.currentTarget.dataset.index.title,
						progression: event.currentTarget.dataset.index.progression,
					});
				});
				NavigateUtil.navigateTo('/pages/taskDetails/TaskDetails');
			},

		},
		onUnload() {
			uni.$off('front')
		}
	}
</script>

<style scoped>
	.taskList {
		border: 1rpx solid black;
		border-radius: 20rpx;
		margin: 20rpx;
		padding: 40rpx;
		height: 60rpx;
		font-size: 45rpx;
	}

	.taskDesc {
		display: inline-block;
	}

	.taskState {
		display: inline-block;
		float: right;
		color: red;
	}

	.btn {
		text-align: center;
	}

	.taskProgress {
		color: red;
	}

	.hasFinish {
		color: green;
	}
</style>