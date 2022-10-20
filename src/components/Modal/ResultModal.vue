<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from '@components/Button/Button.vue';
import ScoreTable from '@components/ScoreTable.vue';

const store = useStore();
const emit = defineEmits(['start']);

const restartHandler = () => {
	store.dispatch('resetRace')
		.then(() => {
			emit('start');
		});
};

const show = computed(() => store.getters.getRaceStatus === 'finished');
</script>

<template>
	<div class="modal" v-if="show">
		<div class="modal__overlay"></div>
		<div class="modal__content">
			<div class="modal__content-header">Race Results</div>
			<div class="modal__content-body">
				<ScoreTable></ScoreTable>
			</div>
			<div class="modal__content-footer">
				<div class="btn-group">
					<Button name="Restart Race" variant="primary" @click="restartHandler"></Button>
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

		&-header {
			padding: 16px;
			text-align: center;
			font-family: var(--font-secondary);
			font-size: 42px;
		}

		&-body {
			padding: 16px;
		}

		&-footer {
			padding: 16px;
		}
	}
}
</style>