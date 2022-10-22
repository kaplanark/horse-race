import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => {
		return {
			sortingNumbers: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
			settingDrawer: false,
		};
	},
	getters: {
		getSortingNumbers(state) {
			return state.sortingNumbers;
		},
		getSettingDrawer(state) {
			return state.settingDrawer;
		}
	},
	actions: {
		setSettingDrawer(value) {
			this.settingDrawer = value;
		}
	}
});