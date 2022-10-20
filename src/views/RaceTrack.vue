<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import Button from '@components/Button/Button.vue';
import ScoreList from '@components/ScoreList.vue';
import Lane from '@components/Lane.vue';
import Countdown from '@components/Countdown.vue';
import ResultModal from '@components/Modal/ResultModal.vue';

const store = useStore();

const isCountdown = ref(false);

const startHandler = () => {
	isCountdown.value = true;
	store.dispatch('startRace');
	setTimeout(() => {
		isCountdown.value = false;
	}, 3000);
};

const isDisabled = computed(() => store.state.race.raceStatus === 'running');
const horses = computed(() => store.state.race.horses);
</script>

<template>
	<div class="race-area">
		<div class="race-area__header"></div>
		<div class="race-area__content">
			<template v-for="horse in horses" :key="horse.lane">
				<Lane :horse="horse" :lane-no="horse.lane" />
			</template>
		</div>
		<div class="race-area__footer">
			<Button name="Start Race" variant="primary" :disabled="isDisabled" @click="startHandler" />
			<ScoreList></ScoreList>
			<Teleport to="body">
				<Countdown v-model:show="isCountdown"></Countdown>
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
		background-image: url('@assets/images/bg-mountain.png');
		background-size: contain;
		background-repeat: repeat;
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