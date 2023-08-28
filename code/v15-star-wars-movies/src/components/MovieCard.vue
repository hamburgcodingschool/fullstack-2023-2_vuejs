<template>
  <div class="movie-card">
    <div>episode</div>
    <div class="episode-number">{{ movieObject.episode_id }}</div>
    <div>{{ movieObject.title }}</div>
    <button @click="selectClickHandler">SELECT</button>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: {
      type: Object,
      required: true
    }
  },
  emits: ['movieSelect'],
  methods: {
    selectClickHandler() {
      this.$emit('movieSelect', this.movieObject)
    }
  }
}
</script>

<style scoped>
.movie-card {
  width: 100px;
  min-height: 50px;
  background-color: white;
}

.episode-number {
  font-weight: bold;
  font-size: 40px;
}
</style>
