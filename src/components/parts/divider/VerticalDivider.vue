<template>
  <div :class="{ 'v-divider': !bold, 'v-divider-bold': bold }"/>
</template>

<script>
export default {
  name: "VerticalDivider",
  props: {
    bold: Boolean
  }
};
</script>

<style scoped>
.v-divider {
  width: 1px;
  height: 100%;
  background-color: #00000009;
}
.v-divider-bold {
  width: 2px;
  height: 100%;
  border-radius: 1px;
  background-color: #00000009;
}
</style>