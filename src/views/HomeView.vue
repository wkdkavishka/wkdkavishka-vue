<!-- eslint-disable vue/no-multiple-template-root -->

<template>
  <div id="home view" class="container mx-auto px-4 py-4">
    <!-- about me -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
        >
          Who Am I
        </h2>

        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />

        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
          About me write something serious
        </p>

        <article
          class="flex max-w-xl flex-col items-start justify-between py-2"
        >
          <!-- <div class="flex items-center gap-x-4 text-xs">
                <p class="text-md leading-8 text-gray-600">As of</p>
                <time datetime="2020-03-16" class="text-gray-500"
                  >Mar 16, 2024</time
                >
                <a
                  href="#"
                  class="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >Undergraduate</a
                >
              </div> -->
          <div class="group">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a href="#">
                <span
                  class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100"
                  >What I Provide
                </span>
              </a>
            </h3>
            <p
              class="mt-1 line-clamp-3 text-md leading-6 text-gray-600 dark:text-slate-300"
            >
              servicess provide
            </p>
          </div>
        </article>
      </div>
    </section>

    <!--  work done  -->
    <section>
      <div class="mx-auto max-w-7xl py-2">
        <ImageCarousel :list="images" />

        <!-- test image carouselGallery -->
      </div>
    </section>

    <!-- familiar technologies -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2 pt-6">
        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />

        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          Familiar Technologies
        </h1>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            alt="Spring"
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            height="48"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1920px-Spring_Framework_Logo_2018.svg.png"
            width="158"
          />
          <img
            alt="Cassandra"
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            height="48"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg"
            width="158"
          />
          <img
            alt="Docker"
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            height="48"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1920px-Docker_%28container_engine%29_logo.svg.png"
            width="158"
          />
          <img
            alt="VueJs"
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            height="48"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            width="158"
          />
          <img
            alt="Ionic"
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            height="48"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1920px-Ionic-logo-landscape.svg.png"
            width="158"
          />
        </div>
      </div>
    </section>

    <!-- testimonials section -->
    <section>
      <div class="mx-auto max-w-7xl py-2 pt-6">
        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          People I've Worked With
        </h1>
        <!-- test image carouselGallery -->
        <!--        <ImageCarouselGallery :list="images" />-->
        <image-carousel-card-active :list="cards" />
      </div>
    </section>

    <!-- end home view -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageCarousel from "@/components/Small/carousel/ImageCarousel.vue";
import ImageCarouselCardActive from "@/components/Small/carousel/ImageCarouselCardActive.vue";

const isOpen = ref(false);

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

const _card = [
  {
    id: 1,
    name: "name 1",
    title: "title 1",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
    description:
      "test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test ",
  },
  {
    id: 2,
    name: "name 2",
    title: "title 2",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 3,
    name: "name 3",
    title: "title 3",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 4,
    name: "name 4",
    title: "title 4",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 5,
    name: "name 5",
    title: "title 5",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 6,
    name: "name 6",
    title: "title 6",
    image: "img/icons/Images/cards/card.jpg",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
];
const cards = ref(_card);
</script>
