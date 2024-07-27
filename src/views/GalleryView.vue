<template>
  <div id="home view" class="container mx-auto px-4 py-4">
    <!--  Gallery view  -->
    <!--  industrial achievements  -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
        >
          Industrial Achievements
        </h2>

        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
      </div>
      <div class="mx-auto max-w-7xl py-2">
        <ImageCarouselGallery :list="images" />
      </div>
    </section>

    <!--  educational achievements  -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
        >
          Educational Achievements
        </h2>

        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
      </div>
      <div class="mx-auto max-w-7xl py-2">
        <ImageCarouselGallery :list="images" />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import ImageCarouselGallery from "@/components/Small/carousel/ImageCarouselGallery.vue";
import { ref } from "vue";

const _images = [
  { id: 1, url: "https://picsum.photos/300/200?q=1" },
  { id: 2, url: "https://picsum.photos/300/200?q=2" },
  { id: 3, url: "https://picsum.photos/300/200?q=3" },
  { id: 4, url: "https://picsum.photos/300/200?q=4" },
  { id: 5, url: "https://picsum.photos/300/200?q=5" },
  { id: 6, url: "https://picsum.photos/300/200?q=6" },
  { id: 7, url: "https://picsum.photos/300/200?q=7" },
  { id: 8, url: "https://picsum.photos/300/200?q=8" },
  { id: 9, url: "https://picsum.photos/300/200?q=9" },
];
const images = ref(_images);
</script>
