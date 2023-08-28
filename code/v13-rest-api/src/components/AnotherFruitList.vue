<template>
  <h2>Another Fruit List</h2>
  <div v-for="fruitItem in fruit" :key="fruitItem">
    <FruitCard :fruitItem="fruitItem" />
  </div>
</template>

<script>
import fruitList from '../assets/fruit.json'
import FruitCard from './FruitCard.vue'

export default {
  components: {
    FruitCard
  },
  data() {
    return {
      fruit: fruitList
    }
  }
}
</script>

<style scoped></style>
