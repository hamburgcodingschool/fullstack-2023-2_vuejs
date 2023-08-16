<template>
	<div class="cardHolder">
		<PersonCard name="Bob" profession="Student" />
		<PersonCard name="Martha" profession="Influencer" />
		<PersonCard />
	</div>
</template>

<script>
import PersonCard from "./components/PersonCard.vue";

export default {
	components: {
		PersonCard
	}
};
</script>

<style scoped>
.cardHolder {
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
}
</style>
