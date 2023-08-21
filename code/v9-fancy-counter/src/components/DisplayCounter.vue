<template>
  <div>{{ valueToShow }}</div>
</template>

<script>
export default {
  props: {
    valueToShow: { type: Number, require: true }
  }
}
</script>

<style scoped></style>
