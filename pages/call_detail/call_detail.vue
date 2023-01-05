<template>
	<div>
		<nut-icon name='rect-left'></nut-icon><!--需要对左箭头进行说明-->
		<view class="text_history">通话历史</view>
	</div>
	<div>
		<view class="text_date">日期</view>
	</div>
	<div>
		<nut-cell center sub-title='通话时间' desc='本次通话在何时进行'>
			<div class='text_time'>时间</div>
		</nut-cell>
		<nut-cell center sub-title='通话时长' desc='本次通话的通话时长'>
			<div class='text_hour'>--小时</div>
		</nut-cell>
		<nut-cell center sub-title='通话是否完成' desc='本次通话是否正常完成'>
			<div class='text_if'>是</div>
		</nut-cell>
	</div>
	<view>
		
	</view>
	<!--留出进行调用数据空间-->
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.text_history{
	
}
</style>
