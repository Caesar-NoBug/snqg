<template>
  <view>
    用户详情
    <button class="logout-btn" @click="clearToken()">登出</button>
  </view>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    
    name:"user-info",
    data() {
      return {
        
      };
    },
    methods: {
      ...mapMutations('m_user', ['clearToken'])
    }
  }
</script>

<style lang="scss">
.logoutbtn{
  position: fixed;
  bottom: 0;
}
</style>