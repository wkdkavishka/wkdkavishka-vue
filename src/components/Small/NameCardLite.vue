<template>
  <!-- name card -->
  <div class="my-4 mx-6" role="listitem">
    <div class="rounded overflow-hidden shadow-md bg-slate-50">
      <div class="w-full flex justify-center">
        <div class="h-32 w-32">
          <img
            :src="image"
            alt="Display Picture of Andres Berlin"
            class="rounded-full object-cover h-full w-full shadow-md"
            role="img"
          />
        </div>
      </div>
      <div class="px-6">
        <h1 class="font-bold text-3xl text-center mb-1">{{ name }}</h1>
        <p class="text-gray-800 text-sm text-center">
          {{ title }}
        </p>
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
