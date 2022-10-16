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
		border-top: 2px solid #222226;
		animation: counterclockwise 2.5s linear infinite;
		animation-play-state: var(--loader-animation);
	}

	&::after {
		content: '';
		height: 100%;
		width: 100%;
		border-radius: 50%;
		position: absolute;
		border-bottom: 2px solid #222226;
		animation: clockwise 1.5s linear infinite;
		animation-play-state: var(--loader-animation);
	}

	&--active {
		--loader-animation: running;
	}
}
</style>