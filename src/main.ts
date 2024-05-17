import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

require("@/assets/CSS/style.css");

// globle variables

createApp(App).use(router).mount("#app");
