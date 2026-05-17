<script setup>
import { onMounted, onUnmounted } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
onMounted(() => {
  console.log('mounted home')
})
onUnmounted(() => {
  console.log('unmounted home')
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
