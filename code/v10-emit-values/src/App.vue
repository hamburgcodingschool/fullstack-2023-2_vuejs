<template>
  <div>
    <h1>Hello</h1>
  </div>
  <TheCheckbox @cbChange="changeHandler" />
</template>

<script>
import TheCheckbox from './components/TheCheckbox.vue'

export default {
  components: {
    TheCheckbox
  },
  methods: {
    changeHandler(isChecked) {
      if (isChecked) {
        alert('CONGRATULATIONS ON TURNING THE CHECKBOX ON...')
      } else {
        alert('OOOOHHHHH')
      }
    }
  }
}
</script>

<style scoped></style>
