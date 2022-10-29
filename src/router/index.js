import { createRouter, createWebHistory } from "vue-router";
import i18n from "@locales";

import Welcome from '@views/Welcome.vue';
import RaceTrack from '@views/RaceTrack.vue';
import Introduce from '@views/Introduce.vue';
import NotFound from '@views/NotFound.vue';

const locale = i18n.global.locale.value; // Get current locale
const locales = i18n.global.availableLocales; // Get all available locales

const routes = [
	{
		path: '/',
		redirec: `/${locale}`,
	},
	{
		path: '/:locale',
		children: [
			{
				path: "",
				name: "Welcome",
				component: Welcome
			},
			{
				path: "race-track",
				name: "RaceTrack",
				component: RaceTrack
			},
			{
				path: "introduce",
				name: "Introduce",
				component: Introduce,
			},
			{
				path: ":pathMatch(.*)*",
				name: "NotFound",
				component: NotFound
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	const paramsLocale = to.params.locale; // Get locale from params
	if (!locales.includes(paramsLocale)) { // If locale is not in the locales, redirect to /en or /tr
		return next('/' + locale);
	}
	if (i18n.global.locale.value !== paramsLocale) { // If locale is not equal to current locale, change locale
		i18n.global.locale.value = paramsLocale; // Change locale
	}
	return next();
});

export default router;