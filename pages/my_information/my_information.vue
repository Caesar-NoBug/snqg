<template>
	<top-bar-container :returnAble="true" title="个人信息">
		<template #content>
			<div class="text_date">
			</div>
			<view>
				<view class="basic_msg">个人基本信息</view>
				<nut-cell center title='姓名' :desc="name">
				</nut-cell>
				<nut-cell center title='性别' :desc="sex"> 
				</nut-cell>
				<nut-cell center title='电话号码' :desc="phone">
				</nut-cell>
				<nut-cell center title='出生日期' :desc="birth">
				</nut-cell>
				<nut-cell center title='家庭住址' :desc="family">
				</nut-cell>
				<nut-cell center title='就读学校' :desc="school">
				</nut-cell>
				<nut-cell center title='年级' :desc="grade">
				</nut-cell>
				<nut-cell center title='专业' :desc="major">
				</nut-cell>
				<nut-cell center title='实名认证' :desc="x" icon="authentication" is-link="true">
				</nut-cell>
				<nut-cell center title='照片上传' :desc="x" icon="picture" is-link="true">
				</nut-cell>
				<nut-button size="large" type="primary">修改信息</nut-button>
			</view>
			<view>
		
			</view>
			
		</template>
	</top-bar-container>
</template>

<script>
	import ApiUtil from '../../utils/ApiUtil';
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	export default {
		
		data() {
			return {
				name: "赵强", //用户姓名
				type: 0, //用户类型，0为志愿者，1为家长，2为儿童
				avatar: "xx", //用户头像链接
				phone: "13784449342", //用户电话
				sex: "男", //用户性别，0为男，1为女
				birth: "2003年1月3日", //出生年月日时间戳
				bind: "UserMinDto", //绑定用户
				school: "东北大学",
				family: "辽宁省沈阳市",
				grade: "2022",
				major: "软件工程",
				
			}
		},
		methods: {
			
		},
		
	}
</script>

<style>
	.basic_msg{
		text-align: center;
	}
</style>
