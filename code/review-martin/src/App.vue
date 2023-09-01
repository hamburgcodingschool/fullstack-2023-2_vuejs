<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <!-- eslint-disable vue/require-v-for-key -->
      <li v-for="item in list">{{ item.title }}</li>
    </ul>
    <div class="fruit-box">
      <!-- eslint-disable vue/valid-v-for -->
      <FruitCard v-for="item in list" :fruit="item" />
    </div>
  </div>
</template>

<script>
import FruitCard from './components/FruitCard.vue'

export default {
  components: { FruitCard },
  data() {
    return {
      title: 'Hello I am the title!',
      list: [
        {
          title: 'Apples',
          emoji: '🍎'
        },
        {
          title: 'Pears',
          emoji: '🍐'
        },
        {
          title: 'Mangos',
          emoji: '🥭'
        },
        {
          title: 'Bananas',
          emoji: '🍌'
        }
      ]
    }
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await response.json()

    // this.list = result
    // console.log (this.data)
  }
}
</script>

<style scoped>
.fruit-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
