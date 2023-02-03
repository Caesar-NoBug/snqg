<template>
  <top-bar-container :returnAble="true" :title="child_name" >
	<template #content>
		<div class="top">
			<span style="margin-left: 48%;font-weight: 200;font-size: 80%;">
				{{state}}
			</span>
			<span style="margin-left: 15%;">
				<span style="margin-right:15px ;font-size: 0;"><img src="/static/日历.png" @click="change01()" class="img" style="width: 30px;height: 30px"></span>
				<span style="margin-right:10px ;font-size: 0;"><img src="/static/视频监控.png" class="img" @click="change02()" style="width: 30px;height: 30px"></span>
				<span style="margin-right:5px ;font-size: 0;"><img src="/static/更多.png" class="img" @click="change03()" style="width: 30px;height: 30px"></span>
			</span>
			<div>
			<nut-divider hairline></nut-divider>
			<div style="margin-left: 36%;">
			<nut-button @click="componentClick" plain type="primary">查看最近预约</nut-button>
			</div>
			<nut-dialog :title="title" :close-on-click-overlay="false" :content="appointment" v-model:visible="visible"></nut-dialog>
			
			</div>
		</div>
		<template >
		<div class="input">
		  <nut-input v-model="state.buttonVal" placeholder="请输入您想说的话" clearable center >
		    <template #button>
		      <nut-button size="small" type="primary">发送</nut-button>
		    </template>
		  </nut-input>
		</div>	
		</template>
	</template>
  </top-bar-container>
</template>

<script>
	import ApiUtil from '../../utils/ApiUtil';
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import { ref } from 'vue';
	import { reactive } from 'vue';
	
	export default{
		setup() {
		    const state = reactive({
		        buttonVal: ''
		      });
			const visible = ref(false);
			const title = '最近预约';
			const content = '';
			const componentClick = () => {
			      visible.value = true;
			    };
		      return {
		        state,
				visible,
				title,
				content,
				componentClick,
		      };
		    },
		data(){
			
			return{
			state: "在线",	//数字，0为下线，1为上线
			child_name: "卞文静",
			appointment: "04/20 6:20",
			
			}
		
		},
		methods: {
			
		},
	}
	
</script>

<style>
	/* .child_name{ */
		/* margin-top: 20px; */
		/* text-align: center; */
	/* } */
	.top_text{
		text-align: center;
	}

	.input{
		margin-top: 625px;
	}
</style>