<template>
  <div>
    <!-- <FruitList />
    <AnotherFruitList /> -->
    <!-- <PersonList /> -->
    <SWMovieList />
  </div>
</template>

<script>
import FruitList from './components/FruitList.vue'
import AnotherFruitList from './components/AnotherFruitList.vue'
import PersonList from './components/PersonList.vue'
import SWMovieList from './components/SWMovieList.vue'

export default {
  components: {
    FruitList,
    AnotherFruitList,
    PersonList,
    SWMovieList
  }
}
</script>

<style scoped></style>
