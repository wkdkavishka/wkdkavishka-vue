<!--
  ContactMeView.vue
  
  A Vue 3 component that implements a contact form with EmailJS integration.
  
  Features:
  - Responsive contact form with modern UI using Tailwind CSS
  - Email sending functionality using EmailJS service
  - Form validation and privacy policy agreement
  - Dark mode support
  - Interactive form elements with proper accessibility
  
  Form Fields:
  - Full Name: Single input for user's complete name
  - Company: Company/Organization name
  - Email: User's email address
  - Phone Number: Contact number with country selection
  - Message: Multi-line text area for detailed messages
  
  Dependencies:
  - @emailjs/browser: For sending emails
  - Tailwind CSS: For styling
  
  EmailJS Configuration:
  - Service ID: service_y9ix33i
  - Template ID: template_e1c3rv8
  - Public Key: qz_99WqAXBiP0MXqJ
  
  Usage:
  ```vue
  <template>
    <ContactMeView />
  </template>
  ```
-->

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
          <label class="inline-flex items-center cursor-pointer">
            <input
              v-model="privacyAccepted"
              type="checkbox"
              class="sr-only peer"
            />
            <div
              class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"
            ></div>
            <span
              class="ms-3 text-sm leading-6 tracking-tight text-gray-900 dark:text-slate-100"
            >
              By selecting this, you agree to our
              <a class="font-semibold text-indigo-600" href="#"
                >privacy&nbsp;policy</a
              >.
            </span>
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
/**
 * Imports and Dependencies
 */
import { ref } from "vue";
import emailjs from "@emailjs/browser";

/**
 * Reactive State
 */
const isSubmitting = ref(false); // Tracks form submission state
const privacyAccepted = ref(false); // Tracks privacy policy acceptance

/**
 * Handles the form submission and email sending process
 * @param {Event} e - The form submission event
 */
const sendEmail = async (e: Event) => {
  // Validate privacy policy acceptance
  if (!privacyAccepted.value) {
    alert("Please accept the privacy policy to proceed.");
    return;
  }

  try {
    isSubmitting.value = true;
    const form = e.target as HTMLFormElement;

    // Prepare email template parameters
    const templateParams = {
      full_name: form["full-name"].value,
      from_email: form["email"].value,
      company_name: form["company"].value,
      phone: form["phone-number"].value,
      message: form["message"].value,
      to_email: "w.k.d.kavishka@outlook.com",
    };

    // Initialize EmailJS with public key
    emailjs.init("qz_99WqAXBiP0MXqJ");

    // Send email using EmailJS service
    await emailjs.send(
      "service_y9ix33i",
      "template_e1c3rv8",
      templateParams,
      "qz_99WqAXBiP0MXqJ"
    );

    // Handle successful submission
    alert("Message sent successfully!");
    form.reset();
    privacyAccepted.value = false;
  } catch (error) {
    // Handle errors
    console.error("Error sending email:", error);
    alert("Failed to send message. Please try again later.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>
