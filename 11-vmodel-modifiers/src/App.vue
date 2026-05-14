<script setup>
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'

const fullname = ref('')
const age = ref(0)
const capitalizeName = ref('')
</script>
<template>
  <div>
    <h1>Form input binding - v-model modifiers</h1>
    <div>
      <label>Lazy - Fullname: {{ fullname }}</label>
      <input type="text" v-model.lazy="fullname" />
    </div>
    <div>
      <label>Number - Age: {{ age }}. Typeof: {{ typeof age }}</label>
      <input type="text" v-model.number="age" />
    </div>
    <div>
      <label>Trim - Fullname: {{ fullname }}</label>
      <input type="text" v-model.trim="fullname" />
    </div>
    <div>
      <label>Custom - Fullname upper: {{ capitalizeName }}</label>
      <CustomInput type="text" v-model.upper="capitalizeName" />
    </div>
  </div>
</template>

<style scoped></style>
