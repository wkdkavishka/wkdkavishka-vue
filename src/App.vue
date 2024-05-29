<template>
  <div class="bg-slate-200">
    <NavBar class="fixed top-0 w-full z-50" />
    <!-- to fix nav-bar covering the router-view  -->
    <div class="pt-64"></div>
    <div class="pt-4"></div>
    <router-view />
    <FooterBar />
  </div>
</template>

<script setup>
import NavBar from "./components/MainUse/NavBar.vue";
import FooterBar from "./components/MainUse/FooterBar.vue";
</script>
