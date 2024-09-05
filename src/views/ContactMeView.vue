<template>
  <div id="contactme" class="container mx-auto px-4 py-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
      >
        Contact sales
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
        Aute magna irure deserunt veniam aliqua magna enim voluptate.
      </p>
    </div>
    <form action="#" class="mx-auto mt-16 max-w-xl sm:mt-20" method="POST">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="first-name"
            >First name</label
          >
          <div class="mt-2.5">
            <input
              id="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-teal-800 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="first-name"
              placeholder="First Name"
              type="text"
            />
          </div>
        </div>
        <div>
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="last-name"
            >Last name</label
          >
          <div class="mt-2.5">
            <input
              id="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="last-name"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="company"
            >Company</label
          >
          <div class="mt-2.5">
            <input
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="company"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="email"
            >Email</label
          >
          <div class="mt-2.5">
            <input
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="phone-number"
            >Phone number</label
          >
          <div class="mt-2.5">
            <div class="inset-y-0 left-0 flex items-center">
              <label class="sr-only" for="country">Country</label>
              <select
                id="country"
                class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-gray-900 dark:text-gray-200 dark:bg-custom-mid-dark"
                name="country"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input
              id="phone-number"
              autocomplete="tel"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="phone-number"
              type="tel"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="message"
            >Message</label
          >
          <div class="mt-2.5">
            <textarea
              id="message"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="message"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
            <button
              aria-checked="false"
              aria-labelledby="switch-1-label"
              class="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              role="switch"
              type="button"
            >
              <span class="sr-only">Agree to policies</span>
              <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
              <span
                aria-hidden="true"
                class="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
              ></span>
            </button>
          </div>
          <label
            id="switch-1-label"
            class="text-sm leading-6 tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
          >
            By selecting this, you agree to our
            <a class="font-semibold text-indigo-600" href="#"
              >privacy&nbsp;policy</a
            >.
          </label>
        </div>
      </div>
      <div class="mt-10">
        <button
          class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup></script>
