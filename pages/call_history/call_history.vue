<template>
	<top-bar :returnAble="true" title="通话历史"></top-bar>
	
	<view class="history_times">
		<nut-cell center title='通话次数' sub-title='您一年内的通话次数' desc='--次'>
		</nut-cell>
		<nut-cell center title='通话时长' sub-title='您一年内的通话时长' desc='--小时'>
		</nut-cell>
	</view>
	<view class="text_detail">
		<view>通话详情</view>
	</view>
	<view>
		<template>
		  <nut-cell-group >
		    <nut-cell title="2022年11月14日" is-link></nut-cell>
		    <nut-cell title="2022年11月20日" is-link></nut-cell>
		    <nut-cell title="2022年11月26日" is-link></nut-cell>
		    <nut-cell title="2022年12月2日" is-link></nut-cell>
			<nut-cell title="2022年12月8日" is-link></nut-cell>
		  </nut-cell-group>
		</template>
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
.history_times{
	/* margin-top: 20%; */
}
.text_detail{
	text-align: center;
}
</style>
