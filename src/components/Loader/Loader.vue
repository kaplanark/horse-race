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
			<img src="@assets/images/horse.gif" alt="" width="100">
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

	&::before {
		content: '';
		height: 100%;
		width: 100%;
		border-radius: 50%;
		position: absolute;
		border: solid transparent 2px;
		transition: all 0.25s ease;
	}

	&--active {
		&::before {
			border-top: 2px solid var(--color-tertiary);
			border-bottom: 2px solid var(--color-tertiary);
			animation: clockwise 2.15s linear infinite;
		}
	}
}
</style>