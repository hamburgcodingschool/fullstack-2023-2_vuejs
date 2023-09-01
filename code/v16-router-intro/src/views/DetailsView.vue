<template>
  <div>{{ name }}</div>
  <div>{{ weight }}</div>
  <img :src="imageURL" />
</template>

<script>
export default {
  data() {
    return {
      name: 'Default name',
      weight: 0,
      imageURL:
        'https://png.pngtree.com/png-clipart/20190918/ourmid/pngtree-load-the-3273350-png-image_1733730.jpg'
    }
  },
  async created() {
    const nameParam = this.$route.query.name

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nameParam)
    const result = await response.json()

    this.name = result.name
    this.weight = result.weight
    this.imageURL = result.sprites.other['official-artwork'].front_default
  }
}
</script>

<style scoped></style>
