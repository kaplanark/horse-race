<script setup>
import { computed } from 'vue';
const props = defineProps({
	time: {
		type: Number,
		default: 0
	}
});

const timer = computed(() => {
	let minutes = Math.floor(props.time / 60000);
	let seconds = ((props.time % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
});
</script>

<template>
	<div class="timer">{{ timer }}</div>
</template>

<style lang="scss">
.timer {
	font-size: 24px;
	font-family: var(--font-secondary);
	color: var(--color-primary);
}
</style>

<style lang="scss">
.timer {
	font-size: 24px;
	font-family: var(--font-secondary);
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>