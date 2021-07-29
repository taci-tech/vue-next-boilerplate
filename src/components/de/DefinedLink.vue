<template>
  <a class="defined-link" v-if="href !== undefined" :href="href !== undefined ? href : ''">
    <slot></slot>
  </a>
  <a class="defined-link" v-else @click="startRouting()">
    <slot></slot>
  </a>
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
