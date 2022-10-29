import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => {
		return {
			cardinalNumbers: [],
			alerts: [],
		};
	},
	getters: {
		getCardinalNumbers: (state) => state.cardinalNumbers,
		getAlerts: (state) => state.alerts,
	},
	actions: {
		setCardinalNumbers(payload) {
			this.cardinalNumbers = payload;
		},
		addAlert(payload) {
			this.alerts.push(payload);
		},
		removeAlert(index) {
			this.alerts.splice(index, 1);
		}
	},
});