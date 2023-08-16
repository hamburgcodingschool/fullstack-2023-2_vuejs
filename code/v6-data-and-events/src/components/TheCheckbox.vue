<template>
  <input type="checkbox" v-model="isChecked" />
  <div>The checkbox is On: {{ isChecked }}</div>

  <button @click="isChecked = false">BACK TO FALSE</button>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  }
}
</script>

<style scoped></style>
