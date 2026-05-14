<template>
  <input v-model="processedValue" placeholder="Enter..." />
</template>
<script setup>
import { computed, defineModel } from 'vue'

const [modelValue, modifiers] = defineModel({
  type: String,
  default: '',
})

const processedValue = computed({
  get() {
    return modelValue.value
  },
  set(newValue) {
    console.log('vao dayy', modifiers)
    let valueStr = newValue ?? ''
    if (modifiers.trim) valueStr = valueStr.trim()
    if (modifiers.upper) valueStr = valueStr.toUpperCase()
    if (modifiers.lower) valueStr = valueStr.toLowerCase()
    modelValue.value = valueStr
    console.log(modelValue.value)
  },
})
</script>
