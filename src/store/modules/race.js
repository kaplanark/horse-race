export const race = {
	namespace: true,
	state() {
		return {
			raceStatus: 'ready', // ready, running, finished
			countdown: false,
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
		},
		getCountdown(state) {
			return state.countdown;
		}
	},
	mutations: {
		SET_LANE_LENGTH(state, length) {
			state.laneLength = length;
		},
		SET_RACE_STATUS(state, status) {
			state.raceStatus = status;
		},
		SET_COUNTDOWN(state, value) {
			state.countdown = value;
			setTimeout(() => {
				state.countdown = false;
			}, 3000);
		},
		SET_RESET_RACE(state) {
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
		async resetRace(context) {
			await context.commit('SET_RACE_STATUS', 'ready');
			await context.commit('SET_RESET_RACE');
			await context.commit('SET_COUNTDOWN', false);
		}
	}
};