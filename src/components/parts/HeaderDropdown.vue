<template>
  <div class="global-header-dropdown mobile-only">
    <div class="container" style="padding: 22px 18px;">
      <div align="left" style="font-size: 30px;" @click="$emit('onStatusChanged', false)">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="36" height="36" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <line x1="5" y1="12" x2="9" y2="16"></line>
          <line x1="5" y1="12" x2="9" y2="8"></line>
        </svg>
      </div>
      <div style="padding: 4px 12px;">
        <ul id="nav-menu-mobile" class="mobile-only">
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
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import HorizontalDivider from './divider/HorizontalDivider.vue'
import VerticalDivider from './divider/VerticalDivider.vue'

// context
defineProps({
  'sat_ref': {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['onStatusChanged'])

// routing
const router = useRouter()
const startRouting = (url) => {
  // 先关闭菜单
  emit('onStatusChanged', false)

  // 然后再跳转
  router.push(url)
}
</script>