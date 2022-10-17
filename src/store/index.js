import { createStore } from 'vuex';

import { race } from './modules/race';

const store = createStore({
	state() {
		return {
			siteName: 'Horse Racing',
			screenWidth: 0,
		}
	},
	mutations: {
		setScreenWidth(state, width) {
			state.screenWidth = width;
		}
	},
	modules: {
		race,
	}
});

export default store;