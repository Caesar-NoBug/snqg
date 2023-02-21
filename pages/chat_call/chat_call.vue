<template>
      <web-view :webview-styles="webviewStyles" :src="src + token" style="height: 64rem; width: 128rem;">
      </web-view>
</template>

<script>
  import user from '../../store/user.js'
import NavigateUtil from '../../utils/NavigateUtil';
  
  export default {
    onLoad(option){
      option = NavigateUtil.getNavigateData(option);
      console.log(option);
      if(option.data == "caller") this.src = "https://ystrength.hokago.eu.org/#//jump/calling-prepare?token=";
      else if(option.data == "callee") this.src = "https://ystrength.hokago.eu.org/#/jump/calling-dialog?token=";
      console.log(this.src);
    },
    data() {
      return {
        src: "",
        token: user.getToken(),
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
