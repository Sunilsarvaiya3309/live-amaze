<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const footerRef = ref(null);
const mapRef = ref(null);

const menuItems = [
  { label: "Home", to: "/home" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Instructors", to: "/instructors" },
  { label: "Pricing", to: "/pricing" },
];

onMounted(() => {
  useMotion(footerRef, {
    initial: { y: 100, opacity: 0 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        delay: 0.2,
      },
    },
  });

  useMotion(mapRef, {
    initial: { scale: 0.8, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
        delay: 0.4,
      },
    },
  });
});
</script>

<template>
  <footer
    ref="footerRef"
    class="bg-yellow-400 text-black dark:bg-gray-800 dark:text-yellow-400 py-10 px-6 border-t border-black/20 dark:border-yellow-800"
  >
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10"
    >
      <!-- Logo & Description -->
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <img
            src="../../public/logo.png"
            alt="Logo"
            class="h-12 w-12 rounded-full shadow-md"
          />
          <h2 class="font-bold text-2xl">Amaze Driving</h2>
        </div>
        <p class="text-black dark:text-white/70 text-sm">
          Empowering safe and confident drivers. Join Amaze Mottr and master the
          road with expert instructors.
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
        <ul class="space-y-3 text-sm text-black dark:text-white/70">
          <li v-for="footerMenu in menuItems" :key="footerMenu">
            <router-link
              :to="footerMenu?.to"
              class="hover:text-white dark:hover:text-yellow-400"
            >
              {{ footerMenu?.label }}
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Contact Us</h3>
        <p class="text-sm text-black mb-2 dark:text-white/70">
          📍 223, 2nd Floor, Gala Magnus, Sukhasan Chowk, Safal Parisar Rd,
          South Bopal, Ahmedabad, Gujarat 380058
        </p>
        <div
          class="text-sm text-black mb-2 flex flex-col gap-2 dark:text-white/70"
        >
          <div class="flex items-center gap-1">
            📞
            <a href="tel:+91 92275 75667" class="hover:underline">
              +91 92275 75667</a
            >
          </div>
          <div>
            <span class="font-semibold">Admin</span> :-
            <a href="tel:+91 70160 62154" class="hover:underline"
              >+91 70160 62154</a
            >
          </div>
        </div>
        <p class="text-sm text-black dark:text-white/70">
          ✉️
          <a href="mailto:amazemotordriving@gmail.com" class="hover:underline"
            >amazemotordriving@gmail.com</a
          >
        </p>
      </div>

      <!-- Opening Hours -->
      <div>
        <h3 class="text-lg font-semibold mb-3">Opening Hours</h3>
        <p class="text-base text-black dark:text-white/70">
          🕘 Mon – Sat: 09:00 AM to 01:00 PM <br />
          <span class="text-center ml-7">03:00 PM to 09:00 PM</span>
        </p>
        <p class="text-base text-black dark:text-white/70">
          🚫 Sunday: <span class="font-semibold">Closed</span>
        </p>
      </div>
    </div>

    <!-- Google Map Section -->
    <div class="mt-12 max-w-5xl mx-auto">
      <h4 class="text-xl font-bold text-center mb-4">Find Us on Map</h4>
      <div
        ref="mapRef"
        class="rounded-xl overflow-hidden shadow-lg border-4 border-black/10 dark:border-white/10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.094740214006!2d72.46628569999999!3d23.016511199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ba582b5e56d%3A0x32fd1da3e8bc8b89!2sAmaze%20Motor%20Driving%20School!5e0!3m2!1sen!2sin!4v1721225690032!5m2!1sen!2sin"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="text-center mt-6">
        <a
          href="https://www.google.com/maps/place/Amaze+Motor+Driving+School..."
          target="_blank"
          class="inline-block mt-4 px-6 py-2 rounded-full bg-black text-yellow-500 hover:bg-white hover:text-black dark:bg-yellow-400 dark:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 font-semibold shadow-md"
        >
          🗺️ Get Directions on Google Maps
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="mt-10 pt-4 border-t border-black/20 dark:border-white/10 text-center text-sm text-black/75 dark:text-white/50"
    >
      © 2025 Amaze Driving School. All rights reserved.
    </div>
  </footer>
</template>
