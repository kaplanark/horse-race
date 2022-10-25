import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
	state: () => {
		return {
			cardinalNumbers: [],
		};
	},
	getters: {
		getCardinalNumbers: (state) => state.cardinalNumbers,
	},
	actions: {
		setCardinalNumbers(payload) {
			this.cardinalNumbers = payload;
		}
	},
});