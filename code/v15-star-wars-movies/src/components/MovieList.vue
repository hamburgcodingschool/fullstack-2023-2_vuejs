<template>
  <h2>List of Movies:</h2>
  <div>
    <div v-if="movieObjects.length == 0">Loading</div>
    <div v-else class="movie-list">
      <MovieCard
        v-for="movieObject in movieObjects"
        :key="movieObject.episode_id"
        :movieObject="movieObject"
        @movieSelect="movieSelectHandler"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from './MovieCard.vue'

export default {
  components: {
    MovieCard
  },
  data() {
    return {
      movieObjects: []
    }
  },
  emits: ['movieSelect'],
  async created() {
    const response = await fetch('https://swapi.dev/api/films')
    const result = await response.json()

    this.movieObjects = result.results
  },
  methods: {
    movieSelectHandler(movieObject) {
      this.$emit('movieSelect', movieObject)
    }
  }
}
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}
</style>
