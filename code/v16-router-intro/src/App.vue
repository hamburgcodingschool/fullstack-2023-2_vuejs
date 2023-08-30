<template>
  <header>
    <nav>
      <RouterLink to="/">Homepage</RouterLink>
      |
      <RouterLink to="/about">About</RouterLink>
      |
      <RouterLink to="/gallery">Gallery</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script>
export default {}
</script>

<style scoped>
header {
  position: sticky;
  height: 50px;
  padding: 20px;

  background-color: pink;
}
</style>
