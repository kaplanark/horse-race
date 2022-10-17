<script setup>
</script>

<template>
	<div class="sections">
		<section></section>
		<section></section>
		<section></section>
	</div>
</template>

<style lang="scss">
.sections {
	height: 100vh;
	width: 100vw;
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: var(--color-white);
	background-image: linear-gradient(#f6f6f6 0.5px, transparent 0.5px), linear-gradient(to right, #f6f6f6 0.5px, #ffffff 0.5px);
	background-size: 10px 10px;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 5px;
		margin: 0.2rem 0;
		background: var(--color-white);
	}

	&::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: var(--color-tertiary);
	}
}
</style>