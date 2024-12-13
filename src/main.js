import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import '@/axios.js';

createApp(App).use(router).mount('#app')
