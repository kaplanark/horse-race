export const race = {
	namespace: true,
	state() {
		return {
			raceStatus: 'ready', // ready, running, finished
			sortingNumbers: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
			laneLength: 0,
			horses: [
				{
					id: 1,
					name: 'Tucker',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#3b302f',
					run: false,
				},
				{
					id: 2,
					name: 'Dakota',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#a97452',
					run: false,
				},
				{
					id: 3,
					name: 'Cash',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#613f24',
					run: false,
				},
				{
					id: 4,
					name: 'Cisco',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#c9b89f',
					run: false,
				},
				{
					id: 5,
					name: 'Whiskey',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#b6b6b6',
					run: false,
				},
				{
					id: 6,
					name: 'Beige',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#d09761',
					run: false,
				},
				{
					id: 7,
					name: 'Molly',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#cc784c',
					run: false,
				},
				{
					id: 8,
					name: 'Ranger',
					travelledDistance: 0,
					speed: 0,
					finish: false,
					score: 0,
					scoreTime: 0,
					color: '#826256',
					run: false,
				}
			]
		}
	},
	mutations: {
		setLaneLength(state, length) {
			state.laneLength = length + 80;
		},
		setRaceStatus(state, status) {
			state.raceStatus = status;
		}
	},
	actions: {
		startRace(context) {
			context.commit('setRaceStatus', 'running');
			setInterval(() => {
				context.state.horses.map(horse => {
					horse.speed = Math.floor(Math.random() * (40 - 20) + 20);
					horse.run = true;
				});
			}, 3000);
			setInterval(() => {
				context.state.horses.map(horse => {
					if (horse.travelledDistance < context.state.laneLength) {
						horse.scoreTime++;
						horse.travelledDistance += horse.speed / 3;
					} else {
						horse.finish = true;
						horse.run = false;
					}
				});
			}, 100);
		}
	}
};