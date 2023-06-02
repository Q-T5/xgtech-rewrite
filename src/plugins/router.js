import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GamesView from '../views/GamesView.vue';
import ProductsView from '../views/ProductsView.vue';
import ServicesView from '../views/ServicesView.vue';
import ContactUsView from '../views/ContactUsView.vue';
import AboutUsView from '../views/AboutUsView.vue';
import GamingComputersView from '../views/GamingComputersView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/xgtech-rewrite/',
      component: HomeView,
      name: 'HomeView',
    },
    {
      path: '/xgtech-rewrite/gaming-computers/',
      component: GamingComputersView,
      name: 'GamingComputersView',
    },
    {
      path: '/xgtech-rewrite/games/',
      component: GamesView,
      name: 'GamesView',
    },
    {
      path: '/xgtech-rewrite/products/',
      component: ProductsView,
      name: 'ProductsView',
    },
    {
      path: '/xgtech-rewrite/services/',
      component: ServicesView,
      name: 'ServicesView',
    },
    {
      path: '/xgtech-rewrite/contact-us/',
      component: ContactUsView,
      name: 'ContactView',
    },
    {
      path: '/xgtech-rewrite/about-us/',
      component: AboutUsView,
      name: 'AboutUsView',
    },
  ],
});

export default router;
