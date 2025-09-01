<script setup>
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'

const plans = [
  {
    name: "Auto / Celerio",
    price: 5500,
    duration: "15 Days",
    features: ["Basic Driving", "Traffic Rules", "Reverse & Parking", "Dual-Control Vehicle"],
    icon: "🚗"
  },
  {
    name: "WagonR",
    price: 5000,
    duration: "15 Days",
    features: ["Comfort Driving", "Road Signals", "Parallel Parking", "Experienced Trainer"],
    icon: "🚙"
  },
  {
    name: "Swift",
    price: 5500,
    duration: "18 Days",
    features: ["Clutch Mastery", "Real-World Roads", "Speed Control", "Professional Feedback"],
    icon: "🚘"
  },
  {
    name: "Honda Amaze",
    price: 6500,
    duration: "20 Days",
    features: ["Luxury Drive", "Hill Practice", "High-Speed Control", "Premium Support"],
    icon: "🚗"
  },
  {
    name: "Renault Kiger",
    price: 7500,
    duration: "22 Days",
    features: ["SUV Practice", "Long Route Training", "Night Drive", "Advanced Control"],
    icon: "🚙"
  },
  {
    name: "Two-Wheeler",
    price: 2999,
    duration: "10 Days",
    features: ["Gear & Non-Gear", "Helmet Safety", "Balancing", "Scooter/Bike Option"],
    icon: "🏍️"
  },
]

const planRefs = ref([])

onMounted(() => {
  planRefs.value.forEach((el, index) => {
    useMotion(el, {
      initial: { opacity: 0, y: 60 },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          delay: index * 0.1,
          stiffness: 180,
        },
      },
    })
  })
})
</script>

<template>
  <section
    class="bg-yellow-100 text-black dark:bg-gray-950 dark:text-white py-20 px-6 sm:px-12 transition-colors duration-500"
  >
    <div class="text-center mb-16">
      <h2 class="text-4xl font-extrabold text-yellow-500 dark:text-yellow-400 mb-4">
        Pricing Plans
      </h2>
      <p class="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto text-lg">
        Choose the perfect course that fits your driving needs. Affordable, flexible, and professionally structured.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        ref="planRefs"
        class="bg-gray-100 dark:bg-gray-900 border border-yellow-600/20 rounded-3xl p-8 relative shadow-xl group hover:scale-[1.03] transition-all duration-300"
      >
        <div class="absolute inset-0 rounded-3xl opacity-5 group-hover:opacity-10 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-400 blur-lg z-0 transition-all duration-700"></div>

        <div class="relative z-10 space-y-4">
          <div class="text-5xl">{{ plan.icon }}</div>
          <h3 class="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{{ plan.name }}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">{{ plan.duration }} Training</p>

          <div class="text-4xl font-extrabold text-black dark:text-white">
            ₹{{ plan.price }}
          </div>

          <ul class="mt-4 space-y-2 text-gray-700 dark:text-gray-400">
            <li v-for="(feature, i) in plan.features" :key="i" class="flex items-start gap-2">
              <span class="text-yellow-500 dark:text-yellow-400">✔️</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <button
            class="mt-6 w-full py-3 text-center font-bold rounded-full transition
                   bg-yellow-500 text-black hover:bg-yellow-600
                   dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .bg-gradient-to-r {
  opacity: 0.1;
}
</style>
