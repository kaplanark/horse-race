import { defineStore } from 'pinia';

export const useRaceStore = defineStore('race', {
	state: () => {
		return {
			raceStatus: 'ready', // ready, started, finished
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
		getRaceStatus: (state) => state.raceStatus,
		getCountdown: (state) => state.countdown,
		getLaneLength: (state) => state.laneLength,
		getHorses: (state) => state.horses,
		getHorseScoreRanking: (state) => {
			return [...state.horses].sort((a, b) => (b.travelledDistance / b.scoreTime) - (a.travelledDistance / a.scoreTime));
		}
	},
	actions: {
		setRaceStatus(status) {
			this.raceStatus = status;
		},
		setCountdown(countdown) {
			this.countdown = countdown;
			const timer = setTimeout(() => {
				this.countdown = false;
				clearTimeout(timer);
			}, 3000);
		},
		setLaneLength(laneLength) {
			this.laneLength = laneLength;
		},
		resetRace() {
			this.raceStatus = 'ready';
			this.countdown = false;
			this.horses.map((horse) => {
				horse.travelledDistance = 0;
				horse.speed = 0;
				horse.finish = false;
				horse.scoreTime = 0;
				horse.run = false;
			});
		}
	}
})