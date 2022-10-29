<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
	name: {
		type: String,
		default: ''
	},
	options: {
		type: Array,
		default: []
	},
	value: {
		type: String,
		default: ''
	},
	placeholder: {
		type: String,
		default: ''
	}
});
const emit = defineEmits(['update:value']);

const show = ref(false);

const text = computed(() => {
	return props.value || props.placeholder;
});

const selectHandler = (value) => {
	emit('update:value', value);
	show.value = false;
};
</script>

<template>
	<div class="select" :id="props.name">
		<div class="select__input" @click="show = !show">
			<span class="select__input-text">{{ text }}</span>
			<svg class="select__input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M7 10l5 5 5-5z"></path>
			</svg>
		</div>
		<div class="select__options" v-if="show">
			<div class="select__options-item" v-for="option in props.options" :key="option" @click="selectHandler(option)">
				{{ option }}
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.select {
	position: relative;

	&__input {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 16px;
		border: 1px solid var(--color-solid);
		border-radius: 4px;
		cursor: pointer;

		&-text {
			color: var(--color-primary);
		}

		&-icon {
			width: 16px;
			height: 16px;
			fill: var(--color-secondary);
		}
	}

	&__options {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background-color: var(--color-white);
		border: 1px solid var(--color-solid);
		border-radius: 4px;
		z-index: 9;

		&-item {
			padding: 8px 16px;
			cursor: pointer;
			color: var(--color-secondary);

			&:hover {
				background-color: #f2f2f2;
			}
		}
	}
}
</style>