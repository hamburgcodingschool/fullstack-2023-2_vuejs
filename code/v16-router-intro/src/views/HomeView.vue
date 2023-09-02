<template>
  <div>
    <h1>WELCOME TO THE HOMEPAGE</h1>
    <ul>
      <li v-for="pokemon in this.pokemonList" :key="pokemon.id">
        <a :href="`/details?name=${pokemon.id}`">{{ pokemon.name }}</a>
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
  methods: {
    myAwesomeMethod() {
      console.log('Im awesome!!!')
    }
  },
  async created() {
    const response = await fetch('http://localhost:3000/animals')
    const result = await response.json()

    this.pokemonList = result.results
  }
}
</script>

<style scoped></style>
