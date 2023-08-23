<template>
  <div>
    <h1>Hello</h1>
  </div>
  <PasswordField @inputChange="passwordChanged" />
  <SubmitButton :isDisabled="isDisabled" />
</template>

<script>
import PasswordField from './components/PasswordField.vue'
import SubmitButton from './components/SubmitButton.vue'

export default {
  components: {
    PasswordField,
    SubmitButton
  },
  data() {
    return {
      isDisabled: true,
      passwordValue: ''
    }
  },
  methods: {
    passwordChanged(isValid) {
      this.isDisabled = !isValid
    }
  }
}
</script>

<style scoped></style>
