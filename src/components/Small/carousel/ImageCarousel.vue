<template>
  <carousel
    v-model="currentSlide"
    :items-to-show="itemsToShow"
    :wrap-around="true"
    snap-align="center"
    :transition="500"
    autoplay="2000"
    pause-autoplay-on-hover
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__slide" @click="slideTo(item.id - 1)">
        <img class="object-cover h-auto w-80" :src="item.url" :alt="item.url" />
      </div>
    </Slide>

    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 2" />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { defineProps, onMounted, onUnmounted, ref } from "vue";

// Define reactive state
const currentSlide = ref(0);
const itemsToShow = ref(1);

const slideTo = (val) => {
  currentSlide.value = val;
};

// Function to check the screen size and adjust itemsToShow
const updateItemsToShow = () => {
  const width = window.innerWidth;
  if (width <= 500) {
    itemsToShow.value = 1;
  } else if (width <= 750) {
    itemsToShow.value = 2;
  } else if (width <= 1200) {
    itemsToShow.value = 2.5;
  } else if (width <= 1536) {
    itemsToShow.value = 3;
  } else {
    itemsToShow.value = 4;
  }
};

onMounted(() => {
  updateItemsToShow();
  window.addEventListener("resize", updateItemsToShow);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateItemsToShow);
});

// Define props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 1;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 0.9;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--next {
  opacity: 0.9;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  z-index: 1;
}
</style>
