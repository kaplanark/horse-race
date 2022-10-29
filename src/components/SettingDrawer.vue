<script setup>
import { ref, computed } from 'vue';
import { useRaceStore } from '@stores/use-race';

import LanguageSwitcher from '@components/LanguageSwitcher.vue';
import BaseButton from '@components/Button/BaseButton.vue';
import BaseSelect from '@components/Select/BaseSelect.vue';
import ColorPicker from '@components/ColorPicker.vue';

const props = defineProps({
	open: {
		type: Boolean,
		defult: false
	}
});
const emit = defineEmits(['update:open']);

const raceStore = useRaceStore();

const horseNames = computed(() => {
	return raceStore.getHorses.map((horse) => horse.name);
});
const selectHorse = ref('');
const selectColor = ref('');

const updateHandler = () => {
	if (selectHorse.value && selectColor.value) {
		raceStore.updateHorse({ name: selectHorse.value, color: selectColor.value });
		emit('update:open', false);
	}
};
const closeHandler = () => emit('update:open', false);
</script>

<template>
	<div class="drawer" v-if="props.open">
		<div class="drawer__overlay" @click="closeHandler"></div>
		<div class="drawer__content">
			<div class="drawer__content-header">
			</div>
			<div class="drawer__content-body">
				<div class="input-group">
					<label for="select_horse" class="font-size-sm text-solid">{{ $t('labels.name') }}</label>
					<BaseSelect name="select_horse" :options="horseNames" v-model:value="selectHorse"
						:placeholder="$t('select_horse')">
					</BaseSelect>
				</div>
				<div class="input-group">
					<label for="select_color" class="font-size-sm text-solid">{{ $t('labels.color') }}</label>
					<ColorPicker name="select_color" v-model:value="selectColor"></ColorPicker>
				</div>
			</div>
			<div class="drawer__content-footer">
				<div class="btn-group">
					<BaseButton :name="$t('close')" @click="closeHandler"></BaseButton>
					<BaseButton :name="$t('update')" @click="updateHandler"></BaseButton>
				</div>
				<div class="btn-group">
					<label class="font-size-sm text-solid">{{ $t('labels.lang') }}</label>
					<LanguageSwitcher></LanguageSwitcher>
				</div>
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
		background-color: var(--color-white);
		display: flex;
		flex-direction: column;

		&-body {
			flex: 1;
			padding: 16px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 16px;

			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr;
			}
		}

		&-footer {
			padding: 16px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
}
</style>