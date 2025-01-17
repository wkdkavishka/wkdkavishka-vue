<template>
  <div
    class="bg-slate-200 dark:bg-custom-dark"
    @ionViewWillEnter="resetHoverState"
  >
    <NavBar class="fixed top-0 w-full z-50" />
    <!-- to fix nav-bar covering the router-view  -->
    <div class="pt-64"></div>
    <div class="pt-4"></div>
    <!--    <div class="pt-64"> test  </div>-->
    <router-view v-slot="{ Component, route }">
      <transition mode="out-in" name="fade">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from "./components/MainUse/NavBar.vue";
import FooterBar from "./components/MainUse/FooterBar.vue";
import { useHead } from "@vueuse/head";
import { ref, onMounted, onBeforeUnmount, provide } from "vue";
import { useDark } from "@vueuse/core";

const viewType = ref("");
const isDark = useDark();

const updateViewType = () => {
  viewType.value = window.innerWidth < 768 ? "mobile" : "desktop";
};

onMounted(() => {
  isDark.value = false;
  updateViewType();
  window.addEventListener("resize", updateViewType);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateViewType);
});

// Provide the `viewType` for child components
provide("viewType", viewType);

// // SEO Optimization
// useHead({
//   // Default title template
//   title: "Software Developer",
//   titleTemplate: "WKDKavishka | %s",

//   // Meta tags
//   meta: [
//     { charset: "utf-8" },
//     { content: "IE=edge", httpEquiv: "X-UA-Compatible" },
//     { content: "width=device-width, initial-scale=1.0", name: "viewport" },
//     { name: "author", content: "W.K.D.Kavishka" },
//     {
//       name: "keywords",
//       content:
//         "Software Engineer, University of Colombo, Technology, Learning Software Developer, Web Development, Vue.js, JavaScript, TypeScript, Portfolio",
//     },
//     { httpEquiv: "Cache-Control", content: "no-store" },
//     {
//       name: "description",
//       content:
//         "WKDKavishka - Software Developer Portfolio showcasing web development projects and skills",
//     },
//     { name: "author", content: "WKDKavishka" },

//     // Open Graph / Facebook
//     { property: "og:type", content: "website" },
//     { property: "og:url", content: "https://wkdkavishka.com/" },
//     { property: "og:title", content: "WKDKavishka - Software Developer" },
//     {
//       property: "og:description",
//       content:
//         "Software Developer Portfolio showcasing web development projects and skills",
//     },
//     { property: "og:image", content: "/img/icons/Images/wkdk-logo.jpg" },

//     // Twitter
//     { name: "twitter:card", content: "summary_large_image" },
//     { name: "twitter:url", content: "https://wkdkavishka.com/" },
//     { name: "twitter:title", content: "WKDKavishka - Software Developer" },
//     {
//       name: "twitter:description",
//       content:
//         "Software Developer Portfolio showcasing web development projects and skills",
//     },
//     { name: "twitter:image", content: "/img/icons/Images/wkdk-logo.jpg" },

//     // Additional SEO tags
//     { name: "robots", content: "index, follow" },
//     { name: "language", content: "English" },
//     { name: "revisit-after", content: "7 days" },
//     { name: "theme-color", content: "#134E4A" },
//   ],

//   // Link tags
//   link: [
//     // Favicons
//     // {
//     //   rel: "icon",
//     //   type: "image/png",
//     //   href: "./img/icons/favicon-16x16.png",
//     //   sizes: "16x16",
//     // },
//     // {
//     //   rel: "icon",
//     //   type: "image/png",
//     //   href: "./img/icons/favicon-32x32.png",
//     //   sizes: "32x32",
//     // },
//     // {
//     //   rel: "icon",
//     //   type: "image/png",
//     //   href: "./img/icons/favicon-96x96.png",
//     //   sizes: "96x96",
//     // },
//     // { rel: "icon", type: "image/svg+xml", href: "./img/icons/favicon.svg" },
//     // {
//     //   rel: "apple-touch-icon",
//     //   sizes: "60x60",
//     //   href: "./img/icons/apple-touch-icon-60x60.png",
//     // },
//     // {
//     //   rel: "apple-touch-icon",
//     //   sizes: "76x76",
//     //   href: "./img/icons/apple-touch-icon-76x76.png",
//     // },
//     // {
//     //   rel: "apple-touch-icon",
//     //   sizes: "120x120",
//     //   href: "./img/icons/apple-touch-icon-120x120.png",
//     // },
//     // {
//     //   rel: "apple-touch-icon",
//     //   sizes: "152x152",
//     //   href: "./img/icons/apple-touch-icon-152x152.png",
//     // },
//     // {
//     //   rel: "apple-touch-icon",
//     //   sizes: "180x180",
//     //   href: "./img/icons/apple-touch-icon-180x180.png",
//     // },
//     // { rel: "apple-touch-icon", href: "./img/icons/apple-touch-icon.png" },
//     { rel: "manifest", href: "./manifest.json" },
//     { rel: "canonical", href: "https://wkdkavishka.github.io/" },
//   ],
// });
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
