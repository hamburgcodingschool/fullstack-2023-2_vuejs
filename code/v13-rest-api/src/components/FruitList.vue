<template>
  <h2>The Fruit List</h2>
  <div v-for="(fruitItem, index) in fruit" :key="fruitItem">
    <h4>{{ index }}: {{ fruitItem.name }}</h4>
    <p>{{ fruitItem.description }}</p>
    <img class="fruit-image" :src="fruitItem.image" />
  </div>
</template>

<script>
const fruitList = [
  {
    name: 'Bananas',
    description: 'bananas are good',
    image:
      'https://images.immediate.co.uk/production/volatile/sites/30/2017/01/Bunch-of-bananas-67e91d5.jpg'
  },
  {
    name: 'Apples',
    description: 'apples are also good',
    image: 'https://www.applesfromny.com/wp-content/uploads/2020/05/20Ounce_NYAS-Apples2.png'
  },
  {
    name: 'Grapes',
    description: 'Richard likes grapes',
    image: '/images/funny-grapes.jpg'
  }
]

export default {
  data() {
    return {
      fruit: fruitList
    }
  }
}
</script>

<style scoped>
.fruit-image {
  width: 50px;
  height: 50px;

  background-color: aliceblue;
  box-shadow: 5px 5px 5px gray;

  object-fit: contain;
}
</style>
