import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactMe from "@/views/ContactMeView.vue";
import GalleryView from "@/views/GalleryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
      description:
        "Welcome to WKDKavishka's Portfolio - Full Stack Developer showcasing web development expertise",
      keywords: "Home, Portfolio, Full Stack Developer, Web Development",
    },
  },
  {
    path: "/contactme",
    name: "contactme",
    component: ContactMe,
    meta: {
      title: "Contact Me",
      description:
        "Get in touch with WKDKavishka - Full Stack Developer for collaboration and opportunities",
      keywords: "Contact, Full Stack Developer, Hire Developer, Collaboration",
    },
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
    meta: {
      title: "Gallery",
      description:
        "Explore WKDKavishka's project gallery - Showcasing web development projects and achievements",
      keywords: "Gallery, Projects, Portfolio, Web Development, Full Stack",
    },
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

  // Update meta tags for each route
  if (to.meta.title) {
    document.title = `${to.meta.title} | WKDKavishka`;
  }

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute("content", to.meta.description as string);
  }

  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && to.meta.keywords) {
    metaKeywords.setAttribute("content", to.meta.keywords as string);
  }

  next();
});

export default router;
