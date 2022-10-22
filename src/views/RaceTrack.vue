<script setup>
import { ref, computed } from 'vue';
import { useRaceStore } from '@stores/use-race';
import { startRace } from '@utils/race';

import Button from '@components/Button/Button.vue';
import ScoreList from '@components/ScoreList.vue';
import Lane from '@components/Lane.vue';
import Countdown from '@components/Countdown.vue';
import ResultModal from '@components/Modal/ResultModal.vue';
import SettingDrawer from '@components/SettingDrawer.vue';

const raceStore = useRaceStore();

const isSettingDrawer = ref(false);

const startHandler = () => {
	raceStore.setCountdown(true);
	const timer = setTimeout(() => {
		startRace();
		clearTimeout(timer);
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
				<SettingDrawer v-model:hidden="isSettingDrawer"></SettingDrawer>
			</Teleport>
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
				<ResultModal></ResultModal>
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
		padding: 24px;
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
	}
}
</style>