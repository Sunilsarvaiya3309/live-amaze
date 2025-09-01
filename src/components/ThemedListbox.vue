<script setup>
const props = defineProps({
  modelValue: String,
  options: Array,
  placeholder: String,
  id: String,
  name: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <select
    :id="id"
    :name="name"
    :value="modelValue"
    @change="emit('update:modelValue', $event.target.value)"
    class="w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-100 dark:text-gray-700"
  >
    <option disabled value="">{{ placeholder }}</option>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="typeof option === 'object' ? option.value : option"
    >
      {{ typeof option === 'object' ? option.label : option }}
    </option>
  </select>
</template>
