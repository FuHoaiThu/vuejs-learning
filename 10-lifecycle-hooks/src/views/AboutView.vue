<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
      <p>Timer: {{ time }}</p>
      <p id="count">Count: {{ count }}</p>
      <button @click="handleIncrease">Increase</button>
    </div>
  </div>
</template>
<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

const time = ref(0)
const timer = ref(null)
const count = ref(0)

onBeforeMount(() => {
  console.log('before mount about')
})
onMounted(() => {
  console.log('mounted about')
  timer.value = setInterval(() => {
    time.value++
  }, 1000)
})
onBeforeUnmount(() => {
  console.log('before unmount about')
})
onUnmounted(() => {
  console.log('unmounted about')
  clearInterval(timer)
})
onUpdated(() => {
  console.log('about updated')
  console.log(document.querySelector('#count').textContent)
})
onBeforeUpdate(() => {
  console.log('about before update')
  console.log(document.querySelector('#count').textContent)

})

const handleIncrease = () => {
  count.value++
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
