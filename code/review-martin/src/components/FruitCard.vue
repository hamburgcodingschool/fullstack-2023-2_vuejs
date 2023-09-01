<template>
  <div class="fruit-card">
    <span class="fruit-emoji">{{ fruit.id }}</span>
    <h3 class="fruit-title">{{ fruit.address.geo.lat }}</h3>
    <p class="fruit-description">Yay it's a banana!</p>
  </div>
</template>

<script>
export default {
  props: {
    fruit: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.fruit-card {
  background-color: lightblue;
  width: 100px;
  min-height: 100px;
  border-radius: 10px;
  padding: 10px;
}

.fruit-emoji {
  display: block;
  margin: 0 auto;
  width: 45px;
  line-height: 45px;
  font-size: 40px;
  background-color: peachpuff;
  border-radius: 50%;
  border: solid 5px white;
  box-shadow: 0px 5px 10px black;
}
</style>
