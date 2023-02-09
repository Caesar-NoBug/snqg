<template>
      <web-view :webview-styles="webviewStyles" :src="'http://localhost:8080/caller.html?name=' + name" style="height: 64rem; width: 128rem;">
        
      </web-view>
  
 
  
  
  
</template>

<script>
  export default {
    data() {
      return {
        name : "卞文静",
      }
    },
    methods: {
      
    }
  }
</script>

<style>

</style>
