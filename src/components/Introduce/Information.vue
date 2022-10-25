<template>
	<section class="information">
		<div class="column">
			<h3>Luck Factor (40-20px/sec)</h3>
			<small>
				The luck factor is determined in the range of 20px/sec - 40px/sec and this is repeated every second until
				the total path is finished.
				<ul>
					<li><i>A random chance factor is assigned in the range of 40px/sec - 20px/sec</i></li>
					<li><i>Horse 'run' value is set to 'true'</i></li>
					<li><i>It is repeated every second until all horses' 'finish' value is 'true'.</i></li>
				</ul>
			</small>
		</div>
		<div class="column">
			<img src="@assets/images/speed-interval-function-img.webp" alt="">
		</div>
		<div class="column">
			<img src="@assets/images/travelled-distance-function-img.webp" alt="">
		</div>
		<div class="column text-start">
			<h3>Distance Traveled and Other Calculations</h3>
			<small>
				In this method, the score time and distance traveled are calculated until the total distance is taken for
				all horses.
				<ul>
					<li>
						<strong>For every horse, if the distance traveled is less than the total distance,</strong>
						<ul>
							<li><i>One is added to the 'score time' value.</i></li>
							<li><i>The distance traveled is summed up with the speed value.</i></li>
						</ul>
						<strong>For each horse, if the distance traveled is greater than the total distance,</strong>
						<ul>
							<li><i>'finish' value is set to 'true'.</i></li>
							<li><i>'run' value is set to 'false'.</i></li>
						</ul>
						<strong>And this cycle repeats every 100 milliseconds until all horses reach the finish.</strong>
					</li>
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

	@media (max-width: 992px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
		height: 100%;

		.column {
			&>* {
				text-align: center;
			}

			&.text-start {
				&>* {
					text-align: center;
				}
			}
		}
	}
}
</style>