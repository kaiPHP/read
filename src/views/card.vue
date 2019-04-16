<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <div class="vediobox"></div>
      <div class="title t1"></div>
      <p>7天限时预售活动，你可以获得的权益：</p>
      <ul>
        <li><i></i>50节课</li>
        <li><i></i>100元读书红包</li>
        <li><i></i>专属超级VIP标识 免费参与12场大咖线上Live</li>
        <li><i></i>免费报名参与12场录制现场，与大咖面对面，观看大咖录制内容（前1000名）</li>
        <li><i></i>签名书，指定名人，指定书目，绝对的VIP享受（前200名）</li>
        <li><i></i>文化游学活动免费报名资格，跟着名师，读万卷书行万里路</li>
      </ul>
      <div class="title t2"></div>
      <div class="row">
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
      </div>
      <div class="row">
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
      </div>
      <div class="title t3"></div>
      <div class="row teacher">
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明</div>
        </div>
        <div class="side">
          <div class="user"></div>
          <div class="name">王小明王小明王小明王小明王小明王小明</div>
        </div>
      </div>
      <div class="title t4"></div>
      <div class="desc">
        <p>1. 领取100元红包，可在购买会员卡时直接抵扣；</p>
        <p>2. 购买后，还可获得多个限时优惠100元红包，可赠送给好友使用；</p>
        <p>3. 好友通过你赠送的100元优惠券购买会员卡，支付成功后，你将获得50元现金返利，可立刻提现。</p>
      </div>
      <input type="button" class="btn" value="立即购买" @click="buyFn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  methods: {
    buyFn(){
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
  background #77D5D7 url('/images/biaoti.png') no-repeat
  background-size 100% auto
  position relative
  padding 4.3rem 0 1.6rem
  box-sizing border-box
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
    border-radius .3rem
    margin 0rem auto
    display flex
    justify-content flex-start
    flex-direction column
    align-items flex-start
    .vediobox
      width 6.1rem
      height 3.43rem
      background #000
      margin .3rem auto 1rem
    .title
      width 3rem
      height .7rem
      margin .4rem auto
      &.t1
        background url('/images/tit1.png') no-repeat
        background-size 100% auto
      &.t2
        background url('/images/tit2.png') no-repeat
        background-size 100% auto
      &.t3
        background url('/images/tit3.png') no-repeat
        background-size 100% auto
      &.t4
        background url('/images/tit4.png') no-repeat
        background-size 100% auto
    p
      font-size .3rem
      color #888
      margin 0 .45rem
    .row
      margin-bottom .6rem
      display flex
      justify-content space-around
      align-items center
      width 94%
      margin 0 auto .6rem
      .side
        .user
          width .9rem
          height .9rem
          border-radius 50%
          background #D8D8D8
        .name
          margin-top .2rem
          font-size .24rem
          color #333
      &.teacher
        justify-content space-around
        .side
          .user
            width 1.35rem
            height 1.8rem
            border-radius 0
          .name
            height 0.7rem
            padding 0 0.05rem
            overflow hidden
            text-overflow ellipsis
            margin 0 auto
            width 1rem
            text-align left
            box-sizing border-box
    ul
      margin .3rem .45rem 0
      display flex
      flex-direction column
      justify-content flex-start
      align-items flex-start
      li
        font-size .3rem
        color #333
        line-height .5rem
        text-align left
        i
          background url('/images/circle.png') no-repeat
          background-size 100% auto
          width .18rem
          height .18rem
          display inline-block
          margin-right .3rem
    .desc
      width 5.8rem
      text-align left 
      margin 0rem auto .5rem
      p
        font-size .24rem
        color #333
        line-height .4rem
        margin 0
    .btn
      width 100%
      height 1.08rem
      position fixed
      bottom 0
      left 0
      border none
      font-size .36rem
      color #fff
      background:linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%);
</style>
