<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <div class="bg-teal-900 pt-0 pb-0">
    <div class="container mx-auto px-0 md:px-4">
      <nav class="flex items-center justify-between flex-wrap py-3 px-4">
        <!-- profile picture and name -->
        <div class="flex-col items-center text-white mr-6">
          <div class="flex justify-center">
            <img
              class="w-36 h-36 mb-3 rounded-full shadow-md"
              src="@/assets/images/dk-logo.jpg"
              alt="Bonnie image"
            />
          </div>
          <div class="flex justify-center">
            <h5 class="mb-1 text-xl font-medium text-white">W.K.D.Kavishka</h5>
          </div>
          <div class="flex justify-center">
            <span class="text-sm text-gray-400">Software Enginear</span>
          </div>
          <div id="download" class="flex justify-center">
            <a
              href="#"
              class="text-center block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white md:block md:flex-auto my-1"
              >Download</a
            >
          </div>
        </div>

        <!-- navigation menu pannel -->
        <div
          id="menu"
          name="menu"
          class="flex-auto flex-wrap px-4 md:flex md:items-center md:w-auto"
        >
          <div class="text-sm block md:flex justify-between">
            <RouterLink
              to="/"
              class="block mt-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-teal-700 rounded"
              >Home</RouterLink
            >
            <a
              href="#responsive-header"
              class="block mt-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-teal-700 rounded"
            >
              Examples </a
            ><RouterLink
              to="/contactme"
              class="block mt-2 px-2 mr-2 md:inline-block md:mt-0 text-teal-200 hover:text-white hover:bg-teal-700 rounded"
              >Contace Me</RouterLink
            >
          </div>
        </div>
        <!-- end -->
        <!-- theme toggle -->

        <div>
          <button
            id="toggledark"
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
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const toggleDark = useToggle(useDark());
const isOpen = ref(false);
// const alwaysOpen = ref(true);
</script>
