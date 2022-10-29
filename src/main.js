import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './main.scss';
import App from './App.vue';
import router from '@router';
import i18n from '@locales';


const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);
app.mount('#app');