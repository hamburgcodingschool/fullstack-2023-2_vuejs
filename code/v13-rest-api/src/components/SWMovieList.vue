<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <ul>
      <li v-for="movie in movies">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
      movies: []
    }
  },
  async created() {
    const response = await fetch('https://swapi.dev/api/films')
    const result = await response.json()

    this.movies = result.results
    this.isLoading = false

    console.log(this.movies)
  }
}
</script>

<style scoped></style>
