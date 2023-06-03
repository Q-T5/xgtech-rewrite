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

    // lazy-loaded components
    {
      path: '/xgtech-rewrite/customer-reward-scheme/',
      component: () => import('../views/miscviews/CustRewardSchemeView.vue'),
      name: 'CustomerRewardScheme',
    },
    {
      path: '/xgtech-rewrite/frequently-asked-questions/',
      component: () => import('../views/miscviews/FAQView.vue'),
      name: 'FAQ',
    },
    {
      path: '/xgtech-rewrite/charity-work/',
      component: () => import('../views/miscviews/CharityWorkView.vue'),
      name: 'CharityWork',
    },
    {
      path: '/xgtech-rewrite/careers/',
      component: () => import('../views/miscviews/CareersView.vue'),
      name: 'Careers',
    },
    {
      path: '/xgtech-rewrite/customer-portal/',
      component: () => import('../views/miscviews/CustomerPortalView.vue'),
      name: 'CustomerPortal',
    },
    {
      path: '/xgtech-rewrite/policy/',
      component: () => import('../views/miscviews/PolicyView.vue'),
      name: 'Policy',
    },
  ],
});

export default router;
