import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createHead } from "@vueuse/head";

require("@/assets/CSS/style.css");

const head = createHead();

createApp(App).use(head).use(router).mount("#app");
