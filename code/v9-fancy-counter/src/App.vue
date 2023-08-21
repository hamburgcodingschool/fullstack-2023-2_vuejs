<template>
  <DisplayCounter :valueToShow="counter" />
  <ButtonBox @oneOfTheButtonsWasClicked="handleIt" />
</template>

<script>
import DisplayCounter from './components/DisplayCounter.vue'
import ButtonBox from './components/ButtonBox.vue'

export default {
  components: {
    DisplayCounter,
    ButtonBox
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleIt(value) {
      console.log(value)
      this.counter += value
    }
  }
}
</script>

<style scoped></style>
