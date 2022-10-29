<script setup>
const props = defineProps({
	variant: {
		type: String,
		default: 'default',
	},
	message: {
		type: String,
		default: '',
	},
	index: {
		type: Number,
		default: null,
	},
})

const emit = defineEmits(['close'])

const closeHandler = (index) => emit('close', index);
</script>

<template>
	<div class="alert" :class="'alert--' + props.variant" @click="closeHandler(props.index)">
		<div class="alert__content">
			{{ props.message }}
		</div>
		<svg class="alert__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			@click="closeHandler(props.index)">
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
			</path>
		</svg>
	</div>
</template>

<style lang="scss">
.alert {
	padding: 8px 16px;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 8px;
	height: fit-content;
	width: fit-content;
	cursor: pointer;

	&__content {
		display: flex;
		flex-direction: column;
		color: var(--color-white);
	}

	&__close {
		height: 16px;
		width: 16px;
		fill: var(--color-white);
	}

	&--success {
		background-color: var(--color-success);
		border-left: 4px solid var(--color-success-dark);
	}

	&--error {
		background-color: var(--color-error);
		border-left: 4px solid var(--color-error-dark);
	}

	&--default {
		background-color: var(--color-secondary);
		border-left: 4px solid var(--color-primary);
	}

	&--warning {
		background-color: var(--color-warning);
		border-left: 4px solid var(--color-warning-dark);
	}

	&--info {
		background-color: var(--color-info);
		border-left: 4px solid var(--color-info-dark);
	}
}
</style>