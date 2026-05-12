<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const greet = (event) => {
  alert(`Hello, ${event.target.innerText}!`)
}
const sayHi = (name) => {
  alert(`Hi, ${name}!`)
}
const sayHi2 = (name: string) => {
  alert(`Say Hi 2, ${name}!`)
}
const sayHi3 = (name: string) => {
  alert(`Say Hi 3, ${name}!`)
}
const handleSubmit = () => {
  alert('Form submitted!')
}
</script>
<template>
  <div>
    <h1>Event handling</h1>
    <button @click="count++">Add 1</button>
    <p>Count: {{ count }}</p>
    <button @click="greet">Greet</button>
    <button @click="sayHi('Thu')">Say Hi to Thu</button>
    <button @click="sayHi('Onyra')">Say Hi to Onyra</button>
    <div @click="sayHi2('Thu')">
      Say Hi 2 to Thu <button @click.stop="sayHi3('Onyra')">Say Hi 3 to Onyra</button>
    </div>
    <form @submit.prevent.stop="handleSubmit">
      <button type="submit">Submit</button>
    </form>
    <input placeholder="Nhập tên của bạn" @keyup.enter="handleSubmit" />
    <input placeholder="Nhập tên của bạn" @keyup.enter.alt="handleSubmit" />
    <button @click.shift="handleSubmit">Click to submit</button>
  </div>
</template>

<style scoped></style>
