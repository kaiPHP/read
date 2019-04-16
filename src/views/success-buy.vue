<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <h2>感谢您的支持！</h2>
      <ul>
        <li>
          <p>您的会员兑换码</p>
          <div class="codebox">
            <div class="code">ADSHNJKHDKLHLJ</div>
            <div class="copy">复制</div>
          </div>
        </li>
        <li>
          <p>兑换码已通过短信发送到您的手机号</p>
        </li>
      </ul>
      <div class="desc-box">
        <div class="desc">邀请您参加推广大使计划</div>
        <p>早晚读书推广大使计划是在产品预售阶段的一个新的尝试，早晚读书处于起步阶段，需要热爱读书的广大书友帮助，早晚读书尝试在保有运营成本的基础上，最大力度让利给初期支持我们的用户。</p>
        <p>古人云书中自有黄金屋，希望我们初期的书友可以跟我们一起成长一起收获。</p>
      </div>
      <input type="button" value="查看推广大使计划" class="btn" @click="tgFn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "successbug",
  methods: {
    tgFn(){
      this.$router.push('/tgplan')
    }
  },
  components: {
  }
};
</script>


<style lang="stylus" scoped>
.container
  width 100%
  background #77D5D7 url('/images/bg.png') no-repeat
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
    background #fff
    width 6.7rem
    margin 0rem auto
    padding .5rem .45rem
    border-radius .3rem
    box-sizing border-box
    display flex
    justify-content flex-start
    flex-direction column
    align-items flex-start
    h2
      font-size .42rem
      color #333
      height .59rem
      line-height .59rem
    ul
      width 100%
      margin-top .3rem
      li
        height 1.27rem
        width 100%
        border-bottom 1px solid #F0F0F0
        display flex
        flex-direction column
        justify-content space-around
        line-height .42rem
        font-size .3rem
        align-items flex-start
        p
          font-size .3rem
          color #333
        .codebox
          display flex
          justify-content space-between
          width 100%
          .code
            font-size .3rem
            color #888
          .copy
            height .36rem
            border-radius .1rem
            border 2px solid rgba(231,28,52,1)
            font-size .24rem
            color #E71C34
            cursor pointer
            padding 0.02rem .15rem
        &:last-child
          border-bottom none
    .btn
      background linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%)
      border-radius .2rem
      margin .5rem auto
      width 5.8rem
      height .98rem
      border none
      font-size .36rem
      color #fff
    .desc-box
      margin .2rem auto 0
      align-self flex-start
      width 5.8rem
      color #333
      .desc
        font-size .42rem
        height .59rem
        line-height .59rem
        margin 0 0 .3rem
        text-align left 
      p
        font-size .24rem
        line-height .4rem
        color #888
        margin 0
        width 100%
        text-align left 
        height auto
  </style>
