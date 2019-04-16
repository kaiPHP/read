<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <h2>早晚读书推广大使计划</h2>
      <div class="desc">分享100元预购抵用券，好友下单也可享受预购优惠。 好友完成下单，你还能获得50元奖励金，奖励金可通过早晚读书公众号提现。</div>
      <div class="desc">活动结束倒计时：7天23小时</div>
      <div class="infobox">
        <div class="tel">当前帐号：{{result.mobile}}</div>
        <div class="mycard">我的会员激活码</div>
      </div>
      <input type="button" value="去分享" class="btn" />
      <ul>
        <li>
          <span class="side">我的返利金额</span>
          <span class="aside" @click="withdrawFn">去提现</span>
        </li>
        <li>
          <span>全部返利</span>
          <span>¥{{result.rebackMoney}}</span>
        </li>
        <li>
          <span>已提现</span>
          <span>¥{{result.userwithdraw}}</span>
        </li>
        <li>
          <span>可提现</span>
          <span>¥{{result.withdraw}}</span>
        </li>
      </ul>
      <div class="tab-box">
        <div class="title">我的邀请记录（{{record.length}}）</div>
        <table class="tab" v-if="record.length">
          <tr>
            <th>被邀请人</th>
            <th>返利</th>
            <th>购买时间</th>
          </tr>
          <tr v-for="(item, index) in record" :key="index">
            <td>{{item.name}}</td>
            <td>¥{{item.money}}</td>
            <td>getLocalTime(item.time)</td>
          </tr>
        </table>
      </div>
      <div class="empty">暂无记录</div>
    </div>
    <packetbox :isShow="isShow"></packetbox>
    <div class="mask" v-show="isShow"></div>
  </div>
</template>

<script>
import Packetbox from '@/components/packet-box'
export default {
  name: "tgplan",
  data(){
    return {
      isShow: false, //是否显示我的激活码
      result: {}, // 查询结果
      record: [] //邀请记录
    }
  },
  created(){
    this.$loading.show({
      el: this.$refs.loading
    })
    this.axiosPost('v/act/withdrawal',{}).then((res) => { // 提现接口查询
      this.$loading.hide()
      this.result = res.data.attachment
      this.record = res.data.attachment.lmcwInviterVo
    })
  },
  methods: {
    getLocalTime(nS) {     
      return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');     
    },
    withdrawFn(){
      this.$router.push('/withdrawaapply')
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
      margin-bottom .4rem
    .desc
      font-size .3rem
      color #888
      line-height .42rem
      text-align left
      margin-top .2rem
    .infobox
      margin .6rem 0 0rem
      width 100%
      display flex
      justify-content space-between
      align-items center
      .tel
        font-size .3rem
        color #333
        height .42rem
        line-height .42rem
      .mycard
        font-size .3rem
        color #888
        text-decoration underline
    ul
      width 100%
      border-bottom 1px solid #F0F0F0
      padding-bottom .4rem
      li
        width 100%
        display flex
        justify-content space-between
        margin .3rem auto 0
        line-height .42rem
        font-size .3rem
        align-items flex-start
        color #888
        &:first-child
          span.side
            color #333
          span.aside
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
    .tab-box
      margin-top .4rem
      .title
        font-size .3rem
        color #333
        margin-bottom .2rem
        text-align left 
      .tab
        border-collapse collapse
        border 1px solid #E1E1E1
        width 5.8rem
        margin .2rem auto 0
        td,th
          border 1px solid #E1E1E1
          text-align center
          color #333
          line-height .7rem
          font-size .24rem
        th
          background #F0F0F0
    .empty
      color #888
      font-size .3rem
      margin .5rem auto
      text-align center
    .btn
      background linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%)
      border-radius .2rem
      margin .5rem auto
      width 5.8rem
      height .98rem
      border none
      font-size .36rem
      color #fff
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
