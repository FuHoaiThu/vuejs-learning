<script setup>
import { reactive, ref, watch, watchEffect } from 'vue'
const count = ref(0)
const question = ref('')
const isLoading = ref(false)
const answer = ref('')
const x = ref(0)
const y = ref(0)
const user = reactive({
  age: 18,
  class: {
    student: 0,
    name: 'Hoai Thu',
  },
})

const handleIncreaseAge = () => {
  user.age++
}
watch(count, (newValue, oldValue) => {
  console.log(`Count updates from ${oldValue} to ${newValue}`)
})

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    isLoading.value = true
    answer.value = 'Thinking...'
    try {
      const response = await fetch('https://yesno.wtf/api')
      answer.value = (await response.json()).answer
    } catch (err) {
      answer.value = 'Error! Cannot call api'
    } finally {
      isLoading.value = false
    }
  }
})

watch(
  () => x.value + y.value,
  async (sum) => {
    console.log(`Sum of x + y: ${sum}`)
  },
)
watch([x, () => y.value + 1], async ([x, y]) => {
  console.log(`Update of x + (y + 1): [${x},${y}]`)
})
watch(
  user,
  () => {
    console.log('Update user:', user)
  },
  {
    immediate: true,
    deep: true,
  },
)
watchEffect(() => {
  console.log(`Valuable of [x,y]: [${x.value},${y.value}]`)

})
</script>
<template>
  <div>
    <h1>Watchers</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
    <p>Question</p>
    <input type="text" v-model="question" :disabled="isLoading" />
    <p>{{ answer }}</p>
    <div>
      <div>
        <label>X: </label>
        <input type="number" v-model="x" />
      </div>
      <div>
        <label>Y: </label>
        <input type="number" v-model="y" />
      </div>
    </div>
    <button @click="handleIncreaseAge">Increase user age</button>
  </div>
</template>

<style scoped></style>
