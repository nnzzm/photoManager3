import { createApp } from 'vue'
import 'sanitize.css'
import App from './App.vue'
// import { PhotoSort } from './management.js'
import router from './components/router.js'


const app = createApp(App);
app.use(router); // ルーターを使用
app.mount('#app');

