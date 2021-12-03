import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
// import 'expose-loader?$!expose-loader?jQuery!jquery'
// import jQuery from 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
