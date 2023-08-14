<template>
    <section>
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
    </section>
</template>

<script>
import TheCard from './TheCard.vue';

export default {
    components: {
        TheCard
    }
}
</script>

<style scoped>
section {
    margin: 20px auto;
    max-width: 800px;
    min-height: 350px;
    display: flex;
    gap: 40px;
}
</style>