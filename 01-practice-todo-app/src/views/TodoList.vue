<template>
  <section>
    <h1>Todo List</h1>
    <div class="todo-filter">
      <TextInput placeholder="Search note..." :model-value="keyWord" :is-show-icon="true" />
      <Dropdown />
      <ToggleMode />
    </div>
    <Empty v-if="!todos.length" />
    <ul class="todo-list" v-else>
      <li v-for="todo in todos" :key="todo.id">
        <div class="group-input">
          <input
            type="checkbox"
            v-model="todo.isChecked"
            :id="`todo-${todo.id}`"
            :value="todo.id"
          />
          <label :for="`todo-${todo.id}`"> {{ todo.value }} </label>
        </div>
        <div class="group-actions">
          <font-awesome-icon icon="fa-regular fa-pen-to-square" @click="handleEdit(todo)" />
          <font-awesome-icon icon="fa-regular fa-trash-can" />
        </div>
      </li>
    </ul>
    <footer>
      <button @click="handleOpenModal">
        <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </footer>
  </section>

  <ModalAddTodo
    :is-show-modal="isShowModal"
    :selected-todo="selectedTodo"
    @on-close="handleCloseModal"
    @on-add="handleAddTodo"
  />
</template>
<script setup>
import { ref } from 'vue'
import TextInput from '@/components/inputs/TextInput.vue'
import Dropdown from '@/components/dropdowns/SelectDropdown.vue'
import ToggleMode from '@/components/ToggleMode.vue'
import Empty from '@/components/Empty.vue'
import ModalAddTodo from '@/components/modal/ModalAddTodo.vue'
import { nanoid } from 'nanoid'

const keyWord = ref('')
const todos = ref([
  {
    id: 0,
    value: 'todo 1',
    isChecked: false,
  },
  {
    id: 1,
    value: 'todo 2',
    isChecked: true,
  },
])
const isShowModal = ref(false)
const selectedTodo = ref(null)

const handleCloseModal = () => {
  isShowModal.value = false
}
const handleOpenModal = () => {
  isShowModal.value = true
}
const handleAddTodo = (todo) => {
  todos.value = [...todos.value, { id: nanoid(), value: todo, isChecked: false }]
  handleCloseModal()
}
const handleEdit = (todo) => {
  selectedTodo.value = todo
  isShowModal.value = true
}
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
  .todo-list {
    width: 520px;
    margin-top: 30px;
    li {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .group-input {
        display: flex;
        align-items: center;
        gap: 17px;
        input {
          width: 26px;
          height: 26px;
          cursor: pointer;
        }
        label {
          font-size: 20px;
          color: #252525;
          font-weight: 500;
          cursor: pointer;
        }
      }
      .group-actions {
        display: flex;
        gap: 10px;
        align-items: center;
        svg {
          width: 18px;
          height: 18px;
          cursor: pointer;
          color: #cdcdcd;
          &:hover {
            color: #6c63ff;
          }
        }
      }
    }
  }
}
</style>
