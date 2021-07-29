<template>
  <div class="global-header" :class="{ 'scroll-at-top': sat_ref }">
    <div class="container">
      <div class="header-leading" style="padding-left: 18px;">
        <div class="mobile-only" style="display: flex; color: #292929;" @mousedown="updateMenuStatus(true)">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </div>
        <vertical-divider bold class="mobile-only" style="height: 15px; margin-left: 15px; margin-right: 13px;"/>
        <img class="header-logo" src="../../assets/logo.png" height="36" style="margin-left: 2px; margin-right: 20px;"/>
        <vertical-divider bold class="desktop-only" style="height: 15px; margin-left: 17px; margin-right: 7px;"/>
        <ul id="nav-menu" class="desktop-only">
          <li
            :class="{ 'nav-item-act': router.currentRoute.value.path === '/' }"
            @click="startRouting('/')"
            style="cursor: pointer"
          >
            首页
          </li>
          <li
            :class="{ 'nav-item-act': router.currentRoute.value.path === '/products' }"
            @click="startRouting('/products')"
            style="cursor: pointer"
          >
            我们的产品
          </li>
          <li
            :class="{ 'nav-item-act': router.currentRoute.value.path === '/about' }"
            @click="startRouting('/about')"
            style="cursor: pointer"
          >
            了解我们
          </li>
        </ul>
      </div>
      <div class="header-trailing desktop-only" style="margin-right: 20px">
        <defined-button @click="startRouting('/account')">用户面板</defined-button>
      </div>
    </div>
    <horizontal-divider />
  </div>

  <!-- Responsive Menu for Mobile -->
  <header-dropdown :class="{ 'opened': menuStatus }" :sat_ref="sat_ref" @onStatusChanged="updateMenuStatus"/>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import HorizontalDivider from './divider/HorizontalDivider.vue'
import VerticalDivider from './divider/VerticalDivider.vue'

import HeaderDropdown from './HeaderDropdown.vue'

const menuStatus = ref(false)
const updateMenuStatus = (status) => {
  menuStatus.value = status
}

const router = useRouter()

const startRouting = (url) => {
  router.push(url)
}
</script>

<script>
export default {
  name: 'Header',
  props: {
    'sat_ref': {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    console.log(this.sat_ref)
  }
}
</script>