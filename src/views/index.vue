<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <div class="user"><img src="/images/user.png" alt=""></div>
      <p>小福同学</p>
      <p>给你发了一个红包</p>
      <h2>献给爱读书的你</h2>
      <input type="button" value="" @click="openFn" class="btn" />
    </div>
    <loginbox :isShow="isShow" @closeFn="closeFn"></loginbox>
    <div class="mask" v-show="isShow"></div>
  </div>
</template>

<script>
import Loginbox from '@/components/login-box'
export default {
  name: "index",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    openFn(){
      if(localStorage.getItem('uid')){
        this.$router.push('/redpacket')
      }else{
        this.isShow = true
      }
    },
    closeFn(b){
      this.isShow = b
    }
  },
  components: {
    Loginbox
  }
};
</script>


<style lang="stylus" scoped>
.container
  width 100%
  background #77D5D7 url('/images/bg.png') no-repeat
  background-size 100% auto
  padding: 4.55rem 0 .5rem 0
  position relative
  .logo
    position absolute
    left .4rem
    top .4rem
    width 2.76rem
    height .7rem
    background url('/images/logo.png') no-repeat
    background-size 100% auto
  .red-packet
    background url('/images/unopenpacket.png') no-repeat
    background-size 100% auto
    width 6.9rem
    height 8.7rem
    margin 0rem auto
    display flex
    justify-content flex-start
    flex-direction column
    align-items center
    .user
      margin 0 auto .15rem
      padding-top .7rem
      width 1.6rem
      height 1.6rem
      img 
        width 100%
        height 100%
    p
      width 4rem
      height .42rem
      font-size .3rem
      text-align center
      color #fff
      line-height .42rem
    h2
      width 4.2rem
      text-align center
      margin-top .5rem
      height .84rem
      font-size .6rem
      color #ffffff
      line-height .84rem
    .btn
      width 2.1rem
      height 2.1rem
      cursor pointer
      margin 0.4rem auto 0
      border none
      background url('/images/openbtn.png') no-repeat
      background-size 100% auto
.mask
  background rgba(0,0,0,0.5)
  z-index 100
  position fixed
  top 0
  left 0
  bottom 0
  right 0
</style>
