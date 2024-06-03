<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Carousel
    id="gallery"
    v-model="currentSlide"
    :items-to-show="1"
    :wrap-around="true"
    :transition="500"
    snap-align="center"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__item">
        <img :src="item.url" :alt="item.url" @click.stop="viewFull(item.url)" />
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
    :wrap-around="true"
    snap-align="center"
    :transition="500"
    autoplay="2000"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__item" @click="slideTo(item.id - 1)">
        <img :alt="item.url" :src="item.url" @click.stop="viewFull(item.url)" />
      </div>
    </Slide>
    <template #addons>
      <pagination />
    </template>
  </Carousel>
  <ImageModal
    :is-open="isModalOpen"
    :image-url="modalImageUrl"
    @close="isModalOpen = false"
  />
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
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
// Extracting images from props
// const { images } = toRefs(props);
</script>
