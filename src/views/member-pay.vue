<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <h2>早晚读书会</h2>
      <ul>
        <li>
          <div class="side">年度会员（366天）</div>
          <div class="aside">¥ 365</div>
        </li>
        <li>
          <div class="side">红包</div>
          <div class="aside arr">有2个可以使用</div>
        </li>
        <li>
          <div class="side">合计</div>
          <div class="aside">¥ 265</div>
        </li>
      </ul>
      <input type="button" value="确认支付" @click="payFn" class="btn" />
      <div class="desc-box">
        <div class="desc">购买说明：</div>
        <p>1、支付成功后将获得会员激活码，激活码有效期至2020年5月，待读书会产品上线后，在此之前的任意时间都可以选择激活，从激活后的第二个自然日开始计算会员时长，为期1年（366天）。</p>
        <p>2、会员卡属于虚拟产品，暂不支持退换，请您理解。</p>
      </div>
    </div>
    <packetbox :isShow="isShow"></packetbox>
    <div class="mask" v-show="isShow"></div>
  </div>
</template>

<script>
import Packetbox from '@/components/packet-box'
export default {
  name: "memberpay",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    payFn(){
      this.$router.push('/successbuy')
    }
  },
  components: {
    Packetbox
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
      li
        height 1.27rem
        width 100%
        border-bottom 1px solid #F0F0F0
        display flex
        justify-content space-between
        line-height .42rem
        font-size .3rem
        align-items center
        .side
          color #888
        .aside
          color #333
          &.arr
            color #E71C34
            position relative
            cursor pointer
            &::after
              position absolute
              content ''
              top 50%
              transform translateY(-50%)
              background url('/images/arrow.png') center right no-repeat
              background-size 100% auto
              width .22rem
              height .22rem
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
      width 5.3rem
      color #333
      .desc
        font-size .3rem
        height .42rem
        line-height .42rem
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
.mask
  width 100%
  background rgba(0,0,0,0.5)
  z-index 100
  position absolute
  top 0
  left 0
  bottom 0
  right 0
  </style>
