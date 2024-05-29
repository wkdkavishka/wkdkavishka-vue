<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />

  <footer class="relative bg-slate-100 dark:bg-custom-mid-dark py-2">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left md:text-left justify-center">
        <div class="w-full md:w-6/12 px-4">
          <!-- <h4 class="text-3xl fonat-semibold text-blueGray-700 text-center">
            Let's keep in touch!
          </h4> -->
          <h5
            class="text-lg mt-0 mb-2 text-blueGray-600 dark:text-slate-300 text-center"
          >
            Find Me on other platforms
          </h5>
          <div class="my-2 md:mb-0 text-center">
            <button
              class="bg-white dark:bg-custom-darker text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="bg-white dark:bg-custom-darker text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="bg-white dark:bg-custom-darker text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="bg-white dark:bg-custom-darker text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <i class="fab fa-github bg-slate-200 circle"></i>
            </button>
          </div>
        </div>
      </div>
      <hr class="my-2 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div
            class="text-sm text-blueGray-500 dark:text-slate-300 font-semibold py-1"
          >
            Copyright ©
            <a
              href=""
              class="text-blueGray-500 dark:text-slate-300 hover:text-gray-800"
              target="_blank"
            >
              W.K.D.Kavishka
            </a>
            <span id="get-current-year ">2024</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style>
.circle {
  border-radius: 50%;
}
</style>
