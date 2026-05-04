<template>
  <div class="no-data">
    <IEmpty />
    <p>Empty...</p>
  </div>
</template>
<script setup>
import IEmpty from '@/assets/icons/IEmpty.vue'
</script>
<style lang="scss" scoped>
.no-data {
  padding: 30px 0 20px;
  p {
    font-size: 20px;
    margin: 0;
    color: #252525;
    text-align: center;
  }
}
</style>
