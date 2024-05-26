import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactMe from "@/views/ContactMe.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contactme",
    name: "contactme",
    component: ContactMe,
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
