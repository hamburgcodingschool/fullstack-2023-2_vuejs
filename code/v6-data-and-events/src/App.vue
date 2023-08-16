<template>
  <div>
    <TheCounter />
    <br /><br /><br />
    <TheCheckbox />
  </div>
</template>

<script>
import TheCheckbox from './components/TheCheckbox.vue'
import TheCounter from './components/TheCounter.vue'

export default {
  components: {
    TheCounter,
    TheCheckbox
  }
}
</script>

<style scoped></style>
