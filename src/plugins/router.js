import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GamesView from "../views/GamesView.vue";
import ProductsView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactUsView from "../views/ContactUsView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/xgtech-rewrite/",
			component: HomeView,
			name: "HomeView",
		},
		{
			path: "/xgtech-rewrite/games/",
			component: GamesView,
			name: "GamesView",
		},
		{
			path: "/xgtech-rewrite/products/",
			component: ProductsView,
			name: "ProductsView",
		},
		{
			path: "/xgtech-rewrite/services/",
			component: ServicesView,
			name: "ServicesView",
		},
		{
			path: "/xgtech-rewrite/contact-us/",
			component: ContactUsView,
			name: "ContactView",
		},
	],
});

export default router;
