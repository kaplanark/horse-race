import { createRouter, createWebHistory } from "vue-router";

import Welcome from '@views/Welcome.vue';
import RaceTrack from '@views/RaceTrack.vue';
import Introduce from '@views/Introduce.vue';
import NotFound from '@views/NotFound.vue';

const routes = [
	{
		path: "/",
		name: "Welcome",
		component: Welcome
	},
	{
		path: "/race-track",
		name: "RaceTrack",
		component: RaceTrack
	},
	{
		path: "/introduce",
		name: "Introduce",
		component: Introduce,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;