<template>
  <section>
    <h1>Todo List</h1>
    <div class="todo-filter">
      <TextInput placeholder="Search note..." :model-value="keyWord" :is-show-icon="true" />
      <Dropdown />
      <ToggleMode />
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Dropdown from '@/components/dropdowns/SelectDropdown.vue'
import ToggleMode from '@/components/ToggleMode.vue'

const keyWord = ref('')
</script>
<style lang="scss" scoped>
section {
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 26px;
    color: #252525;
    margin: 0 auto;
  }
  .todo-filter {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 18px;
    gap: 16px;
    :deep(.group-input) {
      .input {
        width: 600px;
        border-radius: 5px;
        border: 1px solid #c3c1e5;
        padding: 10px 40px 10px 16px;
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
}
</style>
