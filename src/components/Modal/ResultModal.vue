<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const show = computed(() => store.state.race.raceStatus === 'finished');
</script>

<template>
	<div class="modal" v-if="show">
		<div class="modal__overlay" @click="closeHandler"></div>
		<div class="modal__content">
			<div class="modal__content-header">
				<slot name="header"></slot>
			</div>
			<div class="modal__content-body">
				<slot name="body"></slot>
			</div>
			<div class="modal__content-footer">
				<slot name="footer"></slot>
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
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: var(--color-white);
		border-radius: 4px;
		padding: 16px;
		max-width: 800px;
		width: 100%;

		&-header {
			padding: 16px;
			border-bottom: 1px solid var(--color-tertiary);
		}

		&-body {
			padding: 16px;
		}

		&-footer {
			padding: 16px;
			border-top: 1px solid var(--color-tertiary);
		}
	}
}
</style>