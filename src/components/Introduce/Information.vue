<script setup>
</script>

<template>
	<section class="information">
		<div class="column">
			<h3>Luck Factor (40-20px/sec)</h3>
			<small>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi accusamus numquam, similique minus
				deserunt officiis est, veritatis aperiam blanditiis, adipisci magni? Quas inventore suscipit eius provident
				temporibus veniam reprehenderit.
			</small>
		</div>
		<div class="column">
			<img src="../../assets/images/speed-interval-function-img.webp" alt="">
		</div>
		<div class="column">
			<img src="../../assets/images/travelled-distance-function-img.webp" alt="">
		</div>
		<div class="column text-start">
			<h3>Distance Traveled and Other Calculations</h3>
			<small>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi accusamus numquam, similique minus
				deserunt officiis est, veritatis aperiam blanditiis, adipisci magni? Quas inventore suscipit eius provident
				temporibus veniam reprehenderit.
				<ul>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
				</ul>
			</small>
		</div>
	</section>
</template>

<style lang="scss">
.information {
	height: 100vh;
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	grid-gap: 24px;
	padding: 24px;

	.column {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: end;

		&>* {
			width: 100%;
			text-align: end;
		}

		img {
			max-width: 600px;
			border-radius: 6px;
		}

		&.text-start {
			&>* {
				text-align: start;
			}
		}
	}
}
</style>