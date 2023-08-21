<template>
  <div class="display-box">
    <div v-if="displayText">{{ displayText }}</div>
    <div v-else>Please write something</div>
  </div>
</template>

<script>
export default {
  props: {
    displayText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.display-box {
  background-color: var(--light-background-color);
  padding: var(--size-1);
  width: 300px;
  min-height: 300px;
  box-shadow: var(--shadow);
}
</style>
