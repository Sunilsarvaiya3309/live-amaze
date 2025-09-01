<script setup>
import { ref } from "vue";

const studentReview = ref([
  {
    name: "— Priya Patel",
    review: '"Amazing instructors! I got my license on the first attempt."',
  },
  {
    name: "— Rahul Mehta",
    review: '"Very flexible timings and great quality vehicles."',
  },
  {
    name: "— Simran Shah",
    review: '"I was very nervous, but their training made me confident."',
  },
]);

const whyChoosePoints = ref([
  {
    title: "Certified Trainers",
    message:
      "Our instructors are certified, patient, and experienced professionals.",
  },
  {
    title: "Flexible Timings",
    message: "Morning or evening, choose time slots that suit your schedule.",
  },
  {
    title: "Modern Vehicles",
    message: "We use modern, dual-control vehicles to maximize your safety.",
  },
]);

const services = ref([
  {
    title: "Beginner Course",
    message:
      "Perfect for first-time drivers. Learn the basics with confidence.",
    delay: 0.4,
  },
  {
    title: "Advanced Training",
    message:
      "Take your skills to the next level with advanced traffic techniques.",
    delay: 0.6,
  },
  {
    title: "Test Preparation",
    message: "Get ready for your license test with expert mock tests and tips.",
    delay: 0.8,
  },
]);
</script>

<template>
  <!-- Hero Section -->
  <section
    class="relative sm:h-screen w-full overflow-hidden text-white dark:text-white"
  >
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full sm:h-full h-72 object-cover z-0 brightness-[0.6]"
    >
      <source src="/video/car_animation.mp4" type="video/mp4" />
    </video>

    <div
      v-motion
      class="relative z-10 flex flex-col items-center justify-center sm:h-full h-72 text-center px-4"
      :initial="{ opacity: 0, y: 50 }"
      :enter="{
        opacity: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 80 },
      }"
    >
      <div
        v-motion
        :initial="{ opacity: 0, scale: 0.8 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: 0.3 } }"
        class="text-4xl sm:text-5xl xl:text-6xl font-bold mb-4 xl:flex items-center"
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/traffic-police-man-showing-hand-signal-illustration-download-in-svg-png-gif-file-formats--ready-to-go-pack-people-illustrations-2425188.png"
          class="w-48 xl:block hidden"
        />
        Welcome to <span class="text-yellow-400 mx-3"> Amaze </span> Motor Driving
        School
      </div>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.5 } }"
        class="text-lg sm:text-xl max-w-xl text-white/90 dark:text-white/80"
      >
        Your journey to safe and confident driving starts with us.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 0.8 } }"
        class="mt-8"
      >
        <a
          href="#services"
          class="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-300 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section
    id="services"
    class="bg-white dark:bg-gray-950 py-20 px-4 text-center"
  >
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { type: 'spring', delay: 0.2 } }"
      class="max-w-4xl mx-auto"
    >
      <h2
        class="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-yellow-300"
      >
        Our Driving Services
      </h2>
      <p class="text-gray-600 dark:text-white/70 mb-12 text-lg">
        We offer a variety of professional driving courses tailored to your
        needs.
      </p>

      <div class="grid xl:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: service.delay } }"
          class="p-6 bg-yellow-100 dark:bg-gray-800 dark:text-white rounded-lg shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold mb-2">{{ service.title }}</h3>
          <p>{{ service.message }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="bg-gray-900 dark:bg-black text-white py-20 px-4 text-center">
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.95 }"
      :enter="{
        opacity: 1,
        scale: 1,
        transition: { delay: 0.2, type: 'spring' },
      }"
      class="max-w-5xl mx-auto"
    >
      <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-yellow-400">
        Why Choose Amaze Driving School?
      </h2>
      <p class="text-white/80 mb-10 text-lg">
        Trusted by 1,000+ students. Learn from certified instructors with
        real-world experience.
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div
          v-for="(point, idx) in whyChoosePoints"
          :key="point.title"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 0.3 + idx * 0.2 } }"
          class="bg-gray-800 p-6 rounded-lg shadow"
        >
          <h3 class="text-xl font-semibold mb-2 text-yellow-300">
            {{ point.title }}
          </h3>
          <p class="text-white/80">{{ point.message }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="bg-yellow-100 dark:bg-gray-900 py-20 px-4 text-center">
    <div
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: 0.3 } }"
      class="max-w-5xl mx-auto"
    >
      <h2
        class="text-3xl sm:text-4xl font-bold mb-10 text-gray-800 dark:text-yellow-300"
      >
        What Our Students Say
      </h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        <div
          v-for="(review, idx) in studentReview"
          :key="idx"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 0.4 + idx * 0.2 } }"
          class="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow"
        >
          <p class="italic text-gray-700 dark:text-white/80">
            {{ review.review }}
          </p>
          <p class="mt-4 font-bold text-yellow-500">{{ review.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
