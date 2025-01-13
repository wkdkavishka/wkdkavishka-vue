<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div
    class="fixed w-full top-0 z-50 backdrop-blur-xl bg-teal-900/90 dark:bg-teal-900/70 transform-gpu transition-all duration-500"
    :class="{ 'translate-y-0': bigNavBar, '-translate-y-2': !bigNavBar }"
  >
    <div class="container mx-auto px-0 md:px-4">
      <nav
        :class="{ 'py-1 scale-90': !bigNavBar, 'py-4 scale-100': bigNavBar }"
        class="flex items-center justify-between flex-wrap px-2 transition-all duration-500 ease-in-out transform-gpu"
      >
        <!-- profile picture and name -->
        <div>
          <div class="flex-col items-center text-white">
            <div class="flex justify-center">
              <img
                :src="modalImageUrl"
                alt="wkdkImage"
                :class="{
                  'w-36 h-36 scale-100': bigNavBar,
                  'w-20 h-20 scale-95': !bigNavBar,
                }"
                class="mb-3 rounded-full shadow-md transition-all duration-500 ease-in-out transform-gpu"
              />
            </div>
            <div
              class="transition-all duration-500 ease-in-out transform-gpu"
              :class="{
                'opacity-0 scale-95 h-0 overflow-hidden': !bigNavBar,
                'opacity-100 scale-100': bigNavBar,
              }"
            >
              <div class="flex justify-center">
                <h5 class="mb-1 text-xl font-medium text-white">
                  W.K.D.Kavishka
                </h5>
              </div>
              <div class="flex justify-center">
                <span class="text-sm text-slate-300">Software Enginear</span>
              </div>
              <!-- <div id="download" class="flex justify-center" type="button">
                <a
                  class="text-center block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white md:block md:flex-auto my-1"
                  href="https://mega.nz/file/2BkgnKSI#g21uRHD38bGk5MDTeCbnYqWtcW-0dPOmtqjJnWGOJ2E"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download</a
                >
              </div> -->
            </div>
          </div>
        </div>

        <!-- navigation menu panel -->
        <section>
          <div
            id="menu"
            class="flex-auto flex-wrap px-4 md:flex md:items-center md:w-auto"
            name="menu"
          >
            <div class="text-sm block md:flex justify-between">
              <RouterLink
                active-class="bg-white/30 dark:bg-black/30 backdrop-blur-xl"
                class="block py-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-white/30 dark:hover:bg-black/30 hover:backdrop-blur-xl rounded"
                to="/"
                >Home
              </RouterLink>
              <RouterLink
                active-class="bg-white/30 dark:bg-black/30 backdrop-blur-xl"
                class="block py-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-white/30 dark:hover:bg-black/30 hover:backdrop-blur-xl rounded"
                to="/gallery"
                >Gallery
              </RouterLink>
              <RouterLink
                active-class="bg-white/30 dark:bg-black/30 backdrop-blur-xl"
                class="block py-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-white/30 dark:hover:bg-black/30 hover:backdrop-blur-xl rounded"
                to="/contactme"
                >Contace Me
              </RouterLink>
            </div>
          </div>
          <!-- end -->
        </section>

        <section>
          <button
            aria-label="Toggle dark mode"
            class="text-sm px-3 py-2 leading-none border rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white my-1 inline-flex items-center"
            @click="darkStatus = !darkStatus"
          >
            <span class="hidden sm:block mr-2">{{
              darkStatus ? "Dark" : "Light"
            }}</span>
            <svg
              v-if="darkStatus"
              class="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
            <svg v-else class="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              ></path>
            </svg>
          </button>
        </section>
        <!--    nav bar end    -->
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDark } from "@vueuse/core";
import { useThrottleFn } from "@vueuse/core";

// Import the image
import wkdkLogo from "@/assets/Images/wkdk-logo.jpg";

const darkStatus = useDark();
const modalImageUrl = ref(wkdkLogo);
const bigNavBar = ref(true);

// Throttled scroll handler for better performance
const handleScroll = useThrottleFn(() => {
  const currentScrollPosition = window.scrollY;
  bigNavBar.value = currentScrollPosition < 50;
}, 16); // approximately 60fps

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.will-change-transform {
  will-change: transform;
}

/* Optional: Add this if you want to prevent any layout shifts */
.nav-container {
  min-height: 4rem; /* Adjust based on your smallest navbar height */
}
</style>
