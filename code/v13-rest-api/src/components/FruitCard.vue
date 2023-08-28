<template>
  <div>
    <h4>{{ fruitItem.name }}</h4>
    <p>{{ fruitItem.description }}</p>
    <img class="fruit-image" :src="fruitItem.image" />
  </div>
</template>

<script>
export default {
  props: {
    fruitItem: Object
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
