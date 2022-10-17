<template>
  <view class="login-container">
   <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
   <button type="primary" class="btn-login" @click="getUserProfile">一键登录</button>
   <text class="tips-text">登录进入少年强国小程序</text>
  </view>
</template>

<script>
  
  import {mapMutations} from 'vuex'
  
  export default {
    name:"user-login",
    data() {
      return {
        
      };
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken']),
      getUserProfile(e){
                  uni.getUserProfile({
                    desc: '用于完善个人资料',// 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                    success: (res) => {
                      // 3. 将用户的基本信息存储到 vuex 中
                    this.updateUserInfo(res.userInfo)
                    
                    // 获取登录成功后的 Token 字符串
                    this.getToken(res)
                    },
                     fail: (res) => {
                          return uni.$showMsg('您取消了登录授权')
                        }
                  })
    },
    getToken(info) {
      var _this = this;
      uni.login({
        onlyAuthorize:true,
        complete(res) {
          const err = res.errMsg
          
          if(!err || err !== 'login:ok') return uni.$showMsg("登录失败！")
          console.log(res)
          
          /*const query = {
            code: res.code,
            encryptedData: info.encryptedData,
            iv: info.iv,
            rawData: info.rawData,
            signature: info.signature
          }*/
          
          //_this.updateToken('fake token')
          
          const query = {
            token: res.code
          }
          
          uni.request({
            header: {
               'Content-Type': 'application/x-www-form-urlencoded' 
            },
            url: 'localhost:3000/api/user/wxlogin',
            method:'POST',
            data:{
              token: res.code,
              auth: uni.$getAuth(query)
            },
            dataType:'json',
            success: (res) => {
              var result = JSON.parse(res.data)
              
              if(result.code === 400)
                return uni.$showMsg(result.msg)
              
              if(result.code === 200)
                _this.hasBind()
              
              _this.updateToken(result.data.token)
            }
          })
          
        }
      })
    }
  },
}  
</script>

<style lang="scss">
.login-container{
  height: 750rpx;
  background-color: #F8F8F8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn-login{
    width: 70%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #03D4B8;
  }
  .tips-text{
    font-size: 12px;
    color: gray;
  }
}
</style>