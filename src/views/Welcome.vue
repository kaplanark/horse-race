<script setup>
import { useRouter } from 'vue-router';
import Button from '@components/Button/Button.vue';

const router = useRouter();

const clickHandler = () => {
	router.push('/race-track');
};
</script>

<template>
	<div class="welcome">
		<div class="welcome__content">
			<h1>Horse Racing</h1>
			<Button name="Get Started" variant="primary" @click="clickHandler"></Button>
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
	background-image: url('@assets/images/mountain.png');
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
			color: #223354;
		}
	}

	&__footer {
		padding: 64px 0;
		display: flex;
		justify-content: center;
		align-items: center;

		a {
			color: #223354;
			text-decoration: none;
			font-size: 12px;
		}
	}
}
</style>
