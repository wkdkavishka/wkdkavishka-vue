<template>
  <div id="home view" class="container mx-auto px-4 py-4">
    <div class="fleax justify-around">
      <!--  Gallery view  -->
      <!--  industrial achievements  -->
      <section>
        <div class="mx-auto max-w-4xl px-6 lg:px-8 py-2">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
          >
            Industrial Achievements
          </h2>

          <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
        </div>
        <div class="mx-auto py-2 max-w-4xl">
          <ImageCarouselGallery :list="images" />
        </div>
      </section>

      <!--  educational achievements  -->
      <section>
        <div class="mx-auto max-w-4xl px-6 lg:px-8 py-2">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
          >
            Educational Achievements
          </h2>

          <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
        </div>
        <div class="mx-auto max-w-4xl py-2">
          <ImageCarouselGallery :list="images" />
        </div>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ImageCarouselGallery from "@/components/Small/carousel/ImageCarouselGallery.vue";
import { ref } from "vue";

const _images = [
  { id: 1, url: "/img/Images/1.webp" },
  { id: 2, url: "/img/Images/1.webp" },
  { id: 3, url: "/img/Images/1.webp" },
  { id: 4, url: "/img/Images/1.webp" },
  { id: 5, url: "/img/Images/1.webp" },
  { id: 6, url: "/img/Images/1.webp" },
  { id: 7, url: "/img/Images/1.webp" },
  { id: 8, url: "/img/Images/1.webp" },
  { id: 9, url: "/img/Images/1.webp" },
];
const images = ref(_images);
</script>
