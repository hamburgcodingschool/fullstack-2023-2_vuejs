<template>
  <div>{{ counter }}</div>
  <MyButton buttonText="+ 10" @somebodyJustClickedTheButton="handleUpTen" />
  <MyButton buttonText="+ 1" @somebodyJustClickedTheButton="handleUp" />
  <MyButton buttonText="- 1" @somebodyJustClickedTheButton="handleDown" />
  <MyButton buttonText="- 10" @somebodyJustClickedTheButton="handleDownTen" />
</template>

<script>
import MyButton from './components/MyButton.vue'

export default {
  components: {
    MyButton
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleUp() {
      this.counter += 1
    },
    handleDown() {
      this.counter -= 1
    },
    handleUpTen() {
      this.counter += 10
    },
    handleDownTen() {
      this.counter -= 10
    }
  }
}
</script>

<style scoped></style>
