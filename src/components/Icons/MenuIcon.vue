<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  stroke: { type: String, default: 'black' },
  thin: { type: Boolean, default: false },
  fill: { type: String, default: 'none' },
  size: { type: [String, Number], default: 20 },
})

const strokeWidth = computed(() => (props.thin ? '1' : '1.5'))
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    :fill="fill"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</template>
