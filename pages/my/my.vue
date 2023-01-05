<template>
	<nut-navbar :left-show="false" :style="{background: '#E74343'}">
		<template #left>
			<nut-icon color="#FFFFFF" name="left"></nut-icon>
		</template>
		<template #content>
			<div style="color: white;">
				这是标题
			</div>
		</template>
	</nut-navbar>
	<my_login></my_login>

</template>

<script>
	// uni.hideTabBar();
</script>

<style>
	.nut-navbar__left {
		color: white;
	}
</style>
