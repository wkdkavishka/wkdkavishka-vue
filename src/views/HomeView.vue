<!-- eslint-disable vue/no-multiple-template-root -->

<template>
  <div id="homeview" class="container mx-auto px-4 py-4">
    <!-- start home view -->

    <!-- Services Provide -->
    <div class="sm:py-2">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Who Am I
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            About me write something serious
          </p>
        </div>
        <div
          class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3 py-4"
        >
          <article class="flex max-w-xl flex-col items-start justify-between">
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
                  <span class="absolute inset-0"></span>
                  What I Provide
                </a>
              </h3>
              <p class="mt-1 line-clamp-3 text-md leading-6 text-gray-600">
                servicess provide
              </p>
            </div>
          </article>

          <!-- More posts... -->
        </div>
      </div>
    </div>

    <!-- familiar technologies -->
    <div class="bg-teal-200 dark:bg-teal-400">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
          Familiar Technologies
        </h2>
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1920px-Spring_Framework_Logo_2018.svg.png"
            alt="Spring"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Cassandra_logo.svg"
            alt="Cassandra"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1920px-Docker_%28container_engine%29_logo.svg.png"
            alt="Docker"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
            alt="VueJs"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/1920px-Ionic-logo-landscape.svg.png"
            alt="Ionic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>

    <Testamonials />

    <!-- test -->
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>
    <h1>something</h1>

    <!-- end test -->
    <!-- end home view -->
  </div>
</template>

<script setup>
import Testamonials from "../components/SingleUse/TestimonialsSection.vue";
</script>
