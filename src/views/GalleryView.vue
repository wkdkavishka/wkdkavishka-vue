<template>
  <div id="home view" class="container mx-auto px-4 py-4">
    <!--  Gallery view  -->
    <section>
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-2">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Archivements
        </h2>

        <hr class="my-1 border-blueGray-600" />

        <p class="mt-2 text-lg leading-8 text-gray-600">
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
                  class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                ></span>
                What I Provide
              </a>
            </h3>
            <p class="mt-1 line-clamp-3 text-md leading-6 text-gray-600">
              servicess provide
            </p>
          </div>
        </article>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-7xl py-2 pt-6">
        <hr class="my-1 border-blueGray-600" />
        <h1
          class="font-bold text-3xl text-center text-gray-800 pb-6 sm:w-4/6 w-5/6 mx-auto pt-4"
        >
          Testimonials
        </h1>
        <!-- test image carouselGallery -->
        <!--        <ImageCarouselGallery :list="images" />-->
        <image-carousel-card-active :list="cards" />
      </div>
    </section>
  </div>
</template>
