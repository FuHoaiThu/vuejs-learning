<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const question = ref('')
const isLoading = ref(false)
const answer = ref('')

watch(count, (newValue, oldValue) => {
  console.log(`Count updates from ${oldValue} to ${newValue}`)
})

watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    isLoading.value = true
    answer.value = 'Thinking...'
    try {

    } catch (err) {
      answer.value = 'Error! Cannot call api'
    } finally {
      isLoading.value = false
    }
  }
})
</script>
<template>
  <div>
    <h1>Watchers</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
    <p>Question</p>
    <input type="text" v-model="question" :disabled="isLoading" />
  </div>
</template>

<style scoped></style>
