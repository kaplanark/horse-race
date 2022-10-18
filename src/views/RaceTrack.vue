<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from '@components/Button/Button.vue';
import ScorTable from '@components/ScorTable.vue';

const store = useStore();

const horses = computed(() => store.state.horse.horses);
</script>

<template>
	<div class="race-area">
		<div class="race-area__header"></div>
		<div class="race-area__content">
			<div class="lane" v-for="(horse,index) in horses" :key="horse.id" :lane-no="index + 1">
				<div class="horse" :style="{'--color-horse':horse.color,'margin-left':horse.travelledDistance+'px'}"></div>
			</div>
		</div>
		<div class="race-area__footer">
			<Button name="Start Race" variant="primary" @click="startRace" />
			<ScorTable></ScorTable>
		</div>
	</div>
</template>

<style lang="scss">
.race-area {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: grid;
	grid-template-rows: 6fr 12fr 4fr;

	&__header {
		background-image: url('@assets/images/bg-mountain.png');
		background-size: contain;
		background-repeat: repeat;
	}

	&__content {
		display: grid;
		grid-template-rows: repeat(8, 1fr);

		.lane {
			position: relative;
			background-image: url('@assets/images/bg-lane.png');
			background-size: contain;
			background-position: bottom;
			background-repeat: no-repeat;

			.horse {
				height: 100%;
				width: 80px;
				position: relative;
				transition: all 0.75s ease-in-out;

				&::before {
					position: absolute;
					content: '🐎';
					right: 0;
					top: 50%;
					transform: translateY(-65%);
					font: 72px Muybridge;
					line-height: 1;
					color: var(--color-horse);
					animation: 1s linear infinite gallop;
					z-index: 1;
				}
			}

			&::before {
				position: absolute;
				content: attr(lane-no);
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
		}
	}

	&__footer {
		padding: 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

}
</style>