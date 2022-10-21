<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onBeforeMount(() => {
	var screenWidth = window.innerWidth;
	store.commit('SET_LANE_LENGTH', screenWidth);
});
</script>

<template>
	<RouterView></RouterView>
</template>
