<template>
	<nut-navbar :left-show='false' :style="{background:'#E74343'}">
		<div>
			<nut-cell name='rect-left'></nut-cell><!--需要对左箭头进行说明-->
			<view class="text_history">通话历史</view>
		</div>
	</nut-navbar>
	<div>
		<nut-cell center sub-title='通话次数' desc='您一年内的通话次数'>
			<div class='text_times'>--次</div>
		</nut-cell>
		<nut-cell center sub-title='通话时长' desc='您一年内的通话时长'>
			<div class='text_hours'>--小时</div>
		</nut-cell>
	</div>
		<view class="text_detail">通话详情</view>
	<div>
		
	</div>
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
.text_times{
	
}
.text_detail{
	
}
</style>
