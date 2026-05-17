<script setup lang="ts">
import { ref } from 'vue'
import { P } from 'vue-router/dist/index-BzEKChPW.js'
const shoppingItems = ref([
  { name: 'apple', price: 7 },
  {
    name: 'orange',
    price: 12,
  },
  {
    name: 'banana',
    price: 10,
  },
])
const user = ref({
  firstName: 'Thu',
  lastName: 'Bui',
  age: 29,
})
const users = ref([
  {
    age: 29,
    name: 'Bui Thu',
    isActive: true,
  },
  {
    age: 29,
    name: 'Ngo Hung',
    isActive: false,
  },
  {
    age: 30,
    name: 'Ha Vy',
    isActive: true,
  },
])
</script>

<template>
  <div>
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <span v-for="n in 10" :key="n">{{ n }}</span>
    <br />
    <ul>
      <li v-for="(value, key, index) in user" :key="index">{{ key }}: {{ value }}({{ index }})</li>
    </ul>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}: {{ user.age }} - {{ user.isActive ? 'Active' : 'Deactive' }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
