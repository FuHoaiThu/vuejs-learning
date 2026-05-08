<script setup lang="ts">
import TodoList from './views/TodoList.vue'
import { useTheme } from '@/composables/useTheme'

const { toggleTheme } = useTheme()
</script>

<template>
  <main>
    <TodoList @on-toggle="toggleTheme" />
  </main>
</template>

<style scoped>
main {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
</style>
