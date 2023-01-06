<template>
	<top-bar returnAble="true" title="通话详情"></top-bar>
	<view>
		<view class="text_date">2022年11月14日</view>
	</view>
	<view>
		<nut-cell center title='通话时间' sub-title='本次通话在何时进行' desc='时间'>
		</nut-cell>
		<nut-cell center title='通话时长' sub-title='本次通话的通话时长' desc='--小时'>
		</nut-cell>
		<nut-cell center title='通话是否完成' sub-title='本次通话是否正常完成' desc='是'>
		</nut-cell>
	</view>
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
.text_date{
	text-align: center;
	/* margin-top: 15%; */
}

</style>
