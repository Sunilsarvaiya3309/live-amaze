<!-- /components/Icons/CloseIcon.vue -->
<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  stroke: { type: String, default: "black" },
  thin: { type: Boolean, default: false },
  size: { type: [String, Number], default: 24 },
});

const strokeWidth = computed(() => (props.thin ? "1" : "1.5"));
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :stroke="stroke"
    :stroke-width="strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 18L18 6M6 6l12 12" />
  </svg>
</template>
