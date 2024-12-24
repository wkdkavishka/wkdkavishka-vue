<template>
  <div id="contactme" class="container mx-auto px-4 py-4">
    <div class="mx-auto max-w-2xl text-center">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
      >
        Contact Me
      </h2>
      <p class="mt-2 text-lg leading-8 text-gray-600 dark:text-slate-300">
        Feel free to reach out to me for any inquiries or collaboration
        opportunities.
      </p>
    </div>
    <form
      class="mx-auto mt-16 max-w-xl sm:mt-20"
      method="POST"
      @submit.prevent="sendEmail"
    >
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="full-name"
          >
            Full Name
          </label>
          <div class="mt-2.5">
            <input
              id="full-name"
              name="full-name"
              type="text"
              autocomplete="name"
              placeholder="Your full name"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-inset focus:ring-teal-800 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="company"
          >
            Company
          </label>
          <div class="mt-2.5">
            <input
              id="company"
              autocomplete="organization"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="company"
              placeholder="Your company name"
              type="text"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="email"
          >
            Email
          </label>
          <div class="mt-2.5">
            <input
              id="email"
              autocomplete="email"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="phone-number"
          >
            Phone number
          </label>
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
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-4xl"
            for="message"
          >
            Message
          </label>
          <div class="mt-2.5">
            <textarea
              id="message"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-custom-mid-dark"
              name="message"
              placeholder="Tell us about your project, requirements, or any questions you have..."
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
              @click="privacyAccepted = !privacyAccepted"
            >
              <span class="sr-only">Agree to policies</span>
              <!-- Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" -->
              <span
                aria-hidden="true"
                :class="[
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                  { 'translate-x-3.5': privacyAccepted },
                ]"
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
          :disabled="isSubmitting"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const isSubmitting = ref(false);
const privacyAccepted = ref(false);

const sendEmail = async (e: Event) => {
  if (!privacyAccepted.value) {
    alert("Please accept the privacy policy to proceed.");
    return;
  }

  try {
    isSubmitting.value = true;
    const form = e.target as HTMLFormElement;

    const templateParams = {
      full_name: form["full-name"].value,
      from_email: form["email"].value,
      company_name: form["company"].value,
      phone: form["phone-number"].value,
      message: form["message"].value,
      to_email: "w.k.d.kavishka@outlook.com",
    };

    // Initialize EmailJS with your public key
    emailjs.init("qz_99WqAXBiP0MXqJ");

    // Replace these with your EmailJS credentials
    await emailjs.send(
      "service_y9ix33i",
      "template_e1c3rv8",
      templateParams,
      "qz_99WqAXBiP0MXqJ"
    );

    alert("Message sent successfully!");
    form.reset();
    privacyAccepted.value = false;
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Failed to send message. Please try again later.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
