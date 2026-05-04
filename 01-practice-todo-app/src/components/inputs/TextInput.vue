<template>
  <div class="group-input">
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
  </div>
</template>
<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
    default: '',
  },
  isShowIcon: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
.group-input {
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    right: 16px;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
    color: #6c63ff;
  }
}
</style>
