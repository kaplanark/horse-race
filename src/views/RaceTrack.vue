<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

import Button from '@components/Button/Button.vue';
import ScorTable from '@components/ScorTable.vue';
import Lane from '@components/Lane.vue';
import Countdown from '../components/Countdown.vue';

const store = useStore();

const startRace = () => {
	store.dispatch('startRace');
};

const isDisabled = computed(() => store.state.race.start);
const horses = computed(() => store.state.race.horses);
</script>

<template>
	<div class="race-area">
		<div class="race-area__header"></div>
		<div class="race-area__content">
			<template v-for="(horse,index) in horses" :key="horse.id">
				<Lane :horse="horse" :lane-no="index + 1" />
			</template>
		</div>
		<div class="race-area__footer">
			<Button name="Start Race" variant="primary" :disasbled="isDisabled" @click="startRace" />
			<ScorTable></ScorTable>
			<Teleport to="body">
				<Countdown></Countdown>
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