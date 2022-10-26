<script setup>
import { computed } from 'vue';
const props = defineProps({
	time: {
		type: Number,
		default: 0
	}
});

const timer = computed(() => {
	let minutes = Math.floor(props.time / 60000); // calculating the minutes
	let seconds = ((props.time % 60000) / 1000).toFixed(0); // calculating the seconds
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds; // return the time in the format of minutes:seconds
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