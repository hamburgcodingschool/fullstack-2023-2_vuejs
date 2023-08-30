<template>
  <div>
    <h1>WELCOME TO THE HOMEPAGE</h1>
    <ul>
      <li v-for="pokemon in pokemonList" :key="pokemon.url">
        <RouterLink :to="`/details?name=${pokemon.name}`">{{ pokemon.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemonList: []
    }
  },
  async created() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result = await response.json()

    this.pokemonList = result.results
  }
}
</script>

<style scoped></style>
