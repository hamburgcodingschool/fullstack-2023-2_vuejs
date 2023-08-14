<template>
  <h1 class="title">Welcome to Vue.JS</h1>
  <h3>Isn't it great?</h3>
  <FruitList />
  <OnOffButtons />
</template>

<script>
import FruitList from "./components/FruitList.vue";
import OnOffButtons from "./components/OnOffButtons.vue";

export default {
  components: {
    FruitList,
    OnOffButtons
  }
}
</script>

<style scoped>
  .title {
    color: red;
  }
</style>