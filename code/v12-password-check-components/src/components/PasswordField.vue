<template>
  <div>
    <input type="password" @input="inputChanged" v-model="passwordValue" />
  </div>
  <div v-if="!isValid">password should have between 8 and 14 characters</div>
</template>

<script>
export default {
  emits: ['inputChange'],
  data() {
    return {
      isValid: false,
      passwordValue: ''
    }
  },
  methods: {
    inputChanged() {
      if (this.passwordValue.length >= 8 && this.passwordValue.length <= 14) {
        this.isValid = true
      } else {
        this.isValid = false
      }
      this.$emit('inputChange', this.isValid)
    }
  }
}
</script>

<style scoped></style>
