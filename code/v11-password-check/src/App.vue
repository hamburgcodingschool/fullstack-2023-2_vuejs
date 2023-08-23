<template>
  <input type="text" @input="inputValueChanged" v-model="passwordValue" />
  <div v-if="isDisabled == true">password should have between 8 and 14 characters</div>
  <button :disabled="isDisabled">Submit</button>
  <button @click="resetClicked">Reset</button>
  <div>
    {{ passwordValue }}
  </div>

  <div v-if="isHappy">Hello guys! How are you? Welcome to my website!</div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      isHappy: false,
      isDisabled: true,
      passwordValue: ''
    }
  },
  methods: {
    inputValueChanged() {
      if (this.passwordValue.length >= 8 && this.passwordValue.length <= 14) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    resetClicked() {
      this.passwordValue = ''
      this.counter += 1
      if (this.counter == 5) {
        this.isHappy = true
      }
    }
  }
}
</script>

<style scoped>
button {
  background-color: green;
  box-shadow: 10px 10px 10px gray;
  color: yellow;
  padding: 5px;
  border: solid 2px pink;
  border-radius: 10px;
}

button:disabled {
  background-color: red;
  box-shadow: none;
  color: darkred;
}
</style>
