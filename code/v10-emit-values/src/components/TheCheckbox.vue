<template>
  <div>
    <label>
      <input type="checkbox" @change="changeHandler" v-model="isChecked" />
      Click me if you agree!
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChecked: false
    }
  },
  emits: ['cbChange'],
  methods: {
    changeHandler() {
      this.$emit('cbChange', this.isChecked)
    }
  }
}
</script>

<style scoped></style>
