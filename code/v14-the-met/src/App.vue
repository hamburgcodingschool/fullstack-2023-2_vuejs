<template>
  <div v-if="isLoadingList">LOADING LIST...</div>
  <div v-else>
    <h1>{{ artObject.title }}</h1>
    <button @click="showRandomArtObject">SHOW ME SOMETHING RANDOM!</button>
    <div v-if="artObject.primaryImageSmall.length == 0">Sorry no image</div>
    <img v-else :src="artObject.primaryImageSmall" />
  </div>
</template>

<script>
function randomizeInRange(min, max) {
  // let myRandom = Math.random() // 0.34567876543

  // myRandom = myRandom * (max - min) // 0.389475983475, 1.435934857, 2.345u349857
  // myRandom = Math.floor(myRandom) //  0, 1, 2
  // myRandom = myRandom + min // 4, 5, 6

  // return myRandom

  return Math.floor(Math.random() * (max - min)) + min
}

export default {
  data() {
    return {
      isLoadingList: true,
      artObject: {},
      resultList: {}
    }
  },
  async created() {
    const responseList = await fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/objects'
    )
    this.resultList = await responseList.json()

    this.isLoadingList = false

    this.showRandomArtObject()
  },
  methods: {
    async showRandomArtObject() {
      const randomNumber = randomizeInRange(0, this.resultList.total)

      const objectID = this.resultList.objectIDs[randomNumber]

      const response = await fetch(
        'https://collectionapi.metmuseum.org/public/collection/v1/objects/' + objectID
      )
      const result = await response.json()

      this.artObject = result
      console.log(result)
    }
  }
}
</script>

<style scoped></style>
