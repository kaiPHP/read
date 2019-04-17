<template>
  <div class="container">
    <div class="logo"></div>
    <div class="red-packet">
      <h2>早晚读书会</h2>
      <ul>
        <li>
          <div class="side">年度会员（366天）</div>
          <div class="aside">¥ {{ticketInfo.mbrCouponsModel.presentPrice}}</div>
        </li>
        <li>
          <div class="side">红包</div>
          <div class="aside arr" @click="showPocketFn">{{status}}</div>
        </li>
        <li>
          <div class="side">合计</div>
          <div class="aside">¥ {{total}}</div>
        </li>
      </ul>
      <input type="button" value="确认支付" @click="payFn" class="btn">
      <div class="desc-box">
        <div class="desc">购买说明：</div>
        <p>1、支付成功后将获得会员激活码，激活码有效期至2020年5月，待读书会产品上线后，在此之前的任意时间都可以选择激活，从激活后的第二个自然日开始计算会员时长，为期1年（366天）。</p>
        <p>2、会员卡属于虚拟产品，暂不支持退换，请您理解。</p>
      </div>
    </div>
    <packetbox :isShow="isShow" @closeFn="closeFn">
      <ul>
        <li 
        v-for="(item, index) in ticketInfo.lvo" 
        :key="index"
        @click="selectPocket(item)"
        >
          <p class="name">{{item.shareName}}</p>
          <p class="number">
            <span>{{item.denomination}}元代金券</span>
            <span class="radio" :class="item.redId === ticketId ? 'on' : ''"></span>
          </p>
        </li>
      </ul>
    </packetbox>
    <div class="mask" @click="closeFn(false)" v-show="isShow"></div>
  </div>
</template>

<script>
import Packetbox from "@/components/packet-box";
export default {
  name: "memberpay",
  data() {
    return {
      isShow: false,
      ticketId: -1, // 选择优惠券的id
      pocketMoney: 0, // 红包价钱
      ticketInfo: {
        mbrCouponsModel: {
          originalPrice: 360,
          modelId: 1
        },
        lvo: [
          {
            redId: 12,
            denomination: 130,
            shareName: "渠道1"
          },
          {
            redId: 15,
            denomination: 100,
            shareName: "官方"
          }
        ]
      }, // 优惠券信息
      payResult: {} // 支付完成信息
    };
  },
  computed: {
    total: function(){
      return this.ticketInfo.mbrCouponsModel.presentPrice - this.pocketMoney
    },
    status: function(){
      return this.ticketId >=0 ? `${this.item.shareName} -¥ ${this.item.denomination}` : `有${this.ticketInfo.lvo.length}个可以使用`
    }
  },
  created() {
    this.$loading.show({
      el: this.$refs.loading
    });
    this.axiosPost("v/mbrCoupons/buyMbrCouponsPage", {}) // 支付卡卷模板
      .then(res => {
        this.ticketInfo = res.data.attachment;
        this.$loading.hide();
      });
  },
  methods: {
    payFn() {
      this.$loading.show({
        el: this.$refs.loading
      });
      this.axiosPost("v/mbrCoupons/buyMbrCoupons", {
        // 支付
        modelId: this.ticketInfo.mbrCouponsModel.modelId,
        payType: "wechatH5pay",
        payMoney: 0,
        cardId: this.ticketId,
        actId: 1,
        result: ""
      }).then(res => {
        this.info = res.data.attachment;
        this.$loading.hide();
      });
      this.$router.push("/successbuy");
    },
    showPocketFn() {
      //弹出红包列表
      this.isShow = true
    },
    selectPocket(item){ // 选择优惠券
      this.ticketId = item.redId
      this.pocketMoney = item.denomination
      this.item = item
      this.isShow = false
    },
    closeFn(b){
      this.isShow = b
    }
  },
  components: {
    Packetbox
  }
};
</script>


<style lang="stylus" scoped>
.container {
  width: 100%;
  background: #77D5D7 url('/images/bg.png') no-repeat;
  background-size: 100% auto;
  padding: 1.3rem 0 0.5rem 0;
  position: relative;

  .logo {
    position: absolute;
    left: 0.4rem;
    top: 0.4rem;
    width: 2.76rem;
    height: 0.7rem;
    background: url('/images/logo.png') no-repeat;
    background-size: 100% auto;
  }

  .red-packet {
    background: #fff;
    width: 6.7rem;
    margin: 0rem auto;
    padding: 0.5rem 0.45rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: 0.42rem;
      color: #333;
      height: 0.59rem;
      line-height: 0.59rem;
    }

    ul {
      width: 100%;

      li {
        height: 1.27rem;
        width: 100%;
        border-bottom: 1px solid #F0F0F0;
        display: flex;
        justify-content: space-between;
        line-height: 0.42rem;
        font-size: 0.3rem;
        align-items: center;

        .side {
          color: #888;
        }

        .aside {
          color: #333;

          &.arr {
            color: #E71C34;
            position: relative;
            cursor: pointer;

            &::after {
              position: absolute;
              content: '';
              top: 50%;
              transform: translateY(-50%);
              background: url('/images/arrow.png') center right no-repeat;
              background-size: 100% auto;
              width: 0.22rem;
              height: 0.22rem;
            }
          }
        }

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .btn {
      background: linear-gradient(135deg, rgba(255, 70, 70, 1) 0%, rgba(231, 27, 52, 1) 100%);
      border-radius: 0.2rem;
      margin: 0.5rem auto;
      width: 5.8rem;
      height: 0.98rem;
      border: none;
      font-size: 0.36rem;
      color: #fff;
    }

    .desc-box {
      margin: 0.2rem auto 0;
      align-self: flex-start;
      width: 5.3rem;
      color: #333;

      .desc {
        font-size: 0.3rem;
        height: 0.42rem;
        line-height: 0.42rem;
        margin: 0 0 0.3rem;
        text-align: left;
      }

      p {
        font-size: 0.24rem;
        line-height: 0.4rem;
        color: #888;
        margin: 0;
        width: 100%;
        text-align: left;
        height: auto;
      }
    }
  }
}

.mask {
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
