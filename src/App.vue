<script setup>
import { onBeforeMount } from 'vue';
import { useRaceStore } from '@stores/use-race';
import { useMainStore } from '@stores/use-main';
import screenWidth from '@utils/screenWidth';
import calcCardinalNums from '@utils/calcCardinalNums';

const raceStore = useRaceStore();
const mainStore = useMainStore();

onBeforeMount(() => {
	raceStore.setLaneLength(screenWidth);
	const numberOfHorses = raceStore.getHorses.length;
	const cardinalNumbers = calcCardinalNums(numberOfHorses);
	mainStore.setCardinalNumbers(cardinalNumbers);
});
</script>

<template>
	<RouterView />
</template>
