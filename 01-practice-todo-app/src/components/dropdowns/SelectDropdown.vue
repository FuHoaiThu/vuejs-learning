<template>
  <div class="dropdown">
    <div class="dropdown-selected">
      <span>{{ selectedOption }}</span>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const selectedOption = computed(() => {
  return 'ALL'
})
</script>
