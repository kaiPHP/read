<template>
  <div class="page">
    <div class="container">
      <div class="onebox">
        <h2>你的好友</h2>
        <h2>小夫同学 邀请你加入</h2>
        <h3>李国庆早晚读书会</h3>
      </div>
      <ul>
        <li>· 几十位行业大咖倾情推荐</li>
        <li>· 每年52本深度书籍</li>
        <li>· 快来跟我一起加入吧！</li>
      </ul>
      <div class="bottom">
        识别二维码可获得我送给你的 专属100元红包
      </div>
      <div class="ewm"></div>
    </div>
    <div class="desc">长按图片可保存至本地</div>
    <div class="btnbox">
      <input type="button" value="返回" class="back" />
      <input type="button" value="分享链接" class="btn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
  }
};
</script>

<style lang="stylus" scoped>
.page
  .container
    width 6.7rem
    height 9rem
    background #fff url('/images/share.png') no-repeat
    background-size 100% auto
    position relative
    margin .4rem auto
    display flex
    flex-direction column
    align-items center
    .onebox
      width 5.76rem
      height 2.12rem
      display flex
      flex-direction column
      justify-content center
      align-items flex-end
      margin 1.1rem auto .5rem
      color #fff
      h2
        font-size .4rem
        line-height .7rem
      h3
        font-size .72rem
        line-height .8rem
    ul
      width 100%
      display flex
      flex-direction column
      align-items flex-start
      justify-content center
      li
        padding-left .47rem
        font-size .3rem
        color #fff
        line-height .5rem
    .bottom
      width 3.9rem
      height .62rem
      position absolute
      left 50%
      bottom .4rem
      transform translateX(-70%)
      display flex
      justify-content center
      align-items center
      font-size .3rem
      color #ffffff
      line-height .42rem
    .ewm
      position absolute
      width 1.4rem
      height 1.4rem
      bottom .4rem
      right .2rem
      background #fff
  .desc
    margin .3rem auto 
    font-size .3rem
    color #888
  .btnbox
    width 6.7rem
    margin 0 auto
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
