<template>
  <!-- name card -->
  <div class="my-4 mx-6" role="listitem">
    <div
      class="rounded overflow-hidden shadow-md bg-slate-50 dark:bg-custom-darker"
    >
      <div class="w-full flex justify-center px-3 py-3">
        <div class="h-52 sm:h-64 w-52 sm:w-64">
          <img
            :src="image"
            alt="Display Picture of Andres Berlin"
            class="rounded-full object-cover h-full w-full shadow-md"
            role="img"
          />
        </div>
      </div>
      <div class="px-6 mt-2">
        <h1 class="font-bold text-2xl text-center mb-1 dark:text-slate-100">
          {{ name }}
        </h1>
        <p class="text-gray-800 text-sm text-center dark:text-slate-100">
          {{ title }}
        </p>
        <p class="text-center text-gray-600 text-base pt-3 font-normal">
          {{ description }}
        </p>
        <div class="w-full flex justify-center pt-5 pb-5">
          <a :href="git" class="mx-5">
            <div aria-label="Github" role="img">
              <svg
                class="feather feather-github"
                fill="none"
                height="24"
                stroke="#718096"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </div>
          </a>
          <a :href="x" class="mx-5">
            <div aria-label="Twitter" role="img">
              <svg
                class="feather feather-twitter"
                fill="none"
                height="24"
                stroke="#718096"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                ></path>
              </svg>
            </div>
          </a>
          <a :href="linkedin" aria-label="LinkedIn" class="mx-5" role="img">
            <svg
              class="feather feather-linkedin"
              fill="none"
              height="24"
              stroke="#718096"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z"
              ></path>
              <rect height="12" width="4" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  name: { type: String, default: "name", required: true },
  title: { type: String, default: "title", required: true },
  git: { type: String, default: "git link", required: true },
  x: { type: String, default: "x link", required: true },
  linkedin: { type: String, default: "linkedin link", required: true },
  image: {
    type: String,
    default: "@/assets/images/dk-logo.jpg",
    required: true,
  },
  description: { type: String, default: "Some description", required: true },
});
</script>
