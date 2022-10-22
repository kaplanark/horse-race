<script setup>
const props = defineProps({
	postion: {
		type: String,
		default: 'left'
	},
	text: {
		type: String,
		default: ''
	},
	count: {
		type: String,
		default: ''
	}
});
</script>

<template>
	<div class="marker" :class="'marker--' + props.postion">
		<span class="marker__text">{{ props.text }}</span>
		<span class="marker__count">{{props.count }}</span>
	</div>
</template>

<style lang="scss">
.marker {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	&__text {
		font-size: 12px;
		color: var(--color-quaternary);
	}

	&__count {
		font-size: 12px;
		padding: 4px 8px;
		background-color: var(--color-quaternary);
		color: var(--color-white);
		border-radius: 12px;
		line-height: 1;
		position: relative;
	}

	&--right {
		align-items: flex-end;

		.marker__count {
			&::before {
				content: '';
				position: absolute;
				top: 50%;
				right: 100%;
				background-color: var(--color-quaternary);
				height: 1px;
				width: 100%;
			}
		}
	}

	&--left {
		align-items: flex-start;

		.marker__count {
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 100%;
				background-color: var(--color-quaternary);
				height: 1px;
				width: 100%;
			}
		}
	}
}
</style>