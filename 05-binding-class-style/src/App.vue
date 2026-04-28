<script setup lang="ts">
import { computed, ref } from 'vue'
const isActive = ref(true)
const hasError = ref(false)
const objClass = computed(() => ({
  active: isActive.value && !hasError.value,
  'has-error': hasError.value,
}))
const handleToggle = () => {
  isActive.value = !isActive.value
}
const classes = ref('has-warning')
</script>

<template>
  <div>
    <h1>Binding class</h1>
    <button :class="{ active: isActive, 'has-error': hasError }" @click="handleToggle">
      Click me
    </button>
    <button :class="objClass" @click="handleToggle">Click me 2</button>
    <button :class="['active', 'has-error', classes]" @click="handleToggle">Click me 3</button>
  </div>
</template>

<style scoped>
button {
  border: none;
  outline: none;
  background-color: #ede9fe;
  color: #8b5cf6;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #c7d2fe;
  }
}
.active {
  background-color: #8b5cf6;
  color: #ede9fe;
  &:hover {
    background-color: #818cf8;
  }
}
.has-error {
  background-color: #ef4444;
  color: #fee2e2;
  &:hover {
    background-color: #f87171;
  }
}
</style>
