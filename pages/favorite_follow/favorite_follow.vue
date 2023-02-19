<template>
	<top-bar-container :returnAble="true" :title="关注">
		<template #content>
		<nut-cell-group title="特别关注">
			<span style="font-weight: 600;"><nut-cell title="关注" :desc="people+'人'">
			</nut-cell></span>
		</nut-cell-group>
		<nut-cell-group title="权限设置">
			<view style="font-weight: 600;">
			<nut-cell title="仅关注的小朋友可见" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked01" />
				</template>
			</nut-cell>
			<nut-cell title="把我推送给关注的小朋友" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked02" />
				</template>
			</nut-cell>
			<nut-cell title="单元格" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked03" />
				</template>
			</nut-cell>
			<nut-cell title="单元格" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked04" />
				</template>
			</nut-cell>
			<nut-cell title="单元格" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked05" />
				</template>
			</nut-cell>
			<nut-cell title="单元格" >
				<template v-slot:link>
					<nut-switch v-model="switchChecked06" />
				</template>
			</nut-cell>
			</view>
		</nut-cell-group>
		</template>
	</top-bar-container>
</template>

<script>
  //import ApiUtil from '../../utils/ApiUtil';
  import NavigateUtil from '../../utils/NavigateUtil';
  import TimeUtil from '../../utils/TimeUtil';
  import user from '../../store/user.js';
  import { ref } from 'vue';
  import { reactive } from 'vue';
  export default {
	 setup() {
		  // const Click = () => {
		    // console.log('');
			
		  // };
	      const switchChecked01 = ref(true);
		  const switchChecked02 = ref(true);
		  const switchChecked03 = ref(true);
		  const switchChecked04 = ref(true);
		  const switchChecked05 = ref(true);
		  const switchChecked06 = ref(true);
	      return { 
			// testClick, 
			switchChecked01,
			switchChecked02,
			switchChecked03,
			switchChecked04,
			switchChecked05,
			switchChecked06,
			};
	    },
    data() {
      return {
        people:6,
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
