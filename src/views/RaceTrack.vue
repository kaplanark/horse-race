<script setup>
import { ref, computed } from 'vue';
import { useRaceStore } from '@stores/use-race';

import Button from '@components/Button/Button.vue';
import ScoreList from '@components/ScoreList.vue';
import Lane from '@components/Lane.vue';
import Countdown from '@components/Countdown.vue';
import ResultModal from '@components/Modal/ResultModal.vue';
import SettingDrawer from '@components/SettingDrawer.vue';
import Timer from '@components/Timer.vue';

const raceStore = useRaceStore();

const isSettingDrawer = ref(false);
const raceTimer = ref(0);

const startRaceFunction = () => {
	raceStore.setRaceStatus('started');
	const speedInterval = setInterval(() => {
		raceStore.getHorses.map(horse => {
			horse.speed = Math.floor(Math.random() * (40 - 20) + 20);
			if (!horse.finish) horse.run = true;
		});
		const allFinished = raceStore.getHorses.every(horse => horse.finish);

		if (allFinished) {
			raceStore.setRaceStatus('finished');
			clearInterval(speedInterval)
		};

	}, 1000);

	const travelledDistanceInterval = setInterval(() => {
		raceStore.getHorses.map(horse => {
			if (horse.travelledDistance < raceStore.getLaneLength) {
				horse.scoreTime++;
				horse.travelledDistance += horse.speed / 4;
			} else {
				horse.finish = true;
				horse.run = false;
			}
		});
		raceTimer.value += 100;
		const allFinished = raceStore.getHorses.every(horse => horse.finish);
		if (allFinished) clearInterval(travelledDistanceInterval);
	}, 100);
};

const startHandler = () => {
	raceStore.setCountdown(true);
	raceTimer.value = 0;
	const countdownTimer = setTimeout(() => {
		startRaceFunction();
		clearTimeout(countdownTimer);
	}, 3000);
}
const settingHandler = () => isSettingDrawer.value = true;

const isDisabled = computed(() => raceStore.getRaceStatus === 'started');
const horses = computed(() => raceStore.getHorses);
</script>

<template>
	<div class="race-area">
		<div class="race-area__header">
			<Button name="☰" variant="secondary" @click="settingHandler"></Button>
			<Teleport to="body">
				<SettingDrawer v-model:open="isSettingDrawer"></SettingDrawer>
			</Teleport>
			<Timer :time="raceTimer"></Timer>
		</div>
		<div class="race-area__content">
			<template v-for="horse in horses" :key="horse.lane">
				<Lane :horse="horse" :lane-no="horse.lane"></Lane>
			</template>
		</div>
		<div class="race-area__footer">
			<Button name="Start Race" variant="primary" :disabled="isDisabled" @click="startHandler"></Button>
			<ScoreList></ScoreList>
			<Teleport to="body">
				<Countdown></Countdown>
				<ResultModal @start="startHandler"></ResultModal>
			</Teleport>
		</div>
	</div>
</template>

<style lang="scss">
.race-area {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: grid;
	grid-template-rows: 6fr 12fr 4fr;

	&__header {
		background-image: url('@assets/images/bg-mountain.webp');
		background-size: contain;
		background-repeat: repeat;
		background-position: top center;
		padding: 24px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		@media screen and (max-width: 900px) {
			background-repeat: no-repeat;
			background-size: cover;
		}
	}

	&__content {
		display: grid;
		grid-template-rows: repeat(8, 1fr);
	}

	&__footer {
		padding: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 768px) {
			flex-direction: column;
			gap: 24px;
		}
	}
}
</style>