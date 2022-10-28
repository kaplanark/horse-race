<script setup>
import { computed } from 'vue';
import i18n from "@locales";
import { useRouter } from "vue-router";

const router = useRouter();

const languages = computed(() => i18n.global.availableLocales);
const locale = computed(() => i18n.global.locale.value);

const clickHandler = (lang) => {
	i18n.global.locale.value = lang;
	localStorage.setItem('locale', lang);
	router.push({
		params: {
			locale: lang
		}
	});
};
</script>

<template>
	<div class="lang-switch">
		<div class="lang-switch__item" :class="{ 'lang-switch__item--active': locale === language }"
			v-for="language in languages" :key="language" @click="clickHandler(language)">
			{{ language }}
		</div>
	</div>
</template>

<style lang="scss">
.lang-switch {
	display: flex;
	align-items: center;
	justify-content: center;

	&__item {
		cursor: pointer;
		text-transform: uppercase;
		font-size: 14px;
		line-height: 1;
		padding: 2px 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-solid);
		position: relative;

		&--active {
			color: var(--color-primary);

			&::before {
				content: '';
				position: absolute;
				bottom: -2px;
				left: 50%;
				transform: translateX(-50%);
				width: 2px;
				height: 2px;
				background-color: var(--color-primary);
				border-radius: 50%;
			}
		}
	}
}
</style>