<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Button from '@components/Button/Button.vue';
import ScoreList from '@components/ScoreList.vue';
import Lane from '@components/Lane.vue';
import Countdown from '@components/Countdown.vue';
import ResultModal from '@components/Modal/ResultModal.vue';
import SettingDrawer from '@components/SettingDrawer.vue';

const store = useStore();

const startHandler = () => {
	store.commit('SET_RACE_STATUS', 'started');
	store.commit('SET_COUNTDOWN', true);

	const rngInterval = setInterval(() => {
		store.state.race.horses.map(horse => {
			horse.speed = Math.floor(Math.random() * (40 - 20) + 20);
			if (!horse.finish) horse.run = true;
		});
		const allFinished = store.state.race.horses.every(horse => horse.finish);

		if (allFinished) clearInterval(rngInterval);
	}, 3000);

	const wayInterval = setInterval(() => {
		store.state.race.horses.map(horse => {
			if (horse.travelledDistance < store.state.race.laneLength) {
				horse.scoreTime++;
				horse.travelledDistance += horse.speed / 4;
			} else {
				horse.finish = true;
				horse.run = false;
			}
		});
		const allFinished = store.state.race.horses.every(horse => horse.finish);
		if (allFinished) {
			store.commit('SET_RACE_STATUS', 'finished');
			clearInterval(wayInterval);
		}
	}, 100);
};
const settingsHandler = () => store.commit('SET_SETTING_DRAWER', true);

const isDisabled = computed(() => store.getters.getRaceStatus === 'started');
const horses = computed(() => store.state.race.horses);
</script>

<template>
	<div class="race-area">
		<div class="race-area__header">
			<Button name="☰" variant="secondary" @click="settingsHandler"></Button>
			<Teleport to="body">
				<SettingDrawer></SettingDrawer>
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
		background-image: url('@assets/images/bg-mountain.png');
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