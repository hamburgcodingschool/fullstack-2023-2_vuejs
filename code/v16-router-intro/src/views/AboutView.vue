<template>
  <div>
    <h1>THIS IS THE ABOUT PAGE</h1>
    <NameCard name="Bane" />
    <NameCard name="The Joker" />
    <NameCard name="Scarecrow" />
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'

export default {
  components: {
    NameCard
  }
}
</script>

<style scoped></style>
