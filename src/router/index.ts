import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactMe from "@/views/ContactMe.vue";
import Gallery from "@/views/GalleryView.vue";
import GalleryView from "@/views/GalleryView.vue";

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
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "!text-yellow-500 dark:!text-yellow-500",
});

router.beforeEach((to, from, next) => {
  // Reset hover states here
  const hoveredElements = document.querySelectorAll(".hovered");
  hoveredElements.forEach((element) => {
    element.classList.remove("hovered");
  });
  next();
});

export default router;
