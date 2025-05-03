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
import NavBar from "./components/Large/NavBar.vue";
import FooterBar from "./components/Large/FooterBar.vue";
// import { useHead } from "@vueuse/head";
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
