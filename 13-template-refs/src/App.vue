<script setup>
import { ref, onMounted } from 'vue'
const inputRef = ref(null)
const list = ref(['Item 1', 'Item 2', 'Item 3'])
const itemRefs = ref([])

onMounted(() => {
  inputRef.value.focus()
  itemRefs.value.forEach((item) => {
    item.style.opacity = 1
    item.style.transition = 'opacity 0.5s ease-in-out'
  })
})

const initialLibraries = (el) => {
  console.log('Element:', el)
}
</script>
<template>
  <div>
    <h1>Template Refs</h1>
    <input type="text" ref="inputRef" aria-label="input" placeholder="Enter text here" />
    <ul>
      <li v-for="item in list" :key="item" ref="itemRefs" style="opacity: 0">{{ item }}</li>
    </ul>
    <input
      type="text"
      :ref="(el) => initialLibraries(el)"
      aria-label="input 1"
      placeholder="Enter text here"
    />
  </div>
</template>

<style scoped></style>
