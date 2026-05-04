<template>
  <Teleport to="body">
    <section class="modal">
      <div class="modal-wrapper">
        <div>
          <h2 class="modal-header">New Note</h2>
          <TextInput placeholder="Input your note..." :model-value="todo" :is-show-icon="false" />
        </div>
        <footer>
          <button class="button--cancel">Cancel</button>
          <button>Apply</button>
        </footer>
      </div>
    </section>
  </Teleport>
</template>
<script setup>
import { ref } from 'vue'
import TextInput from '../inputs/TextInput.vue'

const todo = ref('')
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
      .button--cancel {
        border-radius: 5px;
        min-width: 110px;
        border: 1px solid #6c63ff;
        font-size: 18px;
        color: #6c63ff;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        height: 40px;
      }
    }
  }
}
</style>
