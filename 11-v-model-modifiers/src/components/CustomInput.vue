<template>
  <input v-model="processedValue" placeholder="Enter..." />
</template>
<script>
import { defineModel } from 'vue';

const [modelValue, modifiers] = defineModel({
  type: String,
  default: '',
})

</script>
