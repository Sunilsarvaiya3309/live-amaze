<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";
import rajbhai from "@/assets/images/rajbhai.jpg";
import sahilDesai from "@/assets/images/sahil_desai.jpg";
import AnitaRajguru from "@/assets/images/anita_rajguru.jpg";
import Krishnakant from "@/assets/images/krishnakant.jpg";
import ArunJoshi from "@/assets/images/arun_joshi.jpg";
import priyaValodra from "@/assets/images/priya valodra.jpg"

const ceoRef = ref(null);
const staffCards = ref([]);
const instructorCards = ref([]);

const ceo = {
  name: "Anita Rajguru",
  title: "Founder",
  image: AnitaRajguru,
  bio: "With over 10 years of experience, Anita founded Amaze Driving School to help people learn safe, confident driving.",
};

const officeStaff = [
   {
    name: "Krishnakant Rajguru",
    title: "CEO",
    image: Krishnakant,
  },
   {
    name: "Arun Joshi",
    title: "CTO",
    image: ArunJoshi,
  },
  {
    name: "Raj",
    title: "Management & Admin",
    image: rajbhai,
  },
];

const instructors = [
  {
    name: "Sahil Desai",
    title: "Car Instructor",
    image: sahilDesai,
  },
  {
    name: "Kishan Solanki",
    title: "Car Instructor",
    image: "https://cdn-icons-png.flaticon.com/512/6858/6858504.png",
  },
  {
    name: "Priya Valodra",
    title: "Female Car Instructor",
    image: priyaValodra,
  },
];

onMounted(() => {
  useMotion(ceoRef, {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    enter: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 15,
        mass: 1.5,
        delay: 0.1,
      },
    },
  });

  staffCards.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, y: 40, scale: 0.8 },
      enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 150,
          delay: 0.2 + index * 0.15,
        },
      },
    });
  });

  instructorCards.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, scale: 0.7, rotateZ: -5 },
      enter: {
        opacity: 1,
        scale: 1,
        rotateZ: 0,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 160,
          delay: 0.4 + index * 0.1,
        },
      },
    });
  });
});
</script>

<template>
  <section
    class="bg-yellow-100 text-gray-900 dark:bg-[#0f0f0f] dark:text-yellow-400 py-20 px-6 sm:px-10 transition-colors duration-500"
  >
    <!-- CEO -->
    <div
      ref="ceoRef"
      class="max-w-4xl mx-auto text-center cursor-pointer mb-20"
    >
      <img
        :src="ceo.image"
        alt="CEO"
        class="w-44 h-44 mx-auto rounded-full border-4 border-yellow-500 shadow-2xl"
      />
      <h2 class="text-3xl font-bold mt-6 text-black dark:text-white">
        {{ ceo.name }}
      </h2>
      <p class="text-yellow-600 dark:text-yellow-300 font-medium text-lg">
        {{ ceo.title }}
      </p>
      <p
        class="text-gray-700 dark:text-gray-400 mt-4 text-base max-w-2xl mx-auto"
      >
        {{ ceo.bio }}
      </p>
    </div>

    <!-- Office Staff -->
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-yellow-400">
        <span class="text-yellow-600 dark:text-yellow-500"
          >Backend Team Management & Office Staff</span
        >
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <div
          v-for="(staff, index) in officeStaff"
          :key="index"
          ref="el => staffCards.value[index] = el"
          class="bg-gray-100 dark:bg-[#1f1f1f] p-6 cursor-pointer rounded-2xl shadow-xl text-center hover:scale-105 transition"
        >
          <img
            :src="staff.image"
            :alt="staff.name"
            class="w-32 h-32 mx-auto rounded-full border-4 border-yellow-400 object-cover"
          />
          <h3 class="text-lg font-semibold mt-4 text-black dark:text-white">
            {{ staff.name }}
          </h3>
          <p class="text-sm text-yellow-600 dark:text-yellow-300">
            {{ staff.title }}
          </p>
        </div>
      </div>
    </div>

    <!-- Instructors -->
    <div class="text-center">
      <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-yellow-400">
        Driving
        <span class="text-yellow-600 dark:text-yellow-500">Instructors</span>
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <div
          v-for="(instructor, index) in instructors"
          :key="index"
          ref="el => instructorCards.value[index] = el"
          class="bg-gray-100 dark:bg-[#1a1a1a] p-6 cursor-pointer rounded-2xl shadow-xl text-center hover:scale-105 transition duration-300"
        >
          <img
            :src="instructor.image"
            :alt="instructor.name"
            class="w-28 h-28 mx-auto rounded-full object-cover border-4 border-yellow-400"
          />
          <h3 class="text-lg font-semibold text-black dark:text-white mt-4">
            {{ instructor.name }}
          </h3>
          <p class="text-sm text-yellow-600 dark:text-yellow-300">
            {{ instructor.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
