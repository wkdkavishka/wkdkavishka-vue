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

const viewType = ref("");

const updateViewType = () => {
  viewType.value = window.innerWidth < 768 ? "mobile" : "desktop";
};

onMounted(() => {
  updateViewType();
  window.addEventListener("resize", updateViewType);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateViewType);
});

// Provide the `viewType` for child components
provide("viewType", viewType);

// SEO Optimization
useHead({
  // Default title template
  title: "Software Developer",
  titleTemplate: "WKDKavishka | %s",

  // Meta tags
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "WKDKavishka - Software Developer Portfolio showcasing web development projects and skills",
    },
    {
      name: "keywords",
      content:
        "Software Developer, Web Development, Vue.js, JavaScript, TypeScript, Portfolio",
    },
    { name: "author", content: "WKDKavishka" },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://wkdkavishka.com/" },
    { property: "og:title", content: "WKDKavishka - Software Developer" },
    {
      property: "og:description",
      content:
        "Software Developer Portfolio showcasing web development projects and skills",
    },
    { property: "og:image", content: "/img/og-image.jpg" },

    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://wkdkavishka.com/" },
    { name: "twitter:title", content: "WKDKavishka - Software Developer" },
    {
      name: "twitter:description",
      content:
        "Software Developer Portfolio showcasing web development projects and skills",
    },
    { name: "twitter:image", content: "/img/og-image.jpg" },

    // Additional SEO tags
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
    { name: "revisit-after", content: "7 days" },
    { name: "theme-color", content: "#134E4A" },
  ],

  // Link tags
  link: [
    { rel: "icon", type: "image/png", href: "/img/icons/favicon-32x32.png" },
    { rel: "apple-touch-icon", href: "/img/icons/apple-touch-icon.png" },
    { rel: "canonical", href: "https://wkdkavishka.com/" },
  ],
});
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
