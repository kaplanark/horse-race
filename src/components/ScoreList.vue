<script setup>
import { computed } from 'vue'
import { useRaceStore } from '@stores/use-race';
import { useMainStore } from '@stores/use-main';

const raceStore = useRaceStore();
const mainStore = useMainStore();

const horses = computed(() => raceStore.getHorseScoreRanking);
const sortingNumbers = computed(() => mainStore.getSortingNumbers);
</script>

<template>
	<div class="list">
		<div class="list__header">
			<div class="list__header-item" v-for="number in sortingNumbers" :key="number">
				<span>{{ number }}</span>
			</div>
		</div>
		<div class="list__body">
			<div class="list__body-cell" v-for="horse in horses" :key="horse.lane">
				<span v-if="horse.travelledDistance === 0">------</span>
				<span v-else :style="{'color':horse.color}">{{ horse.name }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.list {
	display: flex;
	flex-direction: column;
	padding: 0 8px;
	border: 1px solid var(--color-primary);
	border-radius: 4px;

	&__header {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		border-bottom: 1px solid var(--color-primary);

		&-item {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 8px;

			span {
				height: 24px;
				width: 42px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 22px;
				background-color: var(--color-primary);
				color: var(--color-white);
				font-size: 14px;
			}
		}
	}

	&__body {
		display: grid;
		grid-template-columns: repeat(8, 1fr);

		&-cell {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 8px;
			font-size: 14px;
		}
	}
}
</style>