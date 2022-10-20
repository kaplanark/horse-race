<script setup>
import { watchEffect, ref, computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();

const horses = ref([]);

const compareFunction = (a, b) => {
	return (b.travelledDistance / b.scoreTime) - (a.travelledDistance / a.scoreTime);
}

const numbers = computed(() => store.state.sortingNumbers);

watchEffect(() => {
	horses.value = [...store.state.race.horses].sort((a, b) => compareFunction(a, b));
});
</script>

<template>
	<div class="table">
		<div class="table__header">
			<div class="table__header-item" v-for="number in numbers" :key="number">
				<span>{{ number }}</span>
			</div>
		</div>
		<div class="table__body">
			<div class="table__body-cell" v-for="horse in horses" :key="horse.id">
				<span v-if="horse.travelledDistance === 0">------</span>
				<span v-else :style="{'color':horse.color}">{{ horse.name }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.table {
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