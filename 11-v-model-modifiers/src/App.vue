<script setup>
import { computed, ref } from 'vue'

const fullname = ref('')
const age = ref(0)

const [modelValue, modifiers] = defineModel({
  type: String,
  default: '',
})

const capitalizeName = computed({
  get() {
    return modelValue.value
  },
  set(newValue) {
    let value = newValue ?? ''
    if (modifiers.upper) {
      console.log('thuthtu', newValue)
    }
  },
})
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
      <label>Custom - Fullname capitalize: {{ capitalizeName }}</label>
      <input type="text" v-model.upper="capitalizeName" />
    </div>
  </div>
</template>

<style scoped></style>
