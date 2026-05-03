<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
})
</script>
