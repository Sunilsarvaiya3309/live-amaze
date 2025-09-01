<script setup>
import { computed, defineProps } from "vue";
import { CloseIcon, MenuIcon } from "@/components/Icons/index";

const icons = { menuIcon: MenuIcon, closeIcon: CloseIcon };

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "none",
  },
  fill: {
    type: String,
  },
  stroke: {
    type: String,
    default: "black",
  },
  thin: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String, //large | medium | small
    default: "medium",
  },
});

const iconComponent = computed(() => {
  return icons[props.name];
});

</script>
<template>
  <component
    :class="[className, `text-[${stroke}]`]"
    :is="iconComponent"
    class="inline-block"
    :fill="fill || 'none'"
    :stroke="stroke"
    :thin="thin"
  />
</template>
