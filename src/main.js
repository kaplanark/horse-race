import { createApp } from 'vue';
import './main.scss';
import App from './App.vue';
import store from './store/index';
import router from './router/index';


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');