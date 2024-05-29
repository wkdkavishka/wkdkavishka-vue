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
        <NameCard :name="item.name" :title="item.title" :image="item.image" />
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
    :items-to-show="1.5"
    :wrap-around="true"
    snap-align="center"
    :transition="500"
    autoplay="2000"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__item" @click="slideTo(item.id - 1)">
        <NameCardLite
          :name="item.name"
          :title="item.title"
          :image="item.image"
        />
      </div>
    </Slide>
    <template #addons>
      <pagination />
    </template>
  </Carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { defineProps, ref } from "vue";
import NameCard from "@/components/Small/NameCard.vue";
import NameCardLite from "@/components/Small/NameCardLite.vue";

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

// Extracting images from props
// const { images } = toRefs(props);
</script>
