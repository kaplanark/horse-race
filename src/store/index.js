import { createStore } from 'vuex';
import { race } from './modules/race';

const store = createStore({
	state() {
		return {
			siteName: 'Horse Racing',
			sortingNumbers: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
			settingDrawer: false,
		}
	},
	getters: {
		getSiteName(state) {
			return state.siteName;
		},
		getSortingNumbers(state) {
			return state.sortingNumbers;
		},
		getSettingDrawer(state) {
			return state.settingDrawer;
		},
	},
	mutations: {
		SET_SETTING_DRAWER(state, payload) {
			state.settingDrawer = payload;
		}
	},
	modules: {
		race
	}
});

export default store;