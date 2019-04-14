<template>
  <div class="login-box" v-show="isShow" ref="loading">
    <p>登录领取红包</p>
    <ul>
      <li>
        <span>+86 </span>
        <input type="text" v-model="tel" placeholder="请输入手机号" />
      </li>
      <li>
        <input type="text" v-model="smsCode" placeholder="请输入验证码" />
        <!-- <span>重新发送 (59)</span> -->
        <span @click="getCode">获取验证码</span>
      </li>
    </ul>
    <input type="button" class="login-btn" @click="loginFn" value="立即登录" />
    <div class="close" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'loginbox',
  props: [
    'isShow'
  ],
  data(){
    return {
      tel: '',
      smsCode: '',
      loginType: 1
    }
  },
  methods: {
    close(){
      this.$emit('closeFn', false)
    },
    getCode(){
      if(!this.tel){
        alert('请输入手机号')
        return
      }
      this.$loading.show({
        el: this.$refs.loading
      })
      this.axiosPost('mobile/check',{ // 检查手机号是否已经注册过
        mobileNo: this.tel
      }).then((res) => {
        if(res.data.attachment.notMobileNo){ // 登录
          this.loginType = 2
        }
        this.axiosPost('sms/send',{ // 发送验证码
          mobileNo: this.tel,
          type: this.loginType
        }).then(() => {
          this.$loading.hide()
        })
      })
    },
    loginFn(){
      this.$loading.show({
        el: this.$refs.loading
      })
      this.axiosPost('login',{ // 登录
        phoneNum: this.tel,
        smsCode: this.smsCode,
        loginType: 1
      }).then((res) => {
        localStorage.setItem('uid', res.data.attachment.uid)
        localStorage.setItem('token', res.data.attachment.token)
        this.close()
        this.$loading.hide()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .login-box
    width 5.8rem
    height 5.88rem
    background #fff
    border-radius .3rem
    padding .4rem .3rem 0 .4rem
    box-sizing border-box
    position absolute
    z-index 101
    top 2.42rem
    left .85rem
    display flex
    flex-direction column
    justify-content flex-start
    align-items flex-start
    .close
      position absolute
      cursor pointer
      width .38rem
      height .38rem
      background url('/images/close.png') no-repeat
      background-size 100% auto
      right .3rem
      top .4rem
    p
      font-size .3rem
      color #333
      height .42rem
      line-height .42rem
    ul 
      margin-top .2rem
      li
        height 1.32rem
        width 5rem
        margin 0 auto
        line-height .42rem
        border-bottom 1px solid #F0F0F0
        display flex
        align-items center
        input[type="text"]
          border none
          height .6rem
          line-height .6rem
          margin-left .15rem
          text-indent .1rem
          &::placeholder
            color #eee
        &:first-child
          span
            font-size .3rem
            line-height .3rem
            color #888
            padding-right .1rem
            border-right 1px solid #cccccc
        &:last-child
          input[type="text"]
            width 3rem
          span
            font-size .3rem
            color #333
            cursor pointer
    .login-btn
      width 5rem
      height .98rem
      background linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%)
      border-radius .2rem
      border none
      cursor pointer
      font-size .36rem
      color #fff
      line-height .5rem
      margin-top .4rem
</style>
