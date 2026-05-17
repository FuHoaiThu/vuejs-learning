<template>
  <button @click="onUpdateStatus">Change Status</button>
</template>
<script setup>
const emit = defineEmits(['update:status'])

const onUpdateStatus = () => {
  emit('update:status')
}
</script>
