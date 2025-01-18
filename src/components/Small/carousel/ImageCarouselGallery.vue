<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Carousel
    id="gallery"
    v-model="currentSlide"
    :items-to-show="1"
    :transition="500"
    :wrap-around="true"
    snap-align="center"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__item">
        <img :alt="item.url" :src="item.url" @click.stop="viewFull(item.url)" />
      </div>
    </Slide>
    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 2" />
    </template>
  </Carousel>
  <br />
  <Carousel
    id="thumbnails"
    ref="carousel"
    v-model="currentSlide"
    :items-to-show="4.5"
    :transition="500"
    :wrap-around="true"
    :autoplay="autoplay"
    snap-align="center"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__item" @click="slideTo(item.id - 1)">
        <img :alt="item.url" :src="item.url" @click.stop="viewFull(item.url)" />
      </div>
    </Slide>
    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 2" />
      <Pagination />
    </template>
  </Carousel>
  <ImageModal
    :image-url="modalImageUrl"
    :is-open="isModalOpen"
    @close="isModalOpen = false"
  />
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { defineProps, ref } from "vue";
import ImageModal from "@/components/Small/carousel/ImageModal.vue";

const isModalOpen = ref(false);
const modalImageUrl = ref("");

// Define props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
// Define reactive state
const currentSlide = ref(0);
// Define methods
const slideTo = (val) => {
  currentSlide.value = val;
};
const viewFull = (url) => {
  modalImageUrl.value = url;
  isModalOpen.value = true;
};
</script>
