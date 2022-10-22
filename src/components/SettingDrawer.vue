<script setup>
import { computed } from 'vue';
import { useMainStore } from '@stores/use-main';

const mainStore = useMainStore();

const closeHandler = () => mainStore.setSettingDrawer(false);

const show = computed(() => mainStore.getSettingDrawer);

</script>

<template>
	<div class="drawer" v-if="show">
		<div class="drawer__overlay" @click="closeHandler"></div>
		<div class="drawer__content">
			<div class="drawer__content-header">

			</div>
			<div class="drawer__content-body">

			</div>
			<div class="drawer__content-footer">

			</div>
		</div>
	</div>
</template>

<style lang="scss">
.drawer {
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
		background-color: rgba(0, 0, 0, 0.689);
	}

	&__content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
		max-height: 400px;
		background-color: var(--color-white);
	}
}
</style>