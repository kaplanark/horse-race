<script setup>
import { computed } from 'vue';
import { useMainStore } from '@stores/use-main';
import Alert from '@components/Alert/Alert.vue';

const props = defineProps({
	position: {
		type: String,
		default: 'top-right'
	}
});

const mainStore = useMainStore();

const alerts = computed(() => mainStore.getAlerts);

const closeHandler = (index) => {
	mainStore.removeAlert(index);
};
</script>

<template>
	<div class="alert-provider" :class="'alert-provider--' + props.position">
		<template v-for="(alert, index) in alerts" :key="index">
			<Alert :variant="alert.variant" :message="alert.message" :index="index" @close="closeHandler"></Alert>
		</template>
	</div>
</template>

<style lang="scss">
.alert-provider {
	position: fixed;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	z-index: 999999;

	.alert {
		width: 100%;
	}

	&--top-right {
		top: 0;
		right: 0;
		bottom: unset;
	}

	&--top-left {
		top: 0;
		left: 0;
		bottom: unset;
	}

	&--bottom-right {
		top: unset;
		right: 0;
		bottom: 0;
	}

	&--bottom-left {
		top: unset;
		left: 0;
		bottom: 0;
	}
}
</style>