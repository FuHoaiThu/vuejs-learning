<template>
  <section>
    <h1>Todo List</h1>
    <div class="todo-filter">
      <TextInput placeholder="Search note..." :model-value="keyWord" />
      <Dropdown />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Dropdown from '@/components/dropdowns/SelectDropdown.vue'

const keyWord = ref('')
</script>
<style lang="css" scoped>
section {
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 26px;
    color: #333;
    margin: 0 auto;
  }
  .todo-filter {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 16px;
    gap: 16px;
    .input {
      width: 600px;
      border-radius: 5px;
      border: 1px solid #c3c1e5;
      padding: 10px 16px;
      outline: none;
      font-size: 16px;
      color: #333;
      &::placeholder {
        color: #c3c1e5;
      }
    }
    .dropdown {
      border-radius: 5px;
      background-color: #6c63ff;
      color: white;
      padding: 8px 10px;
      font-size: 16px;
      font-weight: 700;
    }
  }
}
</style>
