<script setup>
import BaseButton from '@components/Button/BaseButton.vue';
import Marker from '@components/Marker.vue';
const props = defineProps({
	data: {
		type: Object,
		default: {}
	}
});
const emits = defineEmits(['trigger', 'reset']);

const triggerHandler = () => emits('trigger');

const resetHandler = () => emits('reset');
</script>

<template>
	<section class="mechanism">
		<Marker postion="left" text="Trawelled distance" :count="props.data.travelledDistance + 'px'"></Marker>
		<Marker postion="left" text="Current speed" :count="props.data.speed + 'px/sec'"></Marker>
		<Marker postion="right" text="Elapsed time" :count="props.data.scoreTime + 'sec'"></Marker>
		<div class="btn-group">
			<BaseButton name="Trigger" variant="primary" @click="triggerHandler"></BaseButton>
			<BaseButton name="Reset" variant="secondary" @click="resetHandler"></BaseButton>
		</div>
		<code>
			{
				travelled-distance:{{ props.data.travelledDistance }}px,
				rng-speed:{{ props.data.speed }}px/sec,
				score-time:{{ props.data.scoreTime }}sec
				runing:{{ props.data.run }}
			}
		</code>
		<div class="graphic" id="graphic">
			<div class="graphic__title">Screen width <strong>{{ props.data.totalWay }}</strong> px</div>
			<div class="graphic__content">
				<div class="ball" :class="{'run':data.run}" :style="{ 'margin-left': props.data.travelledDistance + 'px' }">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.mechanism {
	height: 100vh;
	padding: 24px;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	position: relative;
	overflow: hidden;
	gap: 24px;

	&::before {
		position: absolute;
		content: '🐎';
		top: 0;
		left: 0;
		width: 100%;
		height: 50%;
		z-index: 1;
		font: 100vh Muybridge;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-tertiary);
		opacity: 0.1;
		animation: 3s linear infinite gallop;
	}

	@media screen and (max-width: 768px) {
		&::before {
			font-size: 80vh;
		}
	}
}

.marker {
	position: absolute;

	&:nth-child(1) {
		top: 50%;
		left: 15%;
	}

	&:nth-child(2) {
		top: 10%;
		left: 40%;
	}

	&:nth-child(3) {
		top: 30%;
		right: 20%;
	}
}

.graphic {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	&__title {
		font-size: 12px;
		color: var(--color-quaternary);
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 110%;
			border-bottom: 1px dashed var(--color-quaternary);
			height: 1px;
			width: 100vh;
		}

		&::after {
			content: '';
			position: absolute;
			top: 50%;
			right: 110%;
			border-bottom: 1px dashed var(--color-quaternary);
			height: 1px;
			width: 100vh;
		}
	}

	&__content {
		height: 100%;
		width: 100%;
		padding: 8px 0;

		.ball {
			height: 26px;
			width: 26px;
			border-radius: 50%;
			background-color: var(--color-secondary);
			position: relative;
			transition: 0.15s ease-in-out;

			&.run {
				&::after {
					content: '';
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					left: 110%;
					width: 0;
					height: 0;
					border-top: 6px solid transparent;
					border-left: 9px solid gray;
					border-bottom: 6px solid transparent;
				}
			}
		}
	}
}
</style>