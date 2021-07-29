<template>
  <span :align="this.align" class="defined-text">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'DefinedText',
  props: {
    align: {
      type: String,
      default: 'center'
    }
  }
}
</script>
