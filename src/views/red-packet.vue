<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <div class="title">献给热爱读书的你</div>
      <div class="money"><span class="sub">¥</span>100.00</div>
      <div class="user"><img src="/images/user2.png" alt=""></div>
      <p>小福同学 的红包</p>
      <div class="desc-box">
        <div class="desc">红包说明：</div>
        <p>1、红包已发放到您的账户中，在下单时选择代金券支付，即可立减100元。</p>
        <p>2、每笔订单只能使用一张优惠券。</p>
      </div>
    </div>
    <input type="button" value="去使用" @click="goUse" class="btn" />
    <input type="button" value="我的邀请" class="btn invite" />
    <div class="bottom-box">
      <h2>早晚读书返现50元活动说明：</h2>
      <p>1、购买成功后，还可以获得专属限时优惠券。注意，必须购买完成后分享才有效。</p>
      <p>2、分享专属优惠券给好友，好友使用时可抵用100元现金，好友支付成功你即可获得50元现金返利，可提现。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "redpacket",
  created(){
    if(localStorage.getItem('uid')){
      this.$loading.show({
        el: this.$refs.loading
      })
      this.axiosPost('v/act/applyCoupon',{ // 领取红包
        result: ''
      }).then((res) => {
        this.$loading.hide()
      })
    }
  },
  methods: {
    goUse(){
      this.$router.push('/memberpay')
    }
  },
  components: {
  }
};
</script>


<style lang="stylus" scoped>
.container
  width 100%
  background #fff url('/images/bg.png') no-repeat
  background-size 100% auto
  padding: 1.3rem 0 .5rem 0
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
    background url('/images/openpacket.png') no-repeat
    background-size 100% auto
    width 6.9rem
    height 9.14rem
    margin 0rem auto
    display flex
    justify-content flex-start
    flex-direction column
    align-items center
    .user
      margin 0 auto .15rem
      padding-top .6rem
      width 1.6rem
      height 1.6rem
      img 
        width 100%
        height 100%
    .title
      color #D3700C
      font-size .36rem
      height .5rem
      margin .8rem 0 .35rem 0
      line-height .5rem
    .money
      color #D3700C
      font-size .8rem
      height .78rem
      line-height .84rem
      font-weight bold
      .sub
        vertical-align 0
        font-size .45rem
    p
      width 4rem
      height .42rem
      margin-top .2rem
      font-size .3rem
      text-align center
      color #fff
      line-height .42rem
    .desc-box
      margin .6rem .8rem 0
      align-self flex-start
      width 5.3rem
      color #fff
      .desc
        font-size .3rem
        height .42rem
        line-height .42rem
        margin 0 0 .3rem
        text-align left 
      p
        font-size .24rem
        line-height .4rem
        margin 0
        width 100%
        text-align left 
        height auto
  .btn
    width 6.5rem
    height .98rem
    background linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%)
    border-radius .2rem
    font-size .36rem
    color #fff
    border none
    margin .3rem auto
    &.invite
      background none
      border .02rem solid
      margin-top 0
      color #E81C35
  .bottom-box
    width 6.3rem
    margin .2rem auto 0
    text-align left 
    h2
      font-size .3rem
      color #333
      margin-bottom .2rem
    p
      font-size .24rem
      color #888
      line-height .4rem
</style>
