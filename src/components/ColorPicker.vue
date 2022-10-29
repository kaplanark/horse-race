<script setup>
import { computed } from 'vue';
const props = defineProps({
	name: {
		type: String,
		default: ''
	},
	value: {
		type: String,
		default: '#000000'
	},
});
const emit = defineEmits(['update:value']);

const inputHandler = (e) => emit('update:value', e.target.value);

const color = computed(() => {
	return props.value || '#000000';
});

</script>

<template>
	<div class="color-picker" :id="props.name">
		<label for="color" class="color-picker__wrapper" :style="{ '--color-select': props.value }">
			<input type="color" class="color-picker__input" name="color" id="color" :value="color" @input="inputHandler">
			<div class="color-picker__content">{{ color }}</div>
		</label>
	</div>
</template>

<style lang="scss">
.color-picker {
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		cursor: pointer;
	}

	&__input {
		border: 0;
		outline: 0;
		background-color: transparent;
		width: 24px;
		height: 24px;
	}

	&__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>