import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css';
import SideMenu from './views/SideMenu.vue'
import Calculator from './components/Calculator.vue'

const app = createApp(App)
app.use(router)
app.component('side-menu', SideMenu);
app.component('calculator', Calculator);
app.mount("#app")