<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
    <button @click="count--">Decrease</button>
    <p>Object count: {{ object.count }}</p>
    <p>Object age: {{ object.user.age }}</p>
    <p>Object array: {{ object.array }}</p>
    <button @click="handleChangeObject">Increase object count</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const count = ref(0)
const object = ref({
  count: 2,
  user: {
    age: 29,
  },
  array: [1, 2, 3],
})
const handleChangeObject = () => {
  object.value.count++
  object.value.user.age++
  object.value.array.push(object.value.count)
}
</script>
