<template>
  <div class="mode" @click="onToggleMode">
    <font-awesome-icon :icon="icon" />
  </div>
</template>
<script setup>
const emit = defineEmits(['onToggle'])
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
const onToggleMode = () => {
  emit('onToggle')
}
</script>
<style lang="scss" scoped>
.mode {
  width: 40px;
  height: 40px;
  background-color: #6c63ff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  :deep(svg) {
    width: 20px;
    height: 20px;
    background-color: transparent;
    path {
      fill: white !important;
    }
  }
}
</style>
