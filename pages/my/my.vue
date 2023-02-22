<template>
	<!-- <top-bar title="我的"></top-bar> -->
	<top-bar-container title="我的">
		<template #content>
      <my_detail></my_detail>
		</template>
	</top-bar-container>
</template>

<script>
  import NavigateUtil from '../../utils/NavigateUtil';
  import user from '../../store/user.js';
  
  export default {
    onLoad() {
    
      uni.$on("refresh", function(data) {
        console.log(12)
        const pages = getCurrentPages()
                // 声明一个pages使用getCurrentPages方法
                const curPage = pages[pages.length - 1]
                // 声明一个当前页面
                curPage.onLoad(curPage.options) // 传入参数
                curPage.onShow()
                curPage.onReady()
       
      });
    },
    data() {
      return {
        
      }
    },
  	methods: {
  		
  	}
  }
  
  user.getState()
</script>

<style>
</style>