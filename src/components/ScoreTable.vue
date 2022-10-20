<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import compareFunction from '@utils/compareFunction';

const store = useStore();

const horses = computed(() => {
	const data = store.getters.getHorses;
	let sortedData = [...data].sort((a, b) => compareFunction(a, b));
	return sortedData;
});
const sortingNumbers = computed(() => store.state.sortingNumbers);
</script>

<template>
	<div class="table">
		<div class="table__header">
			<div class="col">Lane No</div>
			<div class="col">Name</div>
			<div class="col">Speed</div>
			<div class="col">Finishing Time</div>
		</div>
		<div class="table__aside">
			<div class="row" v-for="number in sortingNumbers">{{ number }}</div>
		</div>
		<div class="table__content">
			<div class="row" v-for="horse in horses">
				<span class="col">{{ horse.lane }}</span>
				<span class="col" :style="{color:horse.color}">{{ horse.name }}</span>
				<span class="col">{{ horse.speed }}</span>
				<span class="col">{{ horse.scoreTime }}</span>
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

	&__header {
		grid-area: header;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px;
		border-bottom: 1px solid var(--color-primary);

		.col {
			color: var(--color-primary);
			font-weight: 700;
			display: flex;
			align-items: center;
			justify-content: center;
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
			border-bottom: 1px solid var(--color-primary);

			.col {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
}
</style>