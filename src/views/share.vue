<template>
  <div class="page">
    <div class="container" :style="cssTest">
      <div class="onebox">
        <h2>你的好友</h2>
        <h2>{{info.nickName}}同学 邀请你加入</h2>
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
      <input type="button" @click="back" value="返回" class="back" />
      <input type="button" @click="shareFn" value="分享链接" class="btn" />
    </div>
    <div v-show="isShow">
      <div class="mask" @click="hide"></div>
      <div class="arr-box"></div>
      <div class="arr-text">点击这里可以分享</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "share",
  data(){
    return {
      info: {},
      isShow: false
    }
  },
  computed: {
    cssTest(){
      return {
        'background': `#fff url(${this.info.imageUrl}) no-repeat`,
        'background-size': '100% auto'
      }
    }
  },
  created(){
    this.$loading.show({
      el: this.$refs.loading
    })
    this.axiosPost("v/act/toShare", { // 获取分享url
      appUrl: window.location.href
    }).then((res) => {
      this.info = res.data.attachment
      this.$loading.hide()
    })
  },
  methods: {
    shareFn(){
      this.isShow = true
    },
    hide(){
      this.isShow = false
    },
    back(){
      this.$router.go(-1)
    }
  },
  components: {
  }
};
</script>

<style lang="stylus" scoped>
.page
  .mask
    width 100%
    background rgba(0,0,0,0.7)
    z-index 100
    position absolute
    top 0
    left 0
    bottom 0
    right 0
  .arr-box
    background url('/images/arr.png') no-repeat
    background-size 100% auto
    width 1.35rem
    height 1.73rem
    position absolute
    top .2rem
    right .2rem
    z-index 101
  .arr-text
    font-size .36rem
    font-weight bold
    color #fff
    position absolute
    top 2rem
    left 50%
    transform translateX(-50%)
    z-index 101
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
