<script setup>
</script>

<template>
	<div class="sections">
		<section class="entry">
		</section>
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

.entry {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;

	&::before {
		position: absolute;
		content: '🐎';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		font: 100vh Muybridge;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-tertiary);
		animation: 3s linear infinite gallop;
		opacity: 0.1;
	}
}
</style>