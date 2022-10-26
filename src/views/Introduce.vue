<script setup>
import { onMounted, reactive } from 'vue'

import Mechanism from '@components/Introduce/Mechanism.vue';
import Information from '@components/Introduce/Information.vue';

const data = reactive({
	totalWay: 0,
	travelledDistance: 0,
	speed: 0,
	scoreTime: 0,
	run: false
});

const triggerHandler = () => {
	const rng = Math.floor(Math.random() * (40 - 20) + 20);
	if (data.travelledDistance <= data.totalWay) {
		data.speed = rng;
		data.travelledDistance += rng;
		data.scoreTime++;
		data.run = true;
	} else {
		data.run = false;
	}
}

const resetHandler = () => {
	data.travelledDistance = 0;
	data.speed = 0;
	data.scoreTime = 0;
	data.run = false;
}

onMounted(() => {
	const el = document.getElementById('graphic');
	data.totalWay = el.offsetWidth - 42;
})
</script>

<template>
	<div class="sections">
		<Mechanism :data="data" @trigger="triggerHandler" @reset="resetHandler"></Mechanism>
		<Information :data="data"></Information>
	</div>
</template>

<style lang="scss">
.sections {
	height: 100vh;
	width: 100vw;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
	overflow-x: hidden;
	background-color: var(--color-white);
	background-image: linear-gradient(#f7f7f7 0.6000000000000001px, transparent 0.6000000000000001px), linear-gradient(to right, #f7f7f7 0.6000000000000001px, #ffffff 0.6000000000000001px);
	background-size: 12px 12px;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-track {
		border-radius: 5px;
		margin: 0.2rem 0;
		background: var(--color-white);
	}

	&::-webkit-scrollbar-thumb {
		background: var(--color-secondary);
		border-radius: 5px;
	}

	&::-webkit-scrollbar-thumb:hover {
		background: var(--color-tertiary);
	}
}

section {
	scroll-snap-align: start;

	@media (max-width: 992px) {
		scroll-snap-align: none;
	}
}
</style>