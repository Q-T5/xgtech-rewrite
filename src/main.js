import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { createPinia } from 'pinia';
import router from './plugins/router';

const pinia = createPinia();

createApp(App).use(vuetify).use(pinia).use(router).mount('#app');
