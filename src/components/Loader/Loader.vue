<script setup>
const props = defineProps({
	status: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<div class="loader" :class="{ 'loader--active': props.status }">
		<div class="loader__content">
			🐎
		</div>
	</div>
</template>

<style lang="scss">
.loader {
	height: 100px;
	width: 100px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	font: 142px Muybridge;
	color: var(--color-tertiary);

	&--active {
		animation: 1s linear infinite gallop;
	}
}
</style>