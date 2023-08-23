<template>
  <button :disabled="isDisabled">Submit</button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped></style>
