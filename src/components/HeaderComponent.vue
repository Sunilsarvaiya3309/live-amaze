<script setup>
import { ref } from "vue";
import BaseIcon from "@/components/BaseIcon.vue";

const isOpen = ref(false);

const menuItems = [
  { label: "Home", to: "/home" },
  { label: "About Us", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Instructors", to: "/instructors" },
  { label: "Pricing", to: "/pricing" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];
</script>

<template>
  <header
    v-motion
    class="sticky top-0 z-50 bg-yellow-400 dark:bg-gray-800 text-black dark:text-yellow-400 shadow-md"
    :initial="{ y: -100, opacity: 0 }"
    :enter="{
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 150 },
    }"
  >
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 flex items-center justify-between h-20"
    >
      <!-- Logo -->
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.2, type: 'spring' },
        }"
      >
        <router-link to="/home" class="flex items-center gap-2">
          <img
            src="../../public/logo.png"
            alt="Logo"
            class="h-14 w-14 rounded-full shadow-lg"
          />
          <span class="font-bold text-xl flex flex-col">Amaze
            <span class="font-normal text-sm text-neutral-800 dark:text-yellow-400">Empowering Safe Drive</span>
          </span>
        </router-link>
      </div>

      <!-- Desktop Menu -->
      <ul
        v-motion
        class="hidden xl:flex space-x-6 font-semibold items-center"
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
      >
        <li v-for="(item, i) in menuItems" :key="i">
          <router-link
            :to="item.to"
            class="relative pb-1 text-black dark:text-yellow-400 hover:text-white dark:hover:text-white transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black dark:before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300"
          >
            {{ item.label }}
          </router-link>
        </li>
        <li>
          <router-link
            to="/enroll"
            class="ml-4 inline-block bg-black text-yellow-300 dark:bg-yellow-400 dark:text-black hover:bg-white hover:text-black dark:hover:bg-white transition duration-300 px-4 py-2 rounded-md font-semibold"
          >
            Enroll Now
          </router-link>
        </li>
      </ul>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="xl:hidden text-black dark:text-yellow-400 hover:text-white transition focus:outline-none"
      >
        <BaseIcon
          v-if="!isOpen"
          name="menuIcon"
          class="h-6 w-6 stroke-black dark:stroke-yellow-400"
        />
        <BaseIcon v-else name="closeIcon" class="h-6 w-6 stroke-black dark:stroke-yellow-400" />
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <transition
      :css="false"
      @leave="
        (el, done) => {
          el.animate(
            [
              { transform: 'translateY(0)', opacity: 1 },
              { transform: 'translateY(-400px)', opacity: 0 },
            ],
            { duration: 300, easing: 'ease-in-out' }
          ).onfinish = done;
        }
      "
    >
      <div
        v-if="isOpen"
        v-motion
        :initial="{ y: 400, opacity: 0 }"
        :enter="{ y: 0, opacity: 1, transition: { duration: 0.4 } }"
        class="xl:hidden bg-yellow-300 dark:bg-gray-900 shadow-inner px-4 pb-6"
      >
        <ul
          class="space-y-4 mt-4 pt-4 font-semibold text-black dark:text-yellow-400"
        >
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05 } }"
          >
            <router-link
              :to="item.to"
              class="block relative pb-1 hover:text-white dark:hover:text-white transition-colors duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-black dark:before:bg-yellow-400 hover:before:w-full before:transition-all before:duration-300"
              @click="isOpen = false"
            >
              {{ item.label }}
            </router-link>
          </li>
          <li
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 0.6 } }"
          >
            <router-link
              to="/enroll"
              class="block mt-2 bg-black text-yellow-300 dark:bg-yellow-400 dark:text-black hover:bg-white hover:text-black dark:hover:bg-white transition duration-300 px-4 py-2 rounded-md font-semibold text-center"
              @click="isOpen = false"
            >
              Enroll Now
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
