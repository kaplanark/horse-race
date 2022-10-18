<script setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onBeforeMount(() => {
	var screenWidth = window.innerWidth - 80;
	store.commit('setLaneLength', screenWidth);
});
</script>

<template>
	<RouterView></RouterView>
</template>
