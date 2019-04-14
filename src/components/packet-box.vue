<template>
  <div class="packet-box" v-show="isShow" ref="loading">
    <p>我的红包</p>
    <ul>
      <li>
        <p class="name">李国庆早晚读书会公众号赠送</p>
        <p class="number">
          <span>100元代金券</span>
          <span class="radio"></span>
        </p>
      </li>
      <li>
        <p class="name">MT（微信昵称）赠送</p>
        <p class="number">
          <span>100元代金券</span>
          <span class="radio on"></span>
        </p>
      </li>
    </ul>
    <!-- <ul class="dhm">
      <li>
        <span>ADSJLD1NH3KH8KF9</span>
        <input type="button" value="复制" class="btn" />
      </li>
      <li>
        <span>ADSJLD1NH3KH8KF9</span>
        <input type="button" value="复制" class="btn" />
      </li>
    </ul> -->
    <!-- <div class="empty">关注微信公众号“早晚读书” 可限时领取100元优惠券</div> -->
    <div class="close"></div>
  </div>
</template>

<script>
export default {
  name: 'packetbox',
  props: [
    'isShow'
  ],
  created(){
    this.$loading.show({
      el: this.$refs.loading
    })
    this.axiosPost('v/act/myCouponView',{}).then((res) => { // 获取红包
      this.$loading.hide()
    })
  }
}
</script>

<style lang="stylus" scoped>
  .packet-box
    width 5.8rem
    background #fff
    border-radius .3rem
    padding .4rem .25rem
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
        height 1.8rem
        width 5.3rem
        background url('/images/coupon.png') no-repeat
        background-size 100% auto
        margin .2rem auto 0
        display flex
        flex-direction column
        justify-content space-between
        align-items flex-start
        padding .2rem .35rem
        box-sizing border-box
        .name
          font-size .24rem
          height .33rem
          line-height .33rem
          color #fff
        .number
          width 100%
          font-size .36rem
          color #fff
          margin-bottom .1rem
          display flex
          justify-content space-between
      &.dhm
        li
          line-height .42rem
          margin: .5rem auto 0
          height .42rem
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          background none
          span
            font-size .3rem
            color #888
          .btn
            border 1px solid #E71C34
            height .4rem
            line-height .4rem
            color #E71C34
            font-size .24rem
            border-radius .1rem
            background #fff
    .empty
      font-size .3rem
      line-height .42rem
      width 3.9rem
      margin .5rem auto 0
</style>
