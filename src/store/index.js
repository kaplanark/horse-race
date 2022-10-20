import { createStore } from 'vuex';

import { race } from './modules/race';

const store = createStore({
	state() {
		return {
			siteName: 'Horse Racing',
			sortingNumbers: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
		}
	},
	modules: {
		race
	}
});

export default store;