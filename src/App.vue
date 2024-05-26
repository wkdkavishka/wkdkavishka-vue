<template>
  <div class="bg-teal-200 dark:bg-teal-400">
    <NavBar class="fixed top-0 w-full z-0" />
    <!-- to fix nav-bar covering the router-view  -->
    <div class="pt-64"></div>
    <div class="pt-4"></div>
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import FooterBar from "./components/FooterBar.vue";
</script>
