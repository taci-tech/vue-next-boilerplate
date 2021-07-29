<template>
  <button class="defined-link" @click="startRouting()">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  goto: {
    type: String,
    required: false
  },
  href: {
    type: String,
    required: false
  },
})

const router = useRouter()

const startRouting = () => {
  if (props.goto !== undefined) {
    router.push(props.goto)
  } else if (props.href !== undefined) {
    window.location.href = props.href
  }
}
</script>

<script>
export default {
  name: 'DefinedLink'
}
</script>
