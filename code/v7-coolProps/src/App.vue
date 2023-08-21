<template>
  <div>
    <input type="text" @input="inputHandler" />
    <DisplayBox :displayText="inputValue" />
  </div>
</template>

<script>
import DisplayBox from './components/DisplayBox.vue'

export default {
  components: {
    DisplayBox
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    inputHandler(event) {
      this.inputValue = event.target.value
    }
  }
}
</script>

<style scoped></style>
