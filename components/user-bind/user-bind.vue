<template>
	<view class="login-content">
		
		<view class="invitation-code">
			<input placeholder="输入邀请码" @input="getCode"/>
		</view>
		<view class="login-btn" @click="confirm()">确定</view>
	</view>
</template>
 
<script>
  import {token} from '@/store/user.js';
  import {mapMutations} from 'vuex'
  
  var invitecode = '';
  
	export default {

    data() {
			return {
			};
		},
    
		methods: {
      ...mapMutations('m_user', ['hasBind']),
      
      getCode(e){ 
        invitecode= e.detail.value
      },
      
			confirm() {
			  
        const query = {
          token: token,
          invite_code: invitecode
        }
        var _this = this
        uni.request({
          header: {
             'Content-Type': 'application/x-www-form-urlencoded' 
          },
          url: 'localhost:3000/api/user/wxbind',
          method:'POST',
          data:{
            token: token,
            invite_code: invitecode,
            auth: uni.$getAuth(query)
          },
          success(res) {
            if(res.code === 400)
            return uni.$showMsg("绑定失败！")
            
            _this.hasBind()
          }
        })
        
			}
		},
    /*
    computed: {
        ...mapState('m_user', ['token'])
    }*/
	}
</script>
 
<style scoped>
	
	.login-btn {
		width: 355px;
		height: 45px;
		background: #03D4B8;
		border-radius: 36px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		line-height: 45px;
		position: fixed;
		bottom: 60px;
	}
</style>