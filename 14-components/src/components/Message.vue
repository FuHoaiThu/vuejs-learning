<template>
  <div>
    <h1>{{ message }}</h1>
    <p>Count: {{ count }}</p>
    <p>Greeting: {{ greatingMessage }}</p>
    <p>Status: {{ status }}</p>
  </div>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: false,
    default: 5,
  },
  greatingMessage: {
    type: String,
    required: false,
    default: 'Hello, World!',
  },
  status: {
    type: String,
    default: '',
    validate(value) {
      return ['win', 'lose', 'draw'].includes(value)
    },
  },
})
</script>
