<template>
	<top-bar-container :returnAble="true" title="愿望列表">
		<template #content>
			<nut-button size="large" type="primary" @click="addDesire">添加愿望</nut-button>
			<view class="" v-for="item in desireList" @click="desireDetails" :data-index='item'>
				<nut-cell :title="item.title" :desc="item.progression?'已完成':'等待完成'" round-radius="20px"
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
				desireList: [{
					title: '想要一个书包',
					progress: true,
					desc: '很想要一个书包'
				}, {
					title: '想要一个玩偶',
					progress: false,
					desc: '很想要一个玩偶'
				}]
			}
		},
		methods: {
			//跳转到对应的心愿详情
			desireDetails(event) {
				uni.$on('desireBefore', () => {
					uni.$emit("desireInfo", {
						title: event.currentTarget.dataset.index.title,
						desc: event.currentTarget.dataset.index.desc,
						progress: event.currentTarget.dataset.index.progress,
					});
				});
				NavigateUtil.navigateTo('/pages/desireDetails/DesireDetails')
			},
			//跳转到添加心愿页面
			addDesire() {
				NavigateUtil.navigateTo('/pages/desirePost/DesirePost');
			}

		},
		onUnload() {
			uni.$off('desireBefore')
		},
		onLoad() {
			//页面刷新获取数据			
			axios({
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'token': user.getToken() 
				},
				url: '/desire/getDesire'
			}).then(res => {
				if (res.code === 400) {
					console.log(400);
				}
				if (res.code === 200) {
					console.log(200);
					this.desireList = res.data.desireVoList
				}
			});
		},
	}
</script>

<style scoped>
	.desireList {
		border: 1rpx solid black;
		border-radius: 20rpx;
		margin: 20rpx;
		padding: 40rpx;
		height: 60rpx;
		font-size: 45rpx;
	}

	.deisreDesc {
		display: inline-block;
	}

	.desireState {
		display: inline-block;
		float: right;
		color: red;
	}

	.btn {
		text-align: center;
	}

	.hasFinish {
		color: green;
	}
</style>