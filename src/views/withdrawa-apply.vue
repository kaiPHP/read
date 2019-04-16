<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <h2>申请提现</h2>
      <div class="desc">可提现余额：¥{{ableBalance}}</div>
      <ul>
        <li 
        v-for="(item, index) in moneyArr" 
        :key="index" 
        :class="index == active ? 'on' : ''"
        @click="select(item, index)"
        >¥{{item}}</li>
      </ul>
      <div class="btnbox">
        <input type="button" value="返回" class="back" />
        <input type="button" value="申请提现" class="btn" />
      </div>
      <div class="tab-box">
        <div class="title">提现记录</div>
        <table class="tab" v-if="records.length">
          <tr>
            <th>申请时间</th>
            <th>金额</th>
            <th>处理状态</th>
          </tr>
          <tr v-for="(item, index) in records" :key="index">
            <td>getLocalTime(item.applyTime)</td>
            <td>¥{{item.money}}</td>
            <td>{{item.status === 3 ? '已完成' : '处理中'}}</td>
          </tr>
        </table>
      </div>
      <div class="empty">暂无记录</div>
      <div class="desc-box">
        <div class="desc">提现说明</div>
        <p>1、提现没有门槛，您可以放心申请提现。</p>
        <p>2、每名用户每天只能发起一次提现申请，多次提交我们会当作一次进行处理。</p>
        <p>3、提现有1-3个工作日的处理时间，请您耐心等待。</p>
        <p>4、当活动结束时，我们会统一处理，将您账户中剩余的金额一次性全部发放，由于数量较多，可能会比正常提现有延迟，请您放心。</p>
        <p>5、如果有任何问题，可随时通过公众号留言板反馈给我们。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "withdrawaapply",
  data(){
    return {
      active: 0,  //默认选中50元
      ableBalance: 0, // 可提现余额
      moneyArr: [],   //金额列表
      records: []     // 记录列表
    }
  },
  created(){
    this.$loading.show({
      el: this.$refs.loading
    })
    this.axiosPost('v/act/withdrawalView',{}).then((res) => { // 获取红包
      this.$loading.hide()
      this.moneyArr = res.data.attachment.money
      this.records = res.data.attachment.record
      this.ableBalance = res.data.attachment.withdraw
    })
  },
  methods: {
    getLocalTime(nS) {     
      return new Date(parseInt(nS)).toLocaleString().replace(/:\d{1,2}$/,' ');     
    },
    select(item, index){
      if(this.ableBalance >= item){
        this.active = index
      }else{
        this.$toast({message: '余额不足！'})
      }
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
      margin-bottom .4rem
    .desc
      font-size .3rem
      color #333
      line-height .42rem
      text-align left
      margin-top .2rem
    ul
      width 100%
      display flex
      justify-content space-between
      align-items center
      margin .2rem auto .2rem
      li
        width 100%
        display flex
        justify-content center
        margin .3rem .3rem 0 0
        padding .4rem 0
        line-height .42rem
        font-size .3rem
        align-items center
        color #888
        background #E1E1E1
        border-radius .2rem
        &.on
          background #f9c957
          color #fff
        &:last-child
          margin-right 0
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
          font-size .24rem
          color #333
          line-height .7rem
        th
          background #F0F0F0
    .empty
      text-align center
      color #888
      font-size .3rem
      margin .5rem auto
      width 2rem
    .btnbox
      width 100%
      display flex
      align-items center
      justify-content space-between
      .back
        border-radius .2rem
        border .02rem solid #E71B34
        background #fff
        height .98rem
        padding 0 .3rem
        margin-right .4rem
        cursor pointer
      .btn
        background linear-gradient(135deg,rgba(255,70,70,1) 0%,rgba(231,27,52,1) 100%)
        border-radius .2rem
        margin .5rem auto
        width 5.8rem
        height .98rem
        border none
        font-size .36rem
        color #fff
        cursor pointer
  </style>
