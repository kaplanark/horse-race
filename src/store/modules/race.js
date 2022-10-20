export const race = {
	namespace: true,
	state() {
		return {
			raceStatus: 'ready', // ready, running, finished
			laneLength: 0,
			horses: [
				{
					lane: 1,
					name: 'Tucker',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#3b302f',
					run: false,
				},
				{
					lane: 2,
					name: 'Dakota',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#a97452',
					run: false,
				},
				{
					lane: 3,
					name: 'Cash',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#613f24',
					run: false,
				},
				{
					lane: 4,
					name: 'Cisco',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#c9b89f',
					run: false,
				},
				{
					lane: 5,
					name: 'Whiskey',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#b6b6b6',
					run: false,
				},
				{
					lane: 6,
					name: 'Beige',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#d09761',
					run: false,
				},
				{
					lane: 7,
					name: 'Molly',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#cc784c',
					run: false,
				},
				{
					lane: 8,
					name: 'Ranger',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					scoreTime: 0,
					color: '#826256',
					run: false,
				}
			]
		}
	},
	getters: {
		getHorses(state) {
			return state.horses;
		},
		getRaceStatus(state) {
			return state.raceStatus;
		}
	},
	mutations: {
		setLaneLength(state, length) {
			state.laneLength = length;
		},
		setRaceStatus(state, status) {
			state.raceStatus = status;
		},
		setResetRace(state) {
			state.horses.map(horse => {
				horse.travelledDistance = 0;
				horse.speed = 0;
				horse.finish = false;
				horse.scoreTime = 0;
				horse.run = false;
			});
		}
	},
	actions: {
		startRace(context) {
			context.commit('setRaceStatus', 'running');
			const rngInterval = setInterval(() => {
				context.state.horses.map(horse => {
					horse.speed = Math.floor(Math.random() * (40 - 20) + 20);

					if (!horse.finish) horse.run = true;
				});
				const allFinished = context.state.horses.every(horse => horse.finish);

				if (allFinished) clearInterval(rngInterval);
			}, 3000);

			const wayInterval = setInterval(() => {
				context.state.horses.map(horse => {
					if (horse.travelledDistance < context.state.laneLength) {
						horse.scoreTime++;
						horse.travelledDistance += horse.speed / 4;
					} else {
						horse.finish = true;
						horse.run = false;
					}
				});
				const allFinished = context.state.horses.every(horse => horse.finish);
				if (allFinished) {
					context.commit('setRaceStatus', 'finished');
					clearInterval(wayInterval);
				}
			}, 100);
		},
		async resetRace(context) {
			await context.commit('setRaceStatus', 'ready');
			await context.commit('setResetRace');
		}
	}
};