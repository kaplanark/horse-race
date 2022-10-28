<script setup>
const props = defineProps({
	horse: {
		type: Object,
		default: {}
	},
	laneNo: {
		type: Number,
		default: 0
	}
});
</script>

<template>
	<div class="lane" :data-lane="props.laneNo">
		<div class="horse" :class="{ 'running': props.horse.run }"
			:style="{ '--color-horse': props.horse.color, 'margin-left': props.horse.travelledDistance + 'px' }">
		</div>
	</div>
</template>

<style lang="scss">
.lane {
	position: relative;
	background-image: url('@assets/images/bg-lane.webp');
	background-size: contain;
	background-position: bottom;
	background-repeat: no-repeat;
	max-width: 100vw;

	.horse {
		height: 100%;
		width: 80px;
		position: relative;
		transition: all 0.15s ease-in-out;

		&::before {
			position: absolute;
			content: '🐎';
			right: 0;
			top: 50%;
			transform: translateY(-65%);
			font: 72px Muybridge;
			line-height: 1;
			color: var(--color-horse);
			z-index: 1;
		}

		&.running {
			animation: 1s linear infinite gallop;
		}
	}

	&::before {
		position: absolute;
		content: attr(data-lane);
		top: 50%;
		left: 2px;
		transform: translateY(-50%);
		height: 24px;
		width: 24px;
		color: var(--color-white);
		font-size: 18px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
		background-color: var(--color-primary);
		border-radius: 50%;
	}

	&::after {
		position: absolute;
		content: '';
		top: 50%;
		right: 20px;
		height: 90%;
		width: 10px;
		transform: translateY(-50%);
		z-index: 0;
		background-color: var(--color-white);
		background-size: 5px 5px;
		background-image: repeating-linear-gradient(45deg, #222226 0, #222226 0.5px, #ffffff 0, #ffffff 50%);
	}
}
</style>