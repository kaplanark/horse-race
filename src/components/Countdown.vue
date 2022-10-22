<script setup>
import { ref, computed, watch } from 'vue'
import { useRaceStore } from '@stores/use-race';

const raceStore = useRaceStore();

const countdown = ref(3);

const hidden = computed(() => raceStore.getCountdown);

watch(hidden, (value) => {
	if (value) {
		const interval = setInterval(() => {
			countdown.value--;
			if (countdown.value === 0) {
				clearInterval(interval);
				raceStore.setCountdown(false);
				countdown.value = 3;
			}
		}, 1000);
	}
});
</script>

<template>
	<div class="countdown" v-if="hidden">
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
		height: 128px;
		width: 128px;
		font-size: 96px;
		font-family: var(--font-secondary);
	}
}
</style>