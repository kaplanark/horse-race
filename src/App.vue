<script setup>
import { onBeforeMount } from 'vue';
import { useRaceStore } from '@stores/use-race';
import screenWidth from '@utils/screenWidth';

const raceStore = useRaceStore();

onBeforeMount(() => {
	raceStore.setLaneLength(screenWidth);
});
</script>

<template>
	<RouterView />
</template>
