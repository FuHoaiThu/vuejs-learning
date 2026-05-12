<script setup>
import { ref } from 'vue'

const text1 = ref('')
const text2 = ref('')
const multiplineText = ref('')
const checkboxValue = ref(false)
const checkboxValues = ref([])
const radioValue = ref('')
const selectValue = ref('')

const handeInput1 = (event) => {
  text1.value = event.target.value
}
</script>
<template>
  <div>
    <h1>Form input binding</h1>
    <div>
      <input :value="text1" @input="handeInput1" aria-label="text1" />
      <p>Text 1: {{ text1 }}</p>
    </div>
    <div>
      <input v-model="text2" aria-label="text2" />
      <p>Text 2: {{ text2 }}</p>
    </div>
    <div>
      <textarea
        v-model="multiplineText"
        placeholder="Nhập văn bản nhiều dòng"
        aria-label="multiline-text"
      ></textarea>
      <p>Multiline Text: {{ multiplineText }}</p>
    </div>
    <div>
      <input type="checkbox" v-model="checkboxValue" aria-label="checkbox" />
      <label for="checkbox">Single checkbox: Check me {{ checkboxValue }}</label>
    </div>
    <div>
      <input type="checkbox" id="checkbox1" value="Option 1" v-model="checkboxValues" />
      <label for="checkbox1">Option 1</label>
      <input type="checkbox" id="checkbox2" value="Option 2" v-model="checkboxValues" />
      <label for="checkbox2">Option 2</label>
      <p>Selected options: {{ checkboxValues }}</p>
    </div>
    <div>
      <input type="radio" id="radio1" value="Option A" v-model="radioValue" />
      <label for="radio1">Option A</label>
      <input type="radio" id="radio2" value="Option B" v-model="radioValue" />
      <label for="radio2">Option B</label>
      <p>Selected radio: {{ radioValue }}</p>
    </div>
    <div>
      <select v-model="selectValue" aria-label="select">
        <option value="" disabled>Select an option</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected option: {{ selectValue }}</p>
    </div>
  </div>
</template>

<style scoped></style>
