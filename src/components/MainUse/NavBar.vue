<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="backdrop-blur-xl bg-teal-900/90 dark:bg-teal-900/70">
    <div class="container mx-auto px-0 md:px-4">
      <nav class="flex items-center justify-between flex-wrap py-1 px-2">
        <!-- profile picture and name -->
        <section>
          <div>
            <div class="flex-col items-center text-white">
              <div class="flex justify-center">
                <img
                  :src="modalImageUrl"
                  alt="wkdkImage"
                  class="w-36 h-36 mb-3 rounded-full shadow-md"
                />
              </div>
              <div class="flex justify-center">
                <h5 class="mb-1 text-xl font-medium text-white">
                  W.K.D.Kavishka
                </h5>
              </div>
              <div class="flex justify-center">
                <span class="text-sm text-slate-300">Software Enginear</span>
              </div>
              <div id="download" class="flex justify-center" type="button">
                <a
                  class="text-center block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white md:block md:flex-auto my-1"
                  href="https://mega.nz/file/2BkgnKSI#g21uRHD38bGk5MDTeCbnYqWtcW-0dPOmtqjJnWGOJ2E"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download</a
                >
              </div>
            </div>
          </div>
        </section>

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

        <!-- theme toggle -->
        <section>
          <div>
            <div
              id="toggleDark"
              class="h-12 w-12 rounded-md p-2 block ali"
              @click="toggleDark()"
            >
              <svg
                class="fill-violet-700 hidden dark:block"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>
              <svg
                class="fill-yellow-500 block dark:hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clip-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </section>

        <!--    new dark drop down    -->
        <section>
          <div class="relative inline-block text-right">
            <div
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              class="text-sm px-3 py-2 leading-none border rounded text-white hover:border-transparent hover:text-teal-500 hover:bg-white my-1 inline-flex"
              type="button"
              @click="isOpen = !isOpen"
            >
              <label class="hidden sm:block"> Options </label>
              <svg
                aria-hidden="true"
                class="h-4 w-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  clip-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  fill-rule="evenodd"
                />
              </svg>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
              :class="isOpen ? 'block' : 'hidden'"
              aria-labelledby="menu-button"
              aria-orientation="vertical"
              class="text-white absolute right-0 z-10 mt-2 w-24 origin-top-right rounded backdrop-blur-xl bg-teal-900/90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-center"
              role="menu"
              tabindex="-1"
            >
              <div role="none" @mouseleave="isOpen = false">
                <a
                  id="menu-item-0"
                  class="block px-4 py-2 text-sm rounded hover:bg-white/30 dark:hover:bg-black/30 hover:backdrop-blur-xl"
                  href="#"
                  role="menuitem"
                  tabindex="-1"
                  @click="darkStatus = false"
                  >Light</a
                >
                <a
                  id="menu-item-1"
                  class="block px-4 py-2 text-sm rounded hover:bg-white/30 dark:hover:bg-black/30 hover:backdrop-blur-xl"
                  href="#"
                  role="menuitem"
                  tabindex="-1"
                  @click="darkStatus = true"
                  >Dark</a
                >
                <!--                <form method="POST" action="#" role="none">-->
                <!--                  <button-->
                <!--                    id="menu-item-3"-->
                <!--                    type="submit"-->
                <!--                    class="block px-4 py-2 text-sm rounded hover:bg-red-500/70 dark:hover:bg-red-700/70 hover:backdrop-blur-xl"-->
                <!--                    role="menuitem"-->
                <!--                    tabindex="-1"-->
                <!--                  >-->
                <!--                    Sign out-->
                <!--                  </button>-->
                <!--                </form>-->
              </div>
            </div>
          </div>
        </section>
        <!--    nav bar end    -->
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

// Import the image
import wkdkLogo from "@/assets/Images/wkdk-logo.jpg";

const darkStatus = useDark();
const toggleDark = useToggle(darkStatus);
const isOpen = ref(false);
const modalImageUrl = ref(wkdkLogo);
</script>
