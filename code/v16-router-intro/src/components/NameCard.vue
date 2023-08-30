<template>
  <div class="name-card">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
}
</script>

<style scoped>
.name-card {
  display: flex;
  width: 200px;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  box-shadow:
    2px 2px 4px gray,
    2px -2px 4px gray,
    -2px 2px 4px gray;
}
</style>
