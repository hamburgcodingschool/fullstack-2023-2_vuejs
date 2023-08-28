<template>
  <section class="main-section">
    <div>
      <MovieList @movieSelect="movieSelectHandler" />
    </div>
    <div>
      <MovieDetails :movieObject="selectedMovie" />
    </div>
  </section>
</template>

<script>
import MovieList from './components/MovieList.vue'
import MovieDetails from './components/MovieDetails.vue'

export default {
  components: {
    MovieList,
    MovieDetails
  },
  data() {
    return {
      selectedMovie: undefined
    }
  },
  methods: {
    movieSelectHandler(movieObject) {
      this.selectedMovie = movieObject
    }
  }
}
</script>

<style scoped>
.main-section {
  display: flex;
  gap: 20px;
  margin: 0 auto;
  width: 820px;
}

.main-section > div {
  background-color: lightcoral;
  width: 400px;
  min-height: 600px;
}
</style>
