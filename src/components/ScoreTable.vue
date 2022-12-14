<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@stores/use-race';
import { useMainStore } from '@stores/use-main';

const raceStore = useRaceStore();
const mainStore = useMainStore();

const horses = computed(() => raceStore.getHorseScoreRanking); // getting the horse score ranking
const cardinalNumbers = computed(() => mainStore.getCardinalNumbers); // getting the cardinal numbers from the main store
</script>

<template>
	<div class="table">
		<div class="table__header">
			<div class="col">{{ $t('lane_no') }}</div>
			<div class="col">{{ $t('name') }}</div>
			<div class="col">{{ $t('last_speed') }}</div>
			<div class="col">{{ $t('finishing_time') }}</div>
		</div>
		<div class="table__aside">
			<div class="row" v-for="cardinalNumber in cardinalNumbers" :key="cardinalNumber">{{ cardinalNumber }}</div>
		</div>
		<div class="table__content">
			<div class="row" v-for="horse in horses">
				<span class="col">{{ horse.lane }}</span>
				<span class="col" :style="{ color: horse.color }">{{ horse.name }}</span>
				<span class="col">{{ horse.speed }} km/sec</span>
				<span class="col">{{ horse.scoreTime }} sec</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.table {
	display: grid;
	grid-template-areas: 'x header header header header header header'
		'aside content content content content content content';
	gap: 8px;
	width: 100%;
	min-width: max-content;

	&__header {
		grid-area: header;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
		border-bottom: 1px solid var(--color-solid);

		.col {
			color: var(--color-primary);
			font-weight: 700;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 4px;
		}
	}

	&__aside {
		grid-area: aside;
		display: grid;
		grid-template-rows: repeat(8, 1fr);
		gap: 8px;
		margin-right: 16px;

		.row {
			border-radius: 22px;
			background-color: var(--color-primary);
			color: var(--color-white);
			text-align: center;
			font-size: 14px;
			position: relative;
			padding: 0 8px;

			&:before {
				position: absolute;
				content: '';
				top: 50%;
				right: 0;
				transform: translateY(-50%) translateX(120%);
				width: 0;
				height: 0;
				border-top: 6px solid transparent;
				border-left: 6px solid var(--color-primary);
				border-bottom: 6px solid transparent;
			}
		}
	}

	&__content {
		grid-area: content;
		display: grid;
		grid-template-rows: repeat(8, 1fr);
		gap: 8px;

		.row {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			gap: 8px;
			border-bottom: 1px solid var(--color-solid);

			.col {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>