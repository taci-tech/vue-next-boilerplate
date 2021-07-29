<template>
  <!-- the router view of the app -->
  <router-view></router-view>
</template>

<script setup>
import { h } from 'vue'
</script>

<script>
export default {
  name: 'App',
  data() {
    return {
      // a value indicating if we are at the top of the page.
      // when user scrolls down, it will turn to false.
      // then when user scrolls back to the top (very top), it will turn back to true.
      isAtTop: true
    }
  },
  methods: {
    onScroll() {
      if (window.scrollY < 12) {
        this.isAtTop = true;
      } else {
        this.isAtTop = false;
      }
    }
  },
  mounted() {
    // track the scroll event (just a boilerplate example).
    document.addEventListener('scroll', this.onScroll)
  },
  unmounted() {
    // remove the track hook of the scroll event (just a boilerplate example)
    // when this component is unmounted.
    document.removeEventListener('scroll', this.onScroll)
  }
}
</script>