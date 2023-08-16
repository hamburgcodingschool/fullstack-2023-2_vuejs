<template>
  <input type="checkbox" /> Change Counter 2

  <div>Counter 1: {{ counter }}</div>
  <div>Counter 2: {{ counter }}</div>

  <button @click="handleClickGoDown">Go DOWN!</button>
  <button @click="handleClickGotoZero">Back to ZERO!</button>
  <button @click="handleClickGoUp">Go UP!</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    handleClickGoUp() {
      this.counter += 1
    },
    handleClickGoDown() {
      this.counter -= 1
    },
    handleClickGotoZero() {
      this.counter = 0
    }
  }
}
// const box1 = document.querySelector('#box1')
// const button1 = document.querySelector('#button1')

// let counter = 0

// button1.addEventListener('click', function () {
//   counter++
//   box1.innerText = `Counter: ${counter}`
// })
</script>

<style scoped></style>
