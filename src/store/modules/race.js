export const race = {
	namespace: true,
	state() {
		return {
			sortingNumbers: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
			laneLength: 0
		}
	},
	mutations: {
		setLaneLength(state, length) {
			state.laneLength = length;
		}
	},
};