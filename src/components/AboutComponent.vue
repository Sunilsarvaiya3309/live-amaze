<script setup>
import { ref, onMounted } from "vue";
import { useMotion } from "@vueuse/motion";
import NumberAnimation from "vue-number-animation";

const section1 = ref(null);
const section2 = ref(null);
const section3 = ref(null);

const stats = [
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Successful Drivers", value: 2000, suffix: "+" },
  { label: "Certifications", value: 5, suffix: "+" },
  { label: "Satisfaction Rate", value: 100, suffix: "%" },
];

onMounted(() => {
  useMotion(section1, {
    initial: { opacity: 0, y: 60 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 18, delay: 0.1 },
    },
  });

  useMotion(section2, {
    initial: { opacity: 0, x: -60 },
    enter: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, delay: 0.2 },
    },
  });

  useMotion(section3, {
    initial: { opacity: 0, y: 60 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", delay: 0.3 },
    },
  });
});
</script>

<template>
  <section
    class="bg-yellow-50 text-gray-800 dark:bg-black dark:text-white pt-20 pb-28 px-4 sm:px-10 overflow-hidden"
  >
    <!-- Hero Section -->
    <div ref="section1" class="max-w-5xl mx-auto text-center mb-20">
      <h1
        class="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4"
      >
        About <span class="text-yellow-400">Amaze Driving School</span>
      </h1>
      <p class="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
        With years of experience, expert instructors, and modern techniques, we
        are here to guide you on your journey to becoming a confident driver.
      </p>
    </div>

    <!-- Why Choose Us Section -->
    <div
      ref="section2"
      class="max-w-6xl mx-auto grid xl:grid-cols-3 gap-12 items-center mb-24"
    >
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/traffic-police-man-showing-hand-signal-illustration-download-in-svg-png-gif-file-formats--ready-to-go-pack-people-illustrations-2425188.png"
      />
      <div class="space-y-6">
        <h2 class="text-3xl font-semibold text-black dark:text-white">
          Why Choose Us?
        </h2>
        <ul
          class="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-base leading-relaxed"
        >
          <li>Certified and friendly instructors</li>
          <li>Flexible course timing</li>
          <li>High passing rate</li>
          <li>Modern dual-control vehicles</li>
          <li>Affordable pricing</li>
        </ul>
      </div>
      <img
        src="https://www.shutterstock.com/image-photo/portrait-positive-funky-young-man-600nw-2281892977.jpg"
        alt="Driving Class"
        class="w-full rounded-xl shadow-2xl"
      />
    </div>

    <!-- Stats Section -->
    <div
      ref="section3"
      class="max-w-6xl mx-auto grid sm:grid-cols-2 xl:grid-cols-4 gap-6 text-center"
    >
      <div
        v-for="(item, index) in stats"
        :key="index"
        v-motion
        :initial="{ opacity: 0, scale: 0.5 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: { delay: index * 0.1, type: 'spring' },
        }"
        class="bg-yellow-200 dark:bg-yellow-400 rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
      >
        <h3 class="text-4xl font-extrabold text-black tracking-wide">
          <NumberAnimation
            :from="0"
            :to="item.value"
            :duration="5"
            :format="(val) => Math.floor(val)"
          />{{ item.suffix }}
        </h3>
        <p class="text-base text-neutral-700 dark:text-black mt-2 font-medium">
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>
