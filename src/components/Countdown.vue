<script setup>
import { ref, computed, watch } from 'vue'
import { useRaceStore } from '@stores/use-race';

const raceStore = useRaceStore();

const countdown = ref(3);

const open = computed(() => raceStore.getCountdown);

watch(open, (value) => { // wtach 'open' value and if it is true, start the countdown
	if (value) {
		const interval = setInterval(() => { // set an interval for the countdown
			countdown.value--;
			if (countdown.value === -1) {
				clearInterval(interval);
				raceStore.setCountdown(false);
				countdown.value = 3;
			}
		}, 1000);
	}
});
</script>

<template>
	<div class="countdown" v-if="open">
		<div class="countdown__overlay"></div>
		<div class="countdown__content">
			{{ countdown }}
		</div>
	</div>
</template>

<style lang="scss">
.countdown {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		background-image: radial-gradient(#5a5959 0.35px, rgba(0, 0, 0, 0.095) 0.35px);
		background-size: 7px 7px;

	}

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		overflow: hidden;
		background-color: var(--color-white);
		color: var(--color-primary);
		height: 220px;
		width: 220px;
		font-size: 128px;
		font-family: var(--font-secondary);
	}
}
</style>