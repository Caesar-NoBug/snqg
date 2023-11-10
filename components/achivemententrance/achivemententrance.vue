<template>
	<div class="infoBody">
			  <nut-cellgroup>
			    <nut-cell @click="func9()" title="我的成就和荣誉" center sub-title="点击查看" desc="进入" is-link="true">
			      <template v-slot:icon>
			          <img src="https://ooo.0x0.ooo/2023/11/09/OenemF.png" style="width: 50px; height: 50px; margin-right: 10px;"/>
			      </template>
			    </nut-cell>
			  </nut-cellgroup>
			</div>
</template>

<script>
	import NavigateUtil from '../../utils/NavigateUtil';
	import TimeUtil from '../../utils/TimeUtil';
	import user from '../../store/user.js';
	import axios from '../../utils/http.js';
	export default {
		name:"achivemententrance",
		data() {
			return {
				
			}
		},
		methods: {
			func9: function() {
				NavigateUtil.navigateTo('/components/achivement/achivement');
			},
		}
	}
</script>

<style>
.infoBody{
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 94%;
  margin-left: 3%;
  margin-top: 5%;
}
</style>
