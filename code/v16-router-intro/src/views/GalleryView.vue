<template>
  <div>
    <h1>THIS IS THE GALLERY!!!!</h1>
  </div>
  <div class="card-container">
    <NameCard v-for="name in names" :name="name" />
  </div>
</template>

<script>
import NameCard from '../components/NameCard.vue'

export default {
  components: {
    NameCard
  },
  data() {
    return {
      names: ['Bob', 'Steve', 'Paula']
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
