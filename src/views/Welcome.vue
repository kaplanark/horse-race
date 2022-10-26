<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import BaseButton from '@components/Button/BaseButton.vue';
import Loader from '@components/Loader/Loader.vue';

const router = useRouter();
const isLoaderStatus = ref(false);

const clickHandler = (route) => {
	isLoaderStatus.value ? isLoaderStatus.value = false : isLoaderStatus.value = true;
	const loaderTimer = setTimeout(() => { // set a timeout for the loader
		isLoaderStatus.value = false;
		router.push(route);
		clearTimeout(loaderTimer);
	}, 2000);
	return;
};
</script>

<template>
	<div class="welcome">
		<div class="welcome__content">
			<Loader :status="isLoaderStatus"></Loader>
			<h1>Horse Race</h1>
			<div class="btn-group">
				<BaseButton name="Get Started" variant="primary" @click="clickHandler('/race-track')"></BaseButton>
				<BaseButton name="Introduce" variant="secondary" @click="clickHandler('/introduce')"></BaseButton>
			</div>
		</div>
		<div class="welcome__footer">
			<a href="https://github.com/kaplanark" target="_blank">github/kaplanark</a>
		</div>
	</div>
</template>

<style lang="scss">
.welcome {
	height: 100vh;
	width: 100vw;
	max-height: 100vh;
	max-width: 100vw;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	background-image: url('@assets/images/bg-mountain.webp');
	background-repeat: no-repeat;
	background-position: top;
	background-size: contain;

	&__content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		gap: 64px;

		h1 {
			font-size: 96px;
			font-family: 'Dancing Script', cursive;
			color: var(--color-primary);
		}
	}

	&__footer {
		padding: 64px 0;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			color: var(--color-primary);
			text-decoration: none;
			font-size: 12px;
		}
	}

	@media screen and (max-width: 768px) {
		background-repeat: no-repeat;

		&__content {
			justify-content: center;

			h1 {
				font-size: 64px;
			}
		}
	}
}
</style>
