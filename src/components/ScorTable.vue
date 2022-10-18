<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const standings = computed(() => store.state.race.standings);
const horses = computed(() => store.state.horse.horses);
</script>

<template>
	<div class="table">
		<div class="table__header">
			<div class="table__header-item" v-for="standing in standings" :key="standing">
				<span>{{ standing }}</span>
			</div>
		</div>
		<div class="table__body">
			<div class="table__body-cell" v-for="horse in horses" :key="horse.id">
				<span v-if="horse.score === 0">-------</span>
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