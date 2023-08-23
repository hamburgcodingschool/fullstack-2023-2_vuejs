<template>
  <div>
    <h1>Hello</h1>
  </div>
  <PasswordField />
  <div>password should have between 8 and 14 characters</div>
  <SubmitButton />
</template>

<script>
import PasswordField from './components/PasswordField.vue'
import SubmitButton from './components/SubmitButton.vue'

export default {
  components: {
    PasswordField,
    SubmitButton
  }
}
</script>

<style scoped></style>
