<template>
  <view>
    <user-login v-if="!token || token === '{}'"></user-login>
    <user-info v-else></user-info>
  </view>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    data() {
      return {
        
      }
    },
    
    computed: {
        ...mapState('m_user', ['token'])
    }
    
  }
</script>

<style>

</style>
