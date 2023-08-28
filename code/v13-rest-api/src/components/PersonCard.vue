<template>
  <div class="person-card">
    <h4>{{ name }}</h4>
    <p>profession: {{ profession }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    profession: String
  }
}
</script>

<style scoped>
.person-card {
  width: 300px;
  background-color: aliceblue;
}
</style>
