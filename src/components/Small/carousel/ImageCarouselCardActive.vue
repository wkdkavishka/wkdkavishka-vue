<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <Carousel
    v-model="currentSlide"
    :items-to-show="itemsToShow"
    :transition="500"
    :wrap-around="true"
    autoplay="2000"
    pause-autoplay-on-hover
    snap-align="center"
  >
    <Slide v-for="item in list" :key="item.id">
      <div class="carousel__slide" @click="slideTo(item.id - 1)">
        <NameCard
          :description="item.description"
          :git="item.git"
          :image="item.image"
          :linkedin="item.linkedin"
          :name="item.name"
          :title="item.title"
          :x="item.x"
          @click.stop="viewFull(item)"
        />
      </div>
    </Slide>
    <template #addons="{ slidesCount }">
      <Navigation v-if="slidesCount > 2" />
      <Pagination />
    </template>
  </Carousel>
  <CardModal
    :description="currentItem.description"
    :git="currentItem.git"
    :image="currentItem.image"
    :is-open="isModalOpen"
    :linkedin="currentItem.linkedin"
    :name="currentItem.name"
    :title="currentItem.title"
    :x="currentItem.x"
    @close="isModalOpen = false"
  />
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import { defineProps, onMounted, onUnmounted, ref } from "vue";
import NameCard from "@/components/Small/NameCard.vue";
import CardModal from "@/components/Small/carousel/CardModal.vue";

// Define reactive state
const currentSlide = ref(0);
const itemsToShow = ref(1);
const isModalOpen = ref(false);
const currentItem = ref({});

// Define methods
const slideTo = (val) => {
  currentSlide.value = val;
};

const viewFull = (item) => {
  currentItem.value = item;
  isModalOpen.value = true;
};

// Function to check the screen size and adjust itemsToShow
const updateItemsToShow = () => {
  const width = window.innerWidth;
  if (width <= 500) {
    itemsToShow.value = 1;
  } else if (width <= 750) {
    itemsToShow.value = 2;
  } else if (width <= 1024) {
    itemsToShow.value = 2.5;
  } else if (width <= 1536) {
    itemsToShow.value = 4;
  } else {
    itemsToShow.value = 5;
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
  transform: scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: scale(0.9);
}

.carousel__slide--prev {
  opacity: 0.8;
  transform: scale(0.9);
}

.carousel__slide--next {
  opacity: 0.8;
  transform: scale(0.9);
}

.carousel__slide--active {
  opacity: 1;
  transform: scale(1.1);
  z-index: 1;
}
</style>
