<template>
  <div class="global-footer">
    <horizontal-divider />
    <div class="container">
      <div
        class="global-footer-links de-layout-h de-layout-v-mobile"
        style="width: 100%; display: flex;"
      >
        <div align="left" class="de-layout-1-4 de-layout-1-1-mobile">
          <img
            class="header-logo"
            src="../../assets/logo.png"
            height="28"
            style="margin-top: 15px; opacity: 0.4;"
          />
        </div>
        <div align="left" class="de-layout-1-5 de-layout-1-1-mobile">
          <h5 align="left">我们</h5>
          <defined-link goto="/leadership">
            管理层
          </defined-link><br>
          <defined-link goto="/company-culture">
            企业文化
          </defined-link><br>
          <defined-link goto="/big-events">
            大事记
          </defined-link><br>
          <defined-link goto="/contact-us">
            联系我们
          </defined-link>
        </div>
        <div align="left" class="de-layout-1-5 de-layout-1-1-mobile">
          <h5 align="left">用心</h5>
          <defined-link goto="/our-promises">
            用心承诺
          </defined-link><br>
          <defined-link goto="/our-design">
            用心设计
          </defined-link><br>
          <defined-link goto="/ticket">
            用心聆听
          </defined-link>
        </div>
        <div align="left" class="de-layout-1-5 de-layout-1-1-mobile">
          <h5 align="left">服务</h5>
          <defined-link goto="/status">
            系统状态
          </defined-link><br>
          <defined-link goto="/education">
            教育优惠
          </defined-link><br>
          <defined-link goto="/special-help">
            特别关怀
          </defined-link><br>
          <defined-link goto="/developer">
            开发者平台
          </defined-link>
        </div>
        <div align="left" class="de-layout-1-5 de-layout-1-1-mobile">
          <h5 align="left">用户</h5>
          <defined-link goto="/support">
            产品支持
          </defined-link><br>
          <defined-link goto="/privacy-policy">
            隐私策略
          </defined-link><br>
          <defined-link goto="/terms-of-service">
            使用条款
          </defined-link><br>
          <defined-link goto="/super-user-plan">
            参与内测
          </defined-link>
        </div>
      </div>
      <div style="width: 100%; padding-bottom: 10px;">
        <p align="left" style="color: #cfcfcf; font-size: 12px; font-weight: 400;">iPhone 及 Mac 商标由苹果公司持有</p>
        <p align="left" style="color: #cfcfcf; font-size: 12px; font-weight: 400;">Taci™ 及 塔词™ 商标由厦门塔词科技有限公司持有</p>
      </div>
      <horizontal-divider />
      <div class="global-footer-bottom" style="width: 100%; padding-top: 10px; padding-bottom: 15px;">
        <p class="foot-line" align="left">版权所有 © 2021 厦门塔词科技有限公司 · 保留所有权利</p>
        <p class="foot-line" align="right">备案号预留位置</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import HorizontalDivider from './divider/HorizontalDivider.vue'
</script>

<script>
export default {
  name: "Footer"
};
</script>