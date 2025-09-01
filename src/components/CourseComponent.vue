<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";

const courseSection = ref(null);

const carCourses = [
  {
    name: "Auto/Celerio",
    image: "https://mda.spinny.com/sp-file-system/public/2025-06-27/77076666bdff46e2b9f61963be7251e9/raw/file.JPG?q=85&w=350",
    days: 15,
    features: [
      "Automatic transmission training",
      "Ideal for beginners",
      "Low traffic zone practice",
    ],
  },
  {
    name: "WagonR",
    image:
      "https://www.stridecabs.com/upload/car/wegnar-removebg-preview.png",
    days: 20,
    features: [
      "Manual gear handling",
      "Hill start practice",
      "Traffic driving exposure",
    ],
  },
  {
    name: "Swift",
    image:
      "https://www.varunmaruti.com/uploads/products/colors/new-swift-pearlr-arctic-white-with-midnight-black-roof.png",
    days: 25,
    features: [
      "Compact car driving",
      "U-turn & parking mastery",
      "Real-world driving techniques",
    ],
  },
  {
    name: "Honda Amaze",
    image:
      "https://www.pngarts.com/files/4/Honda-Amaze-Transparent-Background-PNG.png",
    days: 30,
    features: [
      "Sedan driving lessons",
      "Reverse and slope control",
      "Night driving practice",
    ],
  },
  {
    name: "Renault Kiger",
    image: "https://parkplus-bkt-img.parkplus.io/production/crawler/public/Crawler0e009f8246fb11f0b4feda4caa560746_20250612010413466905_3dd70f08-9bee-42e4-a682-30d53aea1a9c.jpg",
    days: 30,
    features: [
      "SUV driving fundamentals",
      "Highway training",
      "Emergency handling skills",
    ],
  },
  {
    name: "Two Wheeler",
    image:
      "https://images.tractorjunction.com/Red_Velocity_1_5a77774505.png?format=webp&quality=40&width=760&height=424",
    days: 10,
    features: [
      "Scooter & bike balancing",
      "Traffic lane control",
      "Helmet & safety gear practice",
      "Kick and self-start training",
    ],
  },
];

onMounted(() => {
  useMotion(courseSection, {
    initial: { opacity: 0, y: 80 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        delay: 0.1,
      },
    },
  });
});
</script>

<template>
  <section
    ref="courseSection"
    class="pt-20 pb-32 px-6 xl:px-12 lg:px-20 bg-gradient-to-br from-yellow-50 to-white dark:from-black dark:to-gray-800"
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Our <span class="text-yellow-500">Driving Courses</span>
      </h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Choose the best training program that fits your car preference and
        experience level.
      </p>
    </div>

    <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10">
      <div
        v-for="(car, index) in carCourses"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 30, scale: 0.95 }"
        :enter="{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { delay: index * 0.1, type: 'spring' },
        }"
        class="bg-white dark:bg-gray-900 dark:border dark:border-gray-700 
               rounded-2xl shadow-xl hover:shadow-2xl 
               transition duration-500 overflow-hidden group p-4"
      >
        <img
          :src="car.image"
          :alt="car.name"
          class="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
        <div class="p-6 space-y-3">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-yellow-300">{{ car.name }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">
            <span class="font-semibold text-yellow-600 dark:text-yellow-400">
              {{ car.days }} Days
            </span>
            Full Training
          </p>
          <ul class="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <li v-for="(feature, idx) in car.features" :key="idx">
              {{ feature }}
            </li>
          </ul>
          <button
            class="mt-4 hover:translate-x-5 hover:translate-y-2 duration-300 inline-block 
                   bg-yellow-400 hover:bg-yellow-500 text-black 
                   dark:bg-yellow-500 dark:hover:bg-yellow-400 
                   dark:text-black 
                   text-sm font-semibold px-5 py-2 rounded-full shadow transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
