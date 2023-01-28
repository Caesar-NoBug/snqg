<template>
  <top-bar-container title="我的">
  	<template #content>
      <div style="margin-left: 7%; margin-right: 7%;">
        <div style="color: dimgray; font-weight: bold; font-size: 13px;">关于</div>
        <nut-cell center title="反馈与帮助" icon="tips" is-link="true"></nut-cell>
        <nut-cell center title="关于" icon="refresh" is-link="true"></nut-cell>
        <div style="margin-top: 500px;">
          <nut-cell center title="退出登录" icon="share-n" is-link="true"></nut-cell>
        </div>
      </div>
  	</template>
  </top-bar-container>
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

</style>
