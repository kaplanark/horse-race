<script setup>
import { computed } from 'vue';
import { useRaceStore } from '@stores/use-race';

import BaseButton from '@components/Button/BaseButton.vue';
import ScoreTable from '@components/ScoreTable.vue';

const emit = defineEmits(['start']);

const raceStore = useRaceStore();

const closetHandler = () => raceStore.resetRace();

const restartHandler = () => {
	raceStore.resetRace();
	emit('start');
};

const show = computed(() => raceStore.getRaceStatus === 'finished');
</script>

<template>
	<div class="modal" v-if="show">
		<div class="modal__overlay"></div>
		<div class="modal__content">
			<div class="modal__content-header">{{ $t('race_results') }}</div>
			<div class="modal__content-body">
				<ScoreTable></ScoreTable>
			</div>
			<div class="modal__content-footer">
				<div class="btn-group">
					<BaseButton :name="$t('close')" variant="secondary" @click="closetHandler"></BaseButton>
					<BaseButton :name="$t('restart_race')" variant="primary" @click="restartHandler"></BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.modal {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.689);
	}

	&__content {
		position: absolute;
		top: 50%;
		left: calc(50% - 16px);
		transform: translate(-50%, -50%);
		background-color: var(--color-white);
		border-radius: 4px;
		padding: 16px;
		max-width: 800px;
		margin: 0 16px;
		width: calc(100% - 32px);
		max-height: 90vh;
		display: flex;
		flex-direction: column;

		&-header {
			padding: 16px;
			text-align: center;
			font-family: var(--font-secondary);
			font-size: 42px;
		}

		&-body {
			padding: 16px;
			flex: 1;
			overflow: auto;
		}

		&-footer {
			padding: 16px;
		}
	}
}
</style>