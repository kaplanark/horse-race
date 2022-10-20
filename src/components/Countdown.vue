<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();

const show = computed(() => store.getters.getCountdown);
</script>

<template>
	<div class="countdown" v-if="show">
		<div class="countdown__overlay"></div>
		<div class="countdown__content">
			<img src="@assets/images/countdown.gif" alt="">
		</div>
	</div>
</template>

<style lang="scss">
.countdown {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;

	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	&__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		overflow: hidden;
	}
}
</style>