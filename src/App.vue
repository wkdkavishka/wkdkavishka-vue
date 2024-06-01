<template>
  <div
    class="bg-slate-200 dark:bg-custom-dark"
    @ionViewWillEnter="resetHoverState"
  >
    <NavBar class="fixed top-0 w-full z-50" />
    <!-- to fix nav-bar covering the router-view  -->
    <div class="pt-64"></div>
    <div class="pt-4"></div>
    <div class="pt-64"></div>
    <!--    <page-carousel list="" />-->
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from "./components/MainUse/NavBar.vue";
import FooterBar from "./components/MainUse/FooterBar.vue";
import PageCarousel from "@/components/Small/carousel/PageCarousel.vue";

const _pages = [{ id: 1, page: "/home" }];

function resetHoverState() {
  const hoveredElements = document.querySelectorAll(".hovered");
  hoveredElements.forEach((element) => {
    element.classList.remove("hovered");
  });
}
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
