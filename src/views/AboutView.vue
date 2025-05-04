<!-- eslint-disable vue/no-multiple-template-root -->

<template>
  <div id="about view" class="container mx-auto px-4 py-4 dark:text-white">
    <!-- about me -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h1
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
        >
          I am W.K.D.Kavishka
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
          <div class="flex items-center gap-x-4 text-xs">
            <p class="text-md leading-8 text-gray-600">As of</p>
            <time datetime="2020-03-16" class="text-gray-500">{{
              new Date().toLocaleString().split(" ")[0].slice(0, 8)
            }}</time>
            <a
              href="#"
              class="rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >{{ graduateState }}</a
            >
          </div>
          <div class="group">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a href="#">
                <span
                  class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-slate-100"
                  >My Projects
                </span>
              </a>
            </h3>
            <p
              class="py-1 line-clamp-3 text-md leading-6 text-gray-600 dark:text-slate-300"
            >
              check on
              <a
                href="https://github.com/wkdkavishka?tab=repositories"
                :target="viewType === 'mobile' ? '_self' : '_blank'"
                rel="noopener noreferrer"
              >
                github
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>

    <!--  work done title  -->
    <section>
      <div class="mx-auto max-w-7xl py-2">
        <ImageCarousel :list="projects" />
      </div>
    </section>

    <!--  work done  -->
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
    <!-- end work done -->

    <!-- testimonials section -->
    <section>
      <div class="mx-auto max-w-7xl py-2 pt-6">
        <!-- <hr class="my-1 border-blueGray-600 dark:border-slate-500" /> -->
        <h1
          class="font-bold text-3xl text-center text-gray-800 dark:text-slate-100 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          People I've Worked With
        </h1>
        <image-carousel-card-active :list="PeopleIveWorkedWith" />
      </div>
    </section>
    <!-- end testimonials section -->

    <!-- end home view -->
  </div>
</template>

<script setup>
import ImageCarousel from "@/components/Small/carousel/ImageCarousel.vue";
import ImageCarouselCardActive from "@/components/Small/carousel/ImageCarouselCardActive.vue";
import { inject, ref } from "vue";
import env from "../../env.json";

const viewType = inject("viewType");
const graduateState = ref("Undergraduate");

const projects = ref(env.projects);

const PeopleIveWorkedWith = ref(env.PeopleIveWorkedWith);

const workDoneByMe = ref(env.workDoneByMe);
</script>
