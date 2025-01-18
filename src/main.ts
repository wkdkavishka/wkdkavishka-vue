import { createApp } from "vue";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { createHead } from "@vueuse/head";

require("@/assets/CSS/style.css");

const head = createHead();

createApp(App)
  .use(head)
  .use(router)
  .use(VueLazyload, {
    preLoad: 1.3,
    error: "./img/icons/Images/error.gif",
    loading: "./img/Images/loading.gif",
    attempt: 1,
  })
  .mount("#app");
