<script setup>
import { onBeforeMount } from 'vue';
import { useRaceStore } from '@stores/use-race';
import { useMainStore } from '@stores/use-main';
import screenWidth from '@utils/screenWidth';
import calcCardinalNums from '@utils/calcCardinalNums';
import AlertProvider from '@components/Alert/AlertProvider.vue';

const raceStore = useRaceStore();
const mainStore = useMainStore();

onBeforeMount(() => {
	raceStore.setLaneLength(screenWidth); // calculating the width of the screen for lane length
	const numberOfHorses = raceStore.getHorses.length; // getting the number of horses
	const cardinalNumbers = calcCardinalNums(numberOfHorses); // calculating the cardinal numbers
	mainStore.setCardinalNumbers(cardinalNumbers); // set the cardinal numbers to the main store
});
</script>

<template>
	<RouterView />
	<Teleport to="body">
		<AlertProvider position="bottom-right" />
	</Teleport>
</template>
