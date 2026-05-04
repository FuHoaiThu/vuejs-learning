<template>
  <div class="mode">
    <font-awesome-icon icon="fa-regular fa-moon" />
  </div>
</template>
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
