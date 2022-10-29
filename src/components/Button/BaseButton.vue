<script setup>
const props = defineProps({
	name: {
		type: String,
		default: 'Button'
	},
	variant: {
		type: String,
		default: 'primary'
	},
	disabled: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<button :class="`btn btn--${props.variant}`" :disabled="props.disabled">
		{{ props.name }}
	</button>
</template>

<style lang="scss">
.btn {
	cursor: pointer;
	outline: none;
	border: none;
	z-index: 1;
	position: relative;
	font-size: inherit;
	font-family: inherit;

	&:disabled {
		cursor: default;
		opacity: 0.5;

		&:hover {
			color: var(--color-primary);

			&::before {
				display: none;
			}
		}
	}

	&--primary {
		color: var(--color-primary);
		padding: 8px 16px;
		outline: none;
		border: none;
		background-color: var(--color-white);
		transition: all 0.25s ease-in-out;
		border: 1px solid var(--color-primary);
		border-radius: 4px;
		overflow: hidden;

		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: var(--color-primary);
			transform-origin: center right;
			transform: scaleX(0);
			transition: transform 0.25s ease-in-out;
		}

		&:hover {
			color: var(--color-white);

			&::before {
				transform-origin: center left;
				transform: scaleX(1);
			}
		}

		&:active,
		&:focus {
			color: var(--color-white);

			&::before {
				transform: scale(1);
				background-color: var(--color-primary);
			}
		}
	}

	&--secondary {
		color: var(--color-secondary);
		padding: 8px 16px;
		outline: none;
		border: none;
		background-color: var(--color-white);
		transition: all 0.25s ease-in-out;
		border: 1px solid var(--color-secondary);
		border-radius: 4px;
		overflow: hidden;

		&::before {
			content: '';
			z-index: -1;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: var(--color-secondary);
			transform-origin: center right;
			transform: scaleX(0);
			transition: transform 0.25s ease-in-out;
		}

		&:hover {
			color: var(--color-white);

			&::before {
				transform-origin: center left;
				transform: scaleX(1);
			}
		}

		&:active,
		&:focus {
			color: var(--color-white);

			&::before {
				transform: scale(1);
				background-color: var(--color-secondary);
			}
		}
	}
}
</style>