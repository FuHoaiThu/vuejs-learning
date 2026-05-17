<script setup>
import { ref, watch } from 'vue'
import Message from './components/Message.vue'
import Status from './components/Status.vue'
import ComponentVModel from './components/ComponentVModel.vue'
const count = ref(0)
const status = ref('win')
const emailModel = ref('')

const handleUpdateStatus = () => {
  status.value = status.value === 'win' ? 'must win' : 'win'
}

watch(emailModel, (newEmail) => {
  console.log('Email updated:', newEmail)
})

const handleChangeEmailFromParent = () => {
  emailModel.value = 'parent@example.com'
}
</script>
<template>
  <div>
    <global-component />
    <button @click="count++">Increase count</button>
    <Message message="Manifest T1 win!" :count="count" greating-message="Hi, 1-1 go go" />
    <Message message="Manifest T1 win 2-1!" :greatingMessage="'1-1 go go go'" status="peyz" />
    <hr />
    <p>Status: {{ status }}</p>
    <Status @update:status="handleUpdateStatus" />
    <div>
      <h2>Component V-Model</h2>
      <ComponentVModel v-model="emailModel" />
      <button @click="handleChangeEmailFromParent">Change email from parent</button>
    </div>
  </div>
</template>

<style scoped></style>
