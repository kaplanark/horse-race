import { useRaceStore } from '@stores/use-race';

const raceStore = useRaceStore();

export const startRace = () => {
	raceStore.setRaceStatus('started');
	raceStore.setCountdown(true);

	const rngInterval = setInterval(() => {
		raceStore.getHorses.map(horse => {
			horse.speed = Math.floor(Math.random() * (40 - 20) + 20);
			if (!horse.finish) horse.run = true;
		});
		const allFinished = raceStore.getHorses.every(horse => horse.finish);

		if (allFinished) clearInterval(rngInterval);
	}, 3000);

	const wayInterval = setInterval(() => {
		raceStore.getHorses.map(horse => {
			if (horse.travelledDistance < raceStore.getLaneLength) {
				horse.scoreTime++;
				horse.travelledDistance += horse.speed / 4;
			} else {
				horse.finish = true;
				horse.run = false;
			}
		});
		const allFinished = raceStore.getHorses.every(horse => horse.finish);
		if (allFinished) {
			raceStore.setRaceStatus('finished');
			clearInterval(wayInterval);
		}
	}, 100);
}

