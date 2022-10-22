<script setup>
import { onBeforeMount } from 'vue';
import { useRaceStore } from '@stores/use-race';

const raceStore = useRaceStore();

onBeforeMount(() => {
	var screenWidth = window.innerWidth;
	raceStore.setLaneLength(screenWidth);
});
</script>

<template>
	<RouterView></RouterView>
</template>
