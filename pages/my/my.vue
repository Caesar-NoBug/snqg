<template>
  <view>
    <user-login v-if="!token || token === '{}'"></user-login>
    <user-bind v-else-if="!isbind"></user-bind>
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
        ...mapState('m_user', ['token', 'isbind'])
    }
    
  }
</script>

<style>

</style>
