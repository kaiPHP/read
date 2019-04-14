<template>
  <div class="toastMessageBox" v-show="show">{{message}}</div>
</template>

<script>
export default {
  name: 'toast',
  data () {
    return {
      message: '',
      show: false
    }
  }
}
</script>

<style lang='stylus' scoped>
.toastMessageBox
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  background-color rgba(0, 0, 0, 0.65)
  color #fff
  padding .2rem .3rem
  font-size .26rem
  border-radius 0.2rem
  text-align center
  z-index 110
</style>