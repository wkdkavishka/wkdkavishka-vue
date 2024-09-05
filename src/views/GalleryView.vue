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
<script lang="ts" setup>
import ImageCarouselGallery from "@/components/Small/carousel/ImageCarouselGallery.vue";
import { ref } from "vue";

const _images = [
  { id: 1, url: "../../img/icons/Images/1.png" },
  { id: 2, url: "../../img/icons/Images/2.png" },
  { id: 3, url: "../../img/icons/Images/3.png" },
  { id: 4, url: "../../img/icons/Images/4.png" },
  { id: 5, url: "../../img/icons/Images/5.png" },
  { id: 6, url: "../../img/icons/Images/6.png" },
  { id: 7, url: "../../img/icons/Images/7.png" },
  { id: 8, url: "../../img/icons/Images/8.png" },
  { id: 9, url: "../../img/icons/Images/9.png" },
];
const images = ref(_images);
</script>
