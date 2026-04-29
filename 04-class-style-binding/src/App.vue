<script setup></script>

<template>
  <div>
    <button class="active">Active</button>
  </div>
</template>

<style scoped>
.active {
  border: none;
  background-color: #8b5cf6;
  color: #ede9fe;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #818cf8;
  }
}
</style>
