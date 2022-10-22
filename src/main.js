import { createApp } from 'vue';
import { createPinia } from 'pinia'
import './main.scss';
import App from './App.vue';
import router from './router/index';


const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.mount('#app');