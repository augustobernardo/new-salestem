import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

createApp(App).use(router)
.use(createPinia())
.component('EasyDataTable', Vue3EasyDataTable).mount('#app')
