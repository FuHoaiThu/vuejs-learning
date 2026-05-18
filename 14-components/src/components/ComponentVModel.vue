<template>
  <div>
    <div>
      <label for="email">Email: </label>
      <input id="email" v-model="email" type="email" />
      <p>Your email is: {{ email }}</p>
      <button @click="setEmailDefault">Set Default Email</button>
    </div>
    <div>
      <label for="username">Username: </label>
      <input id="username" v-model="userName" type="text" />
      <p>Your email is: {{ userName }}</p>
      <button @click="setUsernameDefault">Set Default Username</button>
    </div>
  </div>
</template>
<script setup>
import { defineModel } from 'vue'

const email = defineModel('email', {
  type: String,
  default: '',
})
const [userName, modifiers] = defineModel('userName', {
  get(value) {
    return value
  },
  set(value) {
    if (modifiers.upper) {
      return value.toUpperCase()
    }
    return value
  },
})
console.log(modifiers)
const setEmailDefault = () => {
  email.value = 'user@example.com'
}
const setUsernameDefault = () => {
  userName.value = 'Hoai Thu'
}
</script>
