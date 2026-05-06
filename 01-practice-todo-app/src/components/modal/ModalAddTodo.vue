<template>
  <Teleport to="body">
    <section class="modal" v-show="isShowModal">
      <div class="modal-wrapper">
        <div>
          <h2 class="modal-header">New Note</h2>
          <TextInput placeholder="Input your note..." v-model="todo" :is-show-icon="false" />
        </div>
        <footer>
          <button class="button--cancel" @click="onClose">Cancel</button>
          <button class="button--apply" :class="{ 'button--disable': isDisabled }" @click="onAdd">
            Apply
          </button>
        </footer>
      </div>
    </section>
  </Teleport>
</template>
<script setup>
import { computed, ref, watch } from 'vue'
import TextInput from '../inputs/TextInput.vue'

const emit = defineEmits(['onClosed', 'onAdd'])

const props = defineProps({
  isShowModal: {
    type: Boolean,
    default: false,
  },
  selectedTodo: {
    type: Object,
    default: null,
  },
})

const todo = ref('')

const isDisabled = computed(() => {
  return todo.value.trim().length === 0
})

const onClose = () => {
  emit('onClose')
}
const onAdd = () => {
  emit('onAdd', todo.value)
}
watch(
  props.selectedTodo,
  () => {
    console.log('thuthtu')
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
  .modal-wrapper {
    border-radius: 16px;
    background-color: rgba(247, 247, 247, 1);
    padding: 18px 30px;
    width: 440px;
    min-height: 289px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .modal-header {
      font-size: 24px;
      color: #252525;
      margin: 0;
      text-align: center;
      padding-bottom: 25px;
    }
    :deep(.group-input) {
      width: 100%;
      .input {
        width: 100%;
        box-sizing: border-box;
      }
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      button {
        cursor: pointer;
        outline: none;
        border-radius: 5px;
        font-size: 18px;
        height: 40px;
        font-weight: 500;
      }
      .button--cancel {
        min-width: 110px;
        border: 1px solid #6c63ff;
        color: #6c63ff;
      }
      .button--apply {
        border: none;
        background-color: #6c63ff;
        min-width: 97px;
        color: white;
      }
      .button--disable {
        background-color: #bfbfbf;
        cursor: default;
        pointer-events: none;
      }
    }
  }
}
</style>
