<template>
  <div class="group-input">
    <div class="dropdown">
      <div class="dropdown-selected">
        <span>{{ selectedOption }}</span>
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const selectedOption = computed(() => {
  return 'ALL'
})
</script>
<style lang="scss" scoped>
.dropdown {
  min-width: 85px;
  cursor: pointer;
  .dropdown-selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
