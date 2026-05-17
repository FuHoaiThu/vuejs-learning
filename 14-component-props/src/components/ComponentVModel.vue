<template>
  <div>
    <label for="email">Email: </label>
    <input id="email" v-model="email" type="email" />
    <p>Your email is: {{ email }}</p>
    <button @click="setEmailDefault">Set Default Email</button>
  </div>
</template>
<script setup>
import { defineModel } from 'vue'

const email = defineModel({
  type: String,
  default: '',
})

const setEmailDefault = () => {
  email.value = 'user@example.com'
}
</script>
