import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Welcome",
		component: () => import("@views/Welcome.vue"),
	},
	{
		path: "/race-track",
		name: "Race Track",
		component: () => import("@views/RaceTrack.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@views/NotFound.vue"),
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;