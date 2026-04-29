<script setup lang="ts">
import { computed, ref } from 'vue'
const isLogin = ref(true)
const userStatus = ref('online')
const isVisible = ref(false)

const toggleLogin = () => {
  isLogin.value = !isLogin.value
}
const handleChangeStatus = () => {
  userStatus.value =
    userStatus.value === 'online' ? 'away' : userStatus.value === 'away' ? 'busy' : 'online'
}
const handleVisible = () => {
  isVisible.value = !isVisible.value
}
</script>

<template>
  <div>
    <!-- v-if / v-else / v-else-if -->
    <div>
      <p v-if="isLogin">Chào mừng người dùng đã đăng nhập</p>
      <p v-else>Chào mừng khách</p>
      <button @click="toggleLogin">
        {{ isLogin ? 'Logout' : 'Login' }}
      </button>
      <br />
      <p v-if="userStatus === 'online'">Người dùng đang online</p>
      <p v-else-if="userStatus === 'away'">Người dùng đang vắng mặt</p>
      <p v-else-if="userStatus === 'busy'">Người dùng đang bận</p>
      <button @click="handleChangeStatus">
        {{
          userStatus === 'online' ? 'Set Away' : userStatus === 'away' ? 'Set Busy' : 'Set Online'
        }}
      </button>
      <br />
      <br />

      <h1 v-show="isVisible">Nội dung này ẩn hoặc hiển thị</h1>
      <button @click="handleVisible">{{ isVisible ? 'Hiển thị' : 'Ẩn' }}</button>
    </div>
  </div>
</template>

<style scoped></style>
