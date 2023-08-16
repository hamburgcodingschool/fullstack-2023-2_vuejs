<template>
	<div class="card">
		<h3>{{ name }}</h3>
		<p><span>Profession: </span> {{ profession }}!!!</p>
	</div>
</template>

<script>
export default {
	props: ["name", "profession"]
};
</script>

<style scoped>
.card {
	width: 100px;
	min-height: 100px;
	background-color: #ccc;
	box-shadow: 10px 10px 10px black;
}

h3 {
	color: red;
}

span {
	font-weight: bold;
}
</style>
