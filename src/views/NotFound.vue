<template>
	<div class="not-found">
		<div class="not-found__content">
			<div class="error">
				<div class="error__title">404</div>
				<div class="error__name">Page not found</div>
				<div class="error__text">The page you are looking for might have been removed, had its name changed, or is
					temporarily unavailable.
				</div>
				<router-link to="/" class="error__button">Go to welcome</router-link>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.not-found {
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url('@assets/images/bg-mountain.webp');
	background-repeat: no-repeat;
	background-position: top;
	background-size: contain;

	&__content {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}

.error {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 16px;
	position: relative;
	padding: 0 24px;

	&::before {
		position: absolute;
		content: '';
		width: 320px;
		height: 320px;
		top: 0;
		left: 50%;
		transform: translate(-50%, -30%);
		background-color: #fff;
		border-radius: 50%;
		z-index: 1;
	}

	&>* {
		position: relative;
		z-index: 2;
	}

	&__title {
		font-size: 128px;
		font-family: var(--font-secondary);
		color: #223354;
		margin-bottom: 64px;
		font-weight: 600;
	}

	&__name {
		font-size: 28px;
		color: #223354;
		line-height: normal;
	}

	&__text {
		font-size: 16px;
		color: #223354;
		max-width: 75%;
		text-align: center;
	}

	&__button {
		font-size: 16px;
		color: #223354;
		text-decoration: underline;
	}
}
</style>