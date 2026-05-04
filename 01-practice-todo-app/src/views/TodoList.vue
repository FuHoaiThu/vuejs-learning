<template>
  <section>
    <h1>Todo List</h1>
    <div class="todo-filter">
      <TextInput placeholder="Search note..." :model-value="keyWord" :is-show-icon="true" />
      <Dropdown />
      <ToggleMode />
    </div>
    <div class="todo-list">
      <Empty v-if="!todos.length" />
    </div>
    <footer>
      <button @click="handleAddTodo">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </footer>
  </section>

  <ModalAddTodo v-model="showModal" />
</template>
<script setup>
import { ref } from 'vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Dropdown from '@/components/dropdowns/SelectDropdown.vue'
import ToggleMode from '@/components/ToggleMode.vue'
import Empty from '@/components/Empty.vue'
import ModalAddTodo from '@/components/modal/ModalAddTodo.vue'

const keyWord = ref('')
const todos = ref([])
const showModal = ref(true)
</script>
<style lang="scss" scoped>
section {
  width: 82%;
  min-height: 100dvh;
  padding: 40px 0;
  margin: 0 auto;
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
  footer {
    position: fixed;
    bottom: 30px; /* Tăng khoảng cách đáy */
    left: 50%;
    transform: translateX(-50%); /* Căn giữa chính xác */
    width: 82%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-end;
    padding: 0 8px;
    pointer-events: none;
    button {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      outline: none;
      border: none;
      background-color: #6c63ff;
      cursor: pointer;
      box-shadow: 0px 0px 4px 0px rgba(108, 99, 255, 1);
      svg {
        width: 24px;
        height: 24px;
        color: white;
      }
    }
  }
}
</style>
