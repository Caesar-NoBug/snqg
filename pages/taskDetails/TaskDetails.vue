<template>
	<top-bar-container :returnAble="true" title="任务详情" class="container">
		<template #content>
		<form @submit="onsubmit">
		<input type="text" name="id" style="display: none;">
		<input type="text" name="changePoint" style="display: none;">
		<input type="text" name="childId" style="display: none;">
		<text class="introduction">任务说明：</text>
		
		<text>{{title}}</text>
		
		<text class="introduction">已完成进度：</text>
		
		<progress :percent="progression" show-info />
		
		<view class="taskHelp">
			<view class="help">
				<text>遇到困难？</text>
			</view>
			<button @click="goHelp"
				class="help"
				style="height: 55rpx;line-height: 50rpx;font-size: 40rpx;color:red;background-color:#f4c900 ;">向志愿者求助</button>
		</view>
		<text style="font-weight: bold;font-size: 40rpx;">上传完成情况</text>
		<view class="introduction">
			<textarea name="detail" id="detail" cols="30" rows="6" placeholder="在此填写文字说明"></textarea>
		</view>
		<view class="picLoad">
			<button @click="chooseImage" class="choose" style="height: 180rpx;width: 200rpx;">
				<img src="" alt="">
			</button>
		</view>
		<view class="imgBox" >
			<image :src="taskUrl" style="height: 180rpx;width: 200rpx;display: inline-block;"></image>
		</view>
		<view class="btnPosition">
			<button form-type="submit" type="primary"
				style="color: white;background-color: red;border-radius: 40rpx;width: 100%;">确认提交</button>
		</view>
		</form>
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
					detail: '完成10道英语题',
					progression: 100,
					taskUrl: '',
					title: '10道英语题',
					type: '',
					childId:'1',
					changePoint:'',
			}
		},
		onLoad() {
			uni.$on('taskInfo', (res)=>{
				console.log(res)	
					 this.title = res.title,
					 this.progression=res.progression
			});
			uni.$emit('front')
		},
		onUnload() {
			//移除监听事件
			uni.$off('taskInfo')
		},
		methods: {
			goHelp() {
				NavigateUtil.navigateTo('/pages/taskHelp/TaskHelp')
			},
			chooseImage() {
				uni.chooseImage({
					success: (res) => {
						this.taskUrl = res.tempFilePaths
					}
				})
			},
			onsubmit(event) {
				axios({
								method: 'POST',
								params: {
									"id": this.id,
									"detail":this. detail,
									"desc": this.desc,
									"taskUrl": this.taskUrl,
									'token': user.getToken() 
								},
								headers: {
								  'Content-Type': '	application/json',
								  'token': user.getToken() 
								},
								url: '/task/sendTaskFinishRequest'
							}).then(res => {
				  console.log(res);
				  if (res.code === 400) return;
				  if (res.code === 200) {
				    		//任务完成后进入任务完成界面
							NavigateUtil.navigateTo('/pages/taskFinish/TaskFinish')
				  }
				});
			}
			
		}

	}
</script>

<style scoped>
	.container{
		display: grid;
	}
	text{
		padding: 20rpx;
		padding-left: 40rpx;
		display: block;
	}
	progress{
		padding: 20rpx;
	}
	.introduction {
		font-weight: bold;
		font-size: 40rpx;
	}

	.help {
		color: blue;
		font-size: 35rpx;
		font-weight: bold;
		text-align: right;
		display: inline-block;
	}

	.taskHelp {
		text-align: right;
	}

	.help {
		display: inline-block;
		margin-top: 50rpx;
		padding-right: 20rpx;
	}
	
	.btnPosition .picLoad{
		text-align: center;
		padding: 40rpx;
		margin: 20rpx;
	}
	.tijiao {
		display: block;
	}
	.introduction {
		padding-left: 35rpx;
		padding-top: 25rpx;
	}
</style>