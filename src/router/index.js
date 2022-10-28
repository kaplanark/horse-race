import { createRouter, createWebHistory } from "vue-router";
import i18n from "@locales";

import Welcome from '@views/Welcome.vue';
import RaceTrack from '@views/RaceTrack.vue';
import Introduce from '@views/Introduce.vue';
import NotFound from '@views/NotFound.vue';

const locale = i18n.global.locale.value;
const locales = i18n.global.availableLocales;

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
	const paramsLocale = to.params.locale;
	if (!locales.includes(paramsLocale)) {
		return next('/' + locale);
	}
	if (i18n.global.locale.value !== paramsLocale) {
		i18n.global.locale.value = paramsLocale;
	}
	return next();
});

export default router;