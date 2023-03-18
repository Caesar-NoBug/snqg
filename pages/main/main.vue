<template>
	<top-bar-container title="主页">
		<template #content>
			<nut-button @click="func1()">个人信息</nut-button>
      <nut-button @click="func2()">通话历史</nut-button>
      <nut-button @click="func3()">通话详情</nut-button>
      <nut-button @click="func4()">通话界面</nut-button>
      <nut-button @click="func5()">拨入提醒界面</nut-button>

      <nut-button @click="func6()">主页-日程界面</nut-button>
	  <nut-button @click="func7()">主页-关注界面</nut-button>
	  <nut-button @click="func8()">主页-推荐界面</nut-button>

		</template>
	</top-bar-container>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	//import {APIUtil} from '../../api/APIUtils'
  import axios from '../../utils/http.js'
  import ApiUtil from '../../utils/ApiUtil'
  
	export default {
		onLoad() {
		
		  // uni.$on("refresh", function(data) {
		  //   console.log(12)
		  //   const pages = getCurrentPages()
		  //           // 声明一个pages使用getCurrentPages方法
		  //           const curPage = pages[pages.length - 1]
		  //           // 声明一个当前页面
		  //           curPage.onLoad(curPage.options) // 传入参数
		  //           curPage.onShow()
		  //           curPage.onReady()
		   
		  // });
		},
		methods: {
			func1: function() {
				NavigateUtil.navigateTo('/pages/my_information/my_information');
			},
			func2: function() {
				NavigateUtil.navigateTo('/pages/call_history/call_history');
			},
			func3: function() {
				NavigateUtil.navigateTo('/pages/call_detail/call_detail');
			},
			func4: function() {
				NavigateUtil.navigateTo('/pages/chat_call/chat_call');
			},
			func5: function() {
				NavigateUtil.navigateTo('/pages/call_state/call_state');
			},
			func6: function() {
				NavigateUtil.navigateTo('/components/main_date/main_date');
			},
			func7: function() {
				NavigateUtil.navigateTo('/components/main_favorite/main_favorite');
			},
			func8: function() {
				NavigateUtil.navigateTo('/components/main_recommend/main_recommend');
			},
		}

	}

</script>

<style>

</style>
