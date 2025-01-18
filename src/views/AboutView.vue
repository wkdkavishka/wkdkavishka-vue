<!-- eslint-disable vue/no-multiple-template-root -->

<template>
  <div id="about view" class="container mx-auto px-4 py-4 dark:text-white">
    <!-- about me -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h1
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
        >
          Who Am I
        </h1>

        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />

        <button id="download">
          <a
            class="custom-button my-1"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="W.K.D.Kavishka-Resume.pdf"
          >
            Download
          </a>
        </button>
        My resume

        <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
          Undergraduate in Software Engineering from
          <a
            :target="viewType === 'mobile' ? '_self' : '_blank'"
            href="https://ucsc.cmb.ac.lk/"
            rel="noopener noreferrer"
            class="text-teal-900 dark:text-teal-700 italic hover:underline"
          >
            University of Colombo School of Computing ( UCSC )</a
          >
          specializing in software engineering. Ready to utilize learned skills
          to further a company's mission. Eager to learn new skills and
          passionate about exploring new technologies, thrive on facing new
          challenges and developing abilities in a dynamic environment.
          Proactive team player who loves learning and adapting. With great
          confidence in abilities and a strong dedication to achieving goals,
          committed to success and growth. Also looking for opportunities that
          can strengthen my background in software development and technology.
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
      </div>
    </section>

    <!-- familiar technologies -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2 pt-6">
        <!-- <hr class="my-1 border-blueGray-600 dark:border-slate-500" /> -->

        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          Check Out My Work
        </h1>
        <div
          class="mx-auto mt-10 grid grid-cols-8 gap-4 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 xl:grid-cols-24 2xl:grid-cols-28"
        >
          <div
            v-for="tech in workDoneByMe"
            :key="tech.name"
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          >
            <a :href="tech.link" target="_blank">
              <img :src="tech.image" :alt="tech.name" height="48" width="80" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- testimonials section -->
    <section>
      <div class="mx-auto max-w-7xl py-2 pt-6">
        <!-- <hr class="my-1 border-blueGray-600 dark:border-slate-500" /> -->
        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          People I've Worked With
        </h1>
        <image-carousel-card-active :list="cardsOfPeopleIveWorkedWith" />
      </div>
    </section>

    <!-- find me Other -->
    <!-- <section>
      <div class="mx-auto max-w-7xl py-2 pt-6">
        <hr class="my-1 border-blueGray-600 dark:border-slate-500" />
        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          Find Me
        </h1>

        <div
          class="mx-auto mt-10 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 2xl:grid-cols-14"
        >
          <div
            v-for="media in socialMedia"
            :key="media.name"
            class="flex justify-center"
          >
            <a :href="media.link" target="_blank">
              <img
                :src="media.image"
                :alt="media.name"
                class="max-h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section> -->

    <!-- end home view -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageCarousel from "@/components/Small/carousel/ImageCarousel.vue";
import ImageCarouselCardActive from "@/components/Small/carousel/ImageCarouselCardActive.vue";
import { inject } from "vue";

const viewType = inject("viewType");

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

const _card = [
  {
    id: 1,
    name: "name 1",
    title: "title 1",
    image: "img/Images/cards/card.webp",
    alt: "Image for name 1",
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
    image: "img/Images/cards/card.webp",
    alt: "Image for name 2",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 3,
    name: "name 3",
    title: "title 3",
    image: "img/Images/cards/card.webp",
    alt: "Image for name 3",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 4,
    name: "name 4",
    title: "title 4",
    image: "img/Images/cards/card.webp",
    alt: "Image for name 4",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 5,
    name: "name 5",
    title: "title 5",
    image: "img/Images/cards/card.webp",
    alt: "Image for name 5",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
  {
    id: 6,
    name: "name 6",
    title: "title 6",
    image: "img/Images/cards/card.webp",
    alt: "Image for name 6",
    git: "git link",
    x: "x link",
    linkedin: "linkedin link",
  },
];
const cardsOfPeopleIveWorkedWith = ref(_card);

const workDoneByMe = [
  {
    name: "Spring",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1920px-Spring_Framework_Logo_2018.svg.png",
    link: "https://github.com/yourusername/spring-project",
  },
  {
    name: "Cassandra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg",
    link: "https://github.com/yourusername/cassandra-project",
  },
  {
    name: "Docker",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1920px-Docker_%28container_engine%29_logo.svg.png",
    link: "https://github.com/yourusername/docker-project",
  },
  {
    name: "VueJs",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    link: "https://github.com/yourusername/vue-project",
  },
  {
    name: "Ionic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1920px-Ionic-logo-landscape.svg.png",
    link: "https://github.com/yourusername/ionic-project",
  },
];

// const socialMedia = [
//   {
//     name: "Github",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1920px-Octicons-mark-github.svg.png",
//     link: "https://github.com/yourusername",
//   },
//   {
//     name: "Linkedin",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1920px-LinkedIn_logo_initials.png",
//     link: "https://www.linkedin.com/in/yourusername",
//   },
// ];
</script>
